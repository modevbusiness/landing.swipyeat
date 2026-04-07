-- WARNING: This schema is for context only and is not meant to be run.
-- Table order and constraints may not be valid for execution.

CREATE TABLE public.categories (
  id uuid NOT NULL DEFAULT uuid_generate_v4(),
  restaurant_id uuid NOT NULL,
  name text NOT NULL,
  name_ar text,
  name_fr text,
  description text,
  description_ar text,
  description_fr text,
  image_url text,
  is_active boolean DEFAULT true,
  created_at timestamp with time zone DEFAULT now(),
  updated_at timestamp with time zone DEFAULT now(),
  CONSTRAINT categories_pkey PRIMARY KEY (id),
  CONSTRAINT categories_restaurant_id_fkey FOREIGN KEY (restaurant_id) REFERENCES public.restaurants(id)
);
CREATE TABLE public.item_variants (
  id uuid NOT NULL DEFAULT uuid_generate_v4(),
  menu_item_id uuid NOT NULL,
  name text NOT NULL,
  name_ar text,
  name_fr text,
  price_adjustment numeric DEFAULT 0,
  is_default boolean DEFAULT false,
  is_available boolean DEFAULT true,
  created_at timestamp with time zone DEFAULT now(),
  CONSTRAINT item_variants_pkey PRIMARY KEY (id),
  CONSTRAINT item_variants_menu_item_id_fkey FOREIGN KEY (menu_item_id) REFERENCES public.menu_items(id)
);
CREATE TABLE public.menu_item_modifiers (
  menu_item_id uuid NOT NULL,
  modifier_id uuid NOT NULL,
  is_required boolean DEFAULT false,
  max_selections integer,
  CONSTRAINT menu_item_modifiers_pkey PRIMARY KEY (menu_item_id, modifier_id),
  CONSTRAINT menu_item_modifiers_menu_item_id_fkey FOREIGN KEY (menu_item_id) REFERENCES public.menu_items(id),
  CONSTRAINT menu_item_modifiers_modifier_id_fkey FOREIGN KEY (modifier_id) REFERENCES public.modifiers(id)
);
CREATE TABLE public.menu_items (
  id uuid NOT NULL DEFAULT uuid_generate_v4(),
  restaurant_id uuid NOT NULL,
  category_id uuid,
  name text NOT NULL,
  name_ar text,
  name_fr text,
  description text,
  description_ar text,
  description_fr text,
  base_price numeric NOT NULL,
  image_url text,
  preparation_time integer,
  allergens ARRAY,
  is_available boolean DEFAULT true,
  is_active boolean DEFAULT true,
  created_at timestamp with time zone DEFAULT now(),
  updated_at timestamp with time zone DEFAULT now(),
  CONSTRAINT menu_items_pkey PRIMARY KEY (id),
  CONSTRAINT menu_items_restaurant_id_fkey FOREIGN KEY (restaurant_id) REFERENCES public.restaurants(id),
  CONSTRAINT menu_items_category_id_fkey FOREIGN KEY (category_id) REFERENCES public.categories(id)
);
CREATE TABLE public.modifiers (
  id uuid NOT NULL DEFAULT uuid_generate_v4(),
  restaurant_id uuid NOT NULL,
  name text NOT NULL,
  name_ar text,
  name_fr text,
  modifier_type USER-DEFINED DEFAULT 'extra'::modifier_type,
  price numeric DEFAULT 0,
  is_active boolean DEFAULT true,
  created_at timestamp with time zone DEFAULT now(),
  CONSTRAINT modifiers_pkey PRIMARY KEY (id),
  CONSTRAINT modifiers_restaurant_id_fkey FOREIGN KEY (restaurant_id) REFERENCES public.restaurants(id)
);
CREATE TABLE public.order_item_modifiers (
  id uuid NOT NULL DEFAULT uuid_generate_v4(),
  order_item_id uuid NOT NULL,
  modifier_id uuid NOT NULL,
  quantity integer DEFAULT 1,
  unit_price numeric NOT NULL,
  created_at timestamp with time zone DEFAULT now(),
  CONSTRAINT order_item_modifiers_pkey PRIMARY KEY (id),
  CONSTRAINT order_item_modifiers_order_item_id_fkey FOREIGN KEY (order_item_id) REFERENCES public.order_items(id),
  CONSTRAINT order_item_modifiers_modifier_id_fkey FOREIGN KEY (modifier_id) REFERENCES public.modifiers(id)
);
CREATE TABLE public.order_items (
  id uuid NOT NULL DEFAULT uuid_generate_v4(),
  order_id uuid NOT NULL,
  menu_item_id uuid NOT NULL,
  variant_id uuid,
  quantity integer NOT NULL CHECK (quantity > 0),
  unit_price numeric NOT NULL,
  subtotal numeric NOT NULL,
  special_instructions text,
  created_at timestamp with time zone DEFAULT now(),
  CONSTRAINT order_items_pkey PRIMARY KEY (id),
  CONSTRAINT order_items_order_id_fkey FOREIGN KEY (order_id) REFERENCES public.orders(id),
  CONSTRAINT order_items_menu_item_id_fkey FOREIGN KEY (menu_item_id) REFERENCES public.menu_items(id),
  CONSTRAINT order_items_variant_id_fkey FOREIGN KEY (variant_id) REFERENCES public.item_variants(id)
);
CREATE TABLE public.order_status_history (
  id uuid NOT NULL DEFAULT uuid_generate_v4(),
  order_id uuid NOT NULL,
  from_status USER-DEFINED,
  to_status USER-DEFINED NOT NULL,
  changed_by uuid,
  notes text,
  created_at timestamp with time zone DEFAULT now(),
  CONSTRAINT order_status_history_pkey PRIMARY KEY (id),
  CONSTRAINT order_status_history_order_id_fkey FOREIGN KEY (order_id) REFERENCES public.orders(id),
  CONSTRAINT order_status_history_changed_by_fkey FOREIGN KEY (changed_by) REFERENCES public.users(id)
);
CREATE TABLE public.orders (
  id uuid NOT NULL DEFAULT uuid_generate_v4(),
  restaurant_id uuid NOT NULL,
  table_number text,
  order_number text NOT NULL,
  created_by uuid NOT NULL,
  validated_by uuid,
  status USER-DEFINED DEFAULT 'pending'::order_status,
  validated_at timestamp with time zone,
  sent_to_kitchen_at timestamp with time zone,
  preparing_started_at timestamp with time zone,
  ready_at timestamp with time zone,
  served_at timestamp with time zone,
  completed_at timestamp with time zone,
  canceled_at timestamp with time zone,
  total_amount numeric DEFAULT 0,
  customer_notes text,
  waiter_notes text,
  cancellation_reason text,
  created_at timestamp with time zone DEFAULT now(),
  updated_at timestamp with time zone DEFAULT now(),
  CONSTRAINT orders_pkey PRIMARY KEY (id),
  CONSTRAINT orders_restaurant_id_fkey FOREIGN KEY (restaurant_id) REFERENCES public.restaurants(id),
  CONSTRAINT orders_created_by_fkey FOREIGN KEY (created_by) REFERENCES public.users(id),
  CONSTRAINT orders_validated_by_fkey FOREIGN KEY (validated_by) REFERENCES public.users(id)
);
CREATE TABLE public.restaurants (
  id uuid NOT NULL DEFAULT uuid_generate_v4(),
  name text NOT NULL,
  slug text NOT NULL UNIQUE,
  logo_url text,
  cover_image_url text,
  phone text,
  email text,
  address text NOT NULL,
  city text,
  number_of_tables integer DEFAULT 10,
  is_active boolean DEFAULT true,
  created_at timestamp with time zone DEFAULT now(),
  updated_at timestamp with time zone DEFAULT now(),
  pin text NOT NULL DEFAULT '0000'::text,
  is_locked boolean NOT NULL DEFAULT false,
  google_map_url text,
  instagram_url text,
  CONSTRAINT restaurants_pkey PRIMARY KEY (id)
);
CREATE TABLE public.subscription_plans (
  id uuid NOT NULL DEFAULT uuid_generate_v4(),
  name text NOT NULL,
  plan_type USER-DEFINED NOT NULL,
  price_monthly numeric NOT NULL,
  price_yearly numeric,
  max_tables integer,
  max_menu_items integer,
  max_staff integer,
  features jsonb DEFAULT '{}'::jsonb,
  is_active boolean DEFAULT true,
  created_at timestamp with time zone DEFAULT now(),
  CONSTRAINT subscription_plans_pkey PRIMARY KEY (id)
);
CREATE TABLE public.subscriptions (
  id uuid NOT NULL DEFAULT uuid_generate_v4(),
  restaurant_id uuid NOT NULL,
  plan_id uuid NOT NULL,
  status USER-DEFINED DEFAULT 'active'::subscription_status,
  is_current boolean DEFAULT true,
  billing_cycle text DEFAULT 'monthly'::text,
  started_at timestamp with time zone DEFAULT now(),
  ends_at timestamp with time zone,
  trial_ends_at timestamp with time zone,
  auto_renew boolean DEFAULT true,
  created_at timestamp with time zone DEFAULT now(),
  updated_at timestamp with time zone DEFAULT now(),
  CONSTRAINT subscriptions_pkey PRIMARY KEY (id),
  CONSTRAINT subscriptions_restaurant_id_fkey FOREIGN KEY (restaurant_id) REFERENCES public.restaurants(id),
  CONSTRAINT subscriptions_plan_id_fkey FOREIGN KEY (plan_id) REFERENCES public.subscription_plans(id)
);
CREATE TABLE public.users (
  id uuid NOT NULL,
  restaurant_id uuid,
  name text NOT NULL,
  email text NOT NULL UNIQUE,
  phone text,
  avatar_url text,
  role USER-DEFINED DEFAULT 'waiter'::user_role,
  is_active boolean DEFAULT true,
  last_login_at timestamp with time zone,
  created_at timestamp with time zone DEFAULT now(),
  updated_at timestamp with time zone DEFAULT now(),
  CONSTRAINT users_pkey PRIMARY KEY (id),
  CONSTRAINT users_id_fkey FOREIGN KEY (id) REFERENCES auth.users(id),
  CONSTRAINT users_restaurant_id_fkey FOREIGN KEY (restaurant_id) REFERENCES public.restaurants(id)
);
CREATE TABLE public.waitlist (
  id bigint GENERATED ALWAYS AS IDENTITY NOT NULL,
  created_at timestamp with time zone NOT NULL DEFAULT now(),
  email text,
  CONSTRAINT waitlist_pkey PRIMARY KEY (id)
);