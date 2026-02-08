"use client";

import { useUser } from "@clerk/nextjs";
import { useState } from "react";
import { Store, Users, ArrowRight, X, Link2, MapPin, Phone, Mail, UtensilsCrossed } from "lucide-react";

type Role = "owner" | "staff" | null;

function RestaurantModal({ onClose }: { onClose: () => void }) {
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [cuisine, setCuisine] = useState("");

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 max-h-screen overflow-y-scroll">
            <div className="bg-white w-full max-w-lg rounded-lg shadow-2xl relative animate-in fade-in zoom-in duration-200">
                {/* Header */}
                <div className="bg-primary p-6 rounded-t-lg flex items-center justify-between">
                    <div>
                        <h2 className="text-2xl font-heading text-white font-bold">Restaurant Information</h2>
                        <p className="text-white/80 text-sm mt-1">Set up your restaurant profile</p>
                    </div>
                    <button onClick={onClose} className="text-white/80 hover:text-white transition-colors">
                        <X size={24} />
                    </button>
                </div>

                {/* Form */}
                <div className="p-6 space-y-4">
                    <div>
                        <label className="text-sm font-semibold text-black/70 mb-1 flex items-center gap-2">
                            <Store size={16} className="text-primary" />
                            Restaurant Name
                        </label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="e.g. The Golden Fork"
                            className="w-full border border-black/10 rounded-md px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                        />
                    </div>

                    <div>
                        <label className="text-sm font-semibold text-black/70 mb-1 flex items-center gap-2">
                            <MapPin size={16} className="text-primary" />
                            Address
                        </label>
                        <input
                            type="text"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            placeholder="e.g. 123 Main Street, New York, NY"
                            className="w-full border border-black/10 rounded-md px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                        />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="text-sm font-semibold text-black/70 mb-1 flex items-center gap-2">
                                <Phone size={16} className="text-primary" />
                                Phone
                            </label>
                            <input
                                type="tel"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                placeholder="e.g. +1 234 567 890"
                                className="w-full border border-black/10 rounded-md px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                            />
                        </div>
                        <div>
                            <label className="text-sm font-semibold text-black/70 mb-1 flex items-center gap-2">
                                <Mail size={16} className="text-primary" />
                                Email
                            </label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="e.g. info@restaurant.com"
                                className="w-full border border-black/10 rounded-md px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="text-sm font-semibold text-black/70 mb-1 flex items-center gap-2">
                            <UtensilsCrossed size={16} className="text-primary" />
                            Cuisine Type
                        </label>
                        <input
                            type="text"
                            value={cuisine}
                            onChange={(e) => setCuisine(e.target.value)}
                            placeholder="e.g. Italian, Japanese, Mexican..."
                            className="w-full border border-black/10 rounded-md px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                        />
                    </div>
                </div>

                {/* Footer */}
                <div className="p-6 pt-2">
                    <button className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-3 px-6 rounded-md flex items-center justify-center gap-2 hover:gap-3 transition-all text-lg">
                        <span>Create Restaurant</span>
                        <ArrowRight size={20} />
                    </button>
                    <p className="text-center text-xs text-black/40 mt-3">
                        You can update this information later in settings
                    </p>
                </div>
            </div>
        </div>
    );
}

function InvitationModal({ onClose }: { onClose: () => void }) {
    const [inviteLink, setInviteLink] = useState("");

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
            <div className="bg-white w-full max-w-lg rounded-lg shadow-2xl relative animate-in fade-in zoom-in duration-200">
                {/* Header */}
                <div className="bg-primary p-6 rounded-t-lg flex items-center justify-between">
                    <div>
                        <h2 className="text-2xl font-heading text-white font-bold">Join a Restaurant</h2>
                        <p className="text-white/80 text-sm mt-1">Enter the invitation link from your manager</p>
                    </div>
                    <button onClick={onClose} className="text-white/80 hover:text-white transition-colors">
                        <X size={24} />
                    </button>
                </div>

                {/* Form */}
                <div className="p-6 space-y-4">
                    <div>
                        <label className="text-sm font-semibold text-black/70 mb-1 flex items-center gap-2">
                            <Link2 size={16} className="text-primary" />
                            Invitation Link
                        </label>
                        <input
                            type="text"
                            value={inviteLink}
                            onChange={(e) => setInviteLink(e.target.value)}
                            placeholder="Paste your invitation link here..."
                            className="w-full border border-black/10 rounded-md px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                        />
                    </div>

                    <div className="bg-secondary/20 border border-secondary rounded-md p-4">
                        <p className="text-sm text-black/70">
                            <span className="font-semibold text-black">Don&apos;t have a link?</span> Ask your restaurant owner or manager to send you an invitation link from their SwipyEat dashboard.
                        </p>
                    </div>
                </div>

                {/* Footer */}
                <div className="p-6 pt-2">
                    <button className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-3 px-6 flex items-center justify-center gap-2 hover:gap-3 transition-all text-lg">
                        <span>Join Restaurant</span>
                        <ArrowRight size={20} />
                    </button>
                    <p className="text-center text-xs text-black/40 mt-3">
                        You&apos;ll be added to the restaurant once the owner approves
                    </p>
                </div>
            </div>
        </div>
    );
}

export default function GetStartedPage() {
    const { user } = useUser();
    const [selectedRole, setSelectedRole] = useState<Role>(null);

    return (
        <div className="min-h-screen bg-white bg-cover bg-center flex items-center justify-center p-6">
            <div className="max-w-2xl w-full">
                {/* Welcome */}
                <div className="text-center mb-10">
                    <h1 className="text-5xl font-heading font-medium text-black">
                        Welcome{user?.firstName ? `, ${user.firstName}` : ""}!
                    </h1>
                    <p className="text-lg text-black/60 mt-3 max-w-md mx-auto">
                        Tell us your role to get you started with SwipyEat
                    </p>
                </div>

                {/* Role Selection */}
                <div className="grid md:grid-cols-2 gap-6">
                    {/* Restaurant Owner Card */}
                    <button
                        onClick={() => setSelectedRole("owner")}
                        className="group bg-white border-2 border-black/5 hover:border-primary rounded-lg p-8 text-left transition-all hover:shadow-lg cursor-pointer"
                    >
                        <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-5 group-hover:bg-primary transition-colors">
                            <Store size={28} className="text-primary group-hover:text-white transition-colors" />
                        </div>
                        <h3 className="text-2xl font-heading font-bold text-black mb-2">Restaurant Owner</h3>
                        <p className="text-black/60 text-sm leading-relaxed">
                            I want to set up my restaurant on SwipyEat and manage my operations, staff, and menus.
                        </p>
                        <div className="mt-5 flex items-center gap-2 text-primary font-semibold text-sm group-hover:gap-3 transition-all">
                            <span>Set up restaurant</span>
                            <ArrowRight size={16} />
                        </div>
                    </button>

                    {/* Staff Card */}
                    <button
                        onClick={() => setSelectedRole("staff")}
                        className="group bg-white border-2 border-black/5 hover:border-primary rounded-lg p-8 text-left transition-all hover:shadow-lg cursor-pointer"
                    >
                        <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-5 group-hover:bg-primary transition-colors">
                            <Users size={28} className="text-primary group-hover:text-white transition-colors" />
                        </div>
                        <h3 className="text-2xl font-heading font-bold text-black mb-2">Staff Member</h3>
                        <p className="text-black/60 text-sm leading-relaxed">
                            I&apos;ve been invited to join a restaurant on SwipyEat as a waiter, chef, or team member.
                        </p>
                        <div className="mt-5 flex items-center gap-2 text-primary font-semibold text-sm group-hover:gap-3 transition-all">
                            <span>Join a restaurant</span>
                            <ArrowRight size={16} />
                        </div>
                    </button>
                </div>
            </div>

            {/* Modals */}
            {selectedRole === "owner" && <RestaurantModal onClose={() => setSelectedRole(null)} />}
            {selectedRole === "staff" && <InvitationModal onClose={() => setSelectedRole(null)} />}
        </div>
    );
}