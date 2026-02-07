'use client'

import Link from 'next/link'
import Image from 'next/image'
import { SignedIn, SignedOut } from '@clerk/nextjs'
import { ChevronDown } from 'lucide-react'
import { useEffect, useState } from 'react'

export default function Header() {
    const [isScrollingDown, setIsScrollingDown] = useState(false)
    const [lastScrollY, setLastScrollY] = useState(0)

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY
            setIsScrollingDown(currentScrollY > lastScrollY && currentScrollY > 100)
            setLastScrollY(currentScrollY)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [lastScrollY])
    const features = [
        {
            title: "Degital menu",
            elements: [
                { title: "Create and customize your menu", description: "Easily create and customize your digital menu with our user-friendly interface. Add your dishes, descriptions, and prices to showcase your offerings.", href: "/features#digital-menu" },
                { title: "Real-time updates", description: "Make instant updates to your menu, ensuring that your customers always have access to the latest information about your offerings.", href: "/features#order-management" },
                { title: "Multimedia support", description: "Enhance your menu with images and videos of your dishes, giving customers a visual representation of what you have to offer.", href: "/features#digital-menu" },
            ]
        },
        {
            title: "Online ordering",
            elements: [
                { title: "Seamless ordering experience", description: "Provide your customers with a seamless online ordering experience. Allow them to browse your menu, customize their orders, and make secure payments with ease.", href: "/features#online-ordering" },
                { title: "Order management", description: "Efficiently manage incoming orders with our intuitive order management system. Track order status, update customers, and ensure timely delivery.", href: "/features#order-management" },
                { title: "Multiple payment options", description: "Offer a variety of payment options to cater to your customers' preferences, including credit cards, digital wallets, and more.", href: "/features#payment-processing" },
            ]
        },
        {
            title: "Table reservation",
            elements: [
                { title: "Easy reservation system", description: "Allow customers to easily reserve tables at your restaurant through our user-friendly reservation system. Manage reservations and optimize seating arrangements.", href: "/features#table-reservation" },
                { title: "Real-time availability", description: "Provide real-time updates on table availability, allowing customers to make informed decisions when booking their reservations.", href: "/features#table-reservation" },
                { title: "Reservation management", description: "Efficiently manage reservations, track customer preferences, and ensure a smooth dining experience for your guests.", href: "/features#table-reservation" },
            ]
        },
    ]
    const products = [
        { 
            title: "Menu Builder", 
            elements: [
                { title: "Create and customize your menu", description: "Easily create and customize your digital menu with our user-friendly interface. Add your dishes, descriptions, and prices to showcase your offerings.", href: "/products#menu-builder" },
                { title: "Real-time updates", description: "Make instant updates to your menu, ensuring that your customers always have access to the latest information about your offerings.", href: "/products#menu-builder" },
                { title: "Multimedia support", description: "Enhance your menu with images and videos of your dishes, giving customers a visual representation of what you have to offer.", href: "/products#menu-builder" },
            ]
        },
        {
            title: "POS System",
            elements: [
                { title: "Streamlined order processing", description: "Our Point of Sale (POS) system streamlines order processing, allowing your staff to quickly and accurately take orders, manage payments, and track sales.", href: "/products#pos-system" },
                { title: "Inventory management", description: "Keep track of your inventory in real-time, ensuring that you never run out of essential ingredients and supplies.", href: "/products#pos-system" },
                { title: "Sales analytics", description: "Gain valuable insights into your sales performance with our comprehensive analytics tools, helping you make informed business decisions.", href: "/products#pos-system" },
            ]
        },
        {
            title: "KDS System",
            elements: [
                { title: "Efficient order management", description: "Streamline your kitchen operations with our Kitchen Display System (KDS). Manage and prioritize orders, track preparation times, and ensure smooth communication between the front and back of house.", href: "/products#kds-system" },
                { title: "Real-time updates", description: "Receive real-time updates on order status, allowing your kitchen staff to stay informed and deliver orders promptly.", href: "/products#kds-system" },
                { title: "Customizable interface", description: "Customize the KDS interface to fit your kitchen workflow, ensuring that your staff can easily navigate and manage orders.", href: "/products#kds-system" },
            ]
        }
    ]
  return (
    <header className={`w-full bg-primary text-white px-4 flex sticky top-0 z-50 items-center ${isScrollingDown ? '-translate-y-full' : 'translate-y-0'} transition-transform duration-300`}>
        <Link href="/" className='flex flex-1 items-center gap-1'>
            <Image src="/logo.svg" alt="Logo" width={50} height={50} />
            <span className='font-bold text-lg'>SwipyEat</span>
        </Link>
        <nav className='flex flex-1 items-center justify-center'>
            <Link className='group w-max flex items-center font-medium text-white/80 hover:text-white py-6 px-3 border-b-2 border-transparent hover:border-white box-border' href="/features">
                <span>Feautures </span><ChevronDown className='inline-block w-4 h-4 ml-1' />
                <div className='absolute top-full w-full left-1/2 -translate-x-1/2 bg-primary border-y group-hover:flex hidden border-white/50'>
                    {features.map((feature) => (
                        <div key={feature.title} className='flex-1 p-4 w-72 border-r last:border-0 border-white/50'>
                            <h3 className='font-medium text-white text-xl'>{feature.title}</h3>
                            <ul className='mt-2 flex flex-col gap-2'>
                                {feature.elements.map((element) => (
                                    <li key={element.title}>
                                        <Link href={element.href} className='block text-sm text-white mt-1 hover:text-black hover:bg-white p-3 rounded-md cursor-pointer'>
                                            <h4 className='font-medium'>{element.title}</h4>
                                            <p className='opacity-60 line-clamp-1'>{element.description}</p>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </Link>
            <Link className='font-medium w-max flex items-center text-white/80 hover:text-white py-6 px-3 border-b-2 border-transparent hover:border-white box-border group' href="/products">
                <span>Products</span><ChevronDown className='inline-block w-4 h-4 ml-1' />
                <div className='absolute top-full w-full left-1/2 -translate-x-1/2 bg-primary border-y group-hover:flex hidden border-white/50'>
                    {products.map((product) => (
                        <div key={product.title} className='flex-1 p-4 w-72 border-r last:border-0 border-white/50'>
                            <h3 className='font-medium text-white text-xl'>{product.title}</h3>
                            <ul className='mt-2 flex flex-col gap-2'>
                                {product.elements.map((element) => (
                                    <li key={element.title}>
                                        <Link href={element.href} className='block text-sm text-white mt-1 hover:text-black hover:bg-white p-3 rounded-md cursor-pointer'>
                                            <h4 className='font-medium'>{element.title}</h4>
                                            <p className='opacity-60 line-clamp-1'>{element.description}</p>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </Link>
            <Link className='font-medium text-white/80 hover:text-white py-6 px-3 border-b-2 border-transparent hover:border-white box-border' href="/pricing">Pricing</Link>
            <Link className='font-medium text-white/80 hover:text-white py-6 px-3 border-b-2 border-transparent hover:border-white box-border' href="/docs">Docs</Link>
            <Link className='font-medium text-white/80 hover:text-white py-6 px-3 border-b-2 border-transparent hover:border-white box-border' href="/company/contact">Contact</Link>
        </nav>
        <div className='flex items-center gap-4 flex-1 justify-end'>
            <SignedOut>
                <Link className='text-white font-medium px-4 py-2' href="/sign-in">Sign in</Link>
                <Link className='bg-white text-primary font-medium px-4 py-2 rounded-full hover:bg-white/90' href="/sign-up">Get Started</Link>
            </SignedOut>
            <SignedIn>
                <Link className='bg-white text-primary font-medium px-4 py-2 rounded-full hover:bg-white/90' href="/dashboard">Dashboard</Link>
            </SignedIn>
        </div>
    </header>
  )
}
