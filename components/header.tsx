'use client'

import Link from 'next/link'
import Image from 'next/image'
import { SignedIn, SignedOut } from '@clerk/nextjs'
import { ChevronDown, Menu, ArrowRight } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useLanguage } from '@/lib/i18n/LanguageContext'

export default function Header() {
    const [isScrollingDown, setIsScrollingDown] = useState(false)
    const [lastScrollY, setLastScrollY] = useState(0)
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const { language, setLanguage, t } = useLanguage()

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY
            setIsScrollingDown(currentScrollY > lastScrollY && currentScrollY > 100)
            setLastScrollY(currentScrollY)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [lastScrollY])

    const features = t.header.featureGroups
    const products = t.header.productGroups
    const featureGroupHrefs = [
        ['/features#digital-menu', '/features#order-management', '/features#digital-menu'],
        ['/features#online-ordering', '/features#order-management', '/features#payment-processing'],
        ['/features#table-reservation', '/features#table-reservation', '/features#table-reservation'],
    ]
    const productHrefs = [
        ['/products#menu-builder', '/products#menu-builder', '/products#menu-builder'],
        ['/products#pos-system', '/products#pos-system', '/products#pos-system'],
        ['/products#kds-system', '/products#kds-system', '/products#kds-system'],
    ]

    return (
        <header className={`w-full bg-white text-white px-4 py-4 md:py-0 flex sticky top-0 z-50 items-center ${isScrollingDown ? '-translate-y-full' : 'translate-y-0'} transition-transform duration-300`}>
            <Link onClick={() => setIsMenuOpen(false)} href="/" className='flex flex-1 items-center gap-1'>
                <Image src="/logo.png" alt="Logo" width={100} height={60} />
            </Link>
            <nav className='md:flex hidden flex-1 items-center justify-center'>
                <Link className='group w-max flex items-center font-medium text-black py-6 px-3 border-b-2 border-transparent hover:border-white box-border' href="/features">
                    <span>{t.header.features}</span><ChevronDown className='inline-block w-4 h-4 ml-1' />
                    <div className='absolute top-full w-full left-1/2 -translate-x-1/2 bg-primary border-y group-hover:flex hidden border-white/50'>
                        {features.map((feature, gi) => (
                            <div key={feature.title} className='flex-1 p-4 w-72 border-r last:border-0 border-white/50'>
                                <h3 className='font-medium text-white text-xl'>{feature.title}</h3>
                                <ul className='mt-2 flex flex-col gap-2'>
                                    {feature.elements.map((element, ei) => (
                                        <li key={element.title}>
                                            <Link href={featureGroupHrefs[gi]?.[ei] ?? '/features'} className='block text-sm text-white mt-1 hover:text-black hover:bg-white p-3 rounded-md cursor-pointer'>
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
                <Link className='font-medium w-max flex items-center text-black py-6 px-3 border-b-2 border-transparent hover:border-white box-border group' href="/products">
                    <span>{t.header.products}</span><ChevronDown className='inline-block w-4 h-4 ml-1' />
                    <div className='absolute top-full w-full left-1/2 -translate-x-1/2 bg-primary border-y group-hover:flex hidden border-white/50'>
                        {products.map((product, gi) => (
                            <div key={product.title} className='flex-1 p-4 w-72 border-r last:border-0 border-white/50'>
                                <h3 className='font-medium text-white text-xl'>{product.title}</h3>
                                <ul className='mt-2 flex flex-col gap-2'>
                                    {product.elements.map((element, ei) => (
                                        <li key={element.title}>
                                            <Link href={productHrefs[gi]?.[ei] ?? '/products'} className='block text-sm text-white mt-1 hover:text-black hover:bg-white p-3 rounded-md cursor-pointer'>
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
                <Link className='font-medium text-black py-6 px-3 border-b-2 border-transparent hover:border-white box-border' href="/pricing">{t.header.pricing}</Link>
                <Link className='font-medium text-black py-6 px-3 border-b-2 border-transparent hover:border-white box-border' href="/company/contact">{t.header.contact}</Link>
            </nav>
            <div className='md:flex hidden items-center gap-4 flex-1 justify-end'>
                {/* Language Switcher */}
                <div className="flex items-center border border-gray-200 rounded overflow-hidden text-sm font-semibold">
                    <button
                        onClick={() => setLanguage('en')}
                        className={`px-2 py-1 transition-colors ${language === 'en' ? 'bg-primary text-white' : 'text-black hover:bg-gray-100'}`}
                    >
                        EN
                    </button>
                    <button
                        onClick={() => setLanguage('fr')}
                        className={`px-2 py-1 transition-colors ${language === 'fr' ? 'bg-primary text-white' : 'text-black hover:bg-gray-100'}`}
                    >
                        FR
                    </button>
                </div>
                <SignedOut>
                    <Link className='text-black font-medium px-4 py-2' href="/sign-in">{t.header.signIn}</Link>
                    <Link className='bg-primary text-white hover:text-primary border border-primary font-medium px-4 py-2 rounded-full hover:bg-white/90' href="/sign-up">{t.header.getStarted}</Link>
                </SignedOut>
                <SignedIn>
                    <Link className='text-white bg-primary hover:text-primary border border-primary font-medium px-4 py-2 rounded-full hover:bg-white/90' href="/dashboard">{t.header.dashboard}</Link>
                </SignedIn>
            </div>
            <div onClick={() => setIsMenuOpen(prev => !prev)} className='md:hidden cursor-pointer'>
                <Menu className='w-6 h-6 text-black' />
            </div>
            {isMenuOpen && (
                <div className='absolute top-full left-0 w-full h-screen bg-primary text-white flex flex-col items-center py-4 md:hidden'>
                    {/* Mobile Language Switcher */}
                    <div className="flex items-center gap-2 py-4 w-full px-3 border-b border-white/20">
                        <span className="text-white/70 text-sm">{language === 'en' ? 'Language' : 'Langue'} :</span>
                        <button
                            onClick={() => setLanguage('en')}
                            className={`px-3 py-1 rounded text-sm font-semibold transition-colors ${language === 'en' ? 'bg-white text-primary' : 'text-white/70 hover:text-white'}`}
                        >
                            EN
                        </button>
                        <button
                            onClick={() => setLanguage('fr')}
                            className={`px-3 py-1 rounded text-sm font-semibold transition-colors ${language === 'fr' ? 'bg-white text-primary' : 'text-white/70 hover:text-white'}`}
                        >
                            FR
                        </button>
                    </div>
                    <Link onClick={() => setIsMenuOpen(false)} className='font-medium flex items-center justify-between text-xl w-full text-white/80 hover:text-white py-6 px-3 border-b-2 border-transparent hover:border-white box-border' href="/features">
                        <span>{t.header.features}</span><ArrowRight className='inline-block' />
                    </Link>
                    <Link onClick={() => setIsMenuOpen(false)} className='font-medium flex items-center justify-between text-xl w-full text-white/80 hover:text-white py-6 px-3 border-b-2 border-transparent hover:border-white box-border' href="/products">
                        <span>{t.header.products}</span><ArrowRight className='inline-block' />
                    </Link>
                    <Link onClick={() => setIsMenuOpen(false)} className='font-medium flex items-center justify-between text-xl w-full text-white/80 hover:text-white py-6 px-3 border-b-2 border-transparent hover:border-white box-border' href="/pricing">
                        <span>{t.header.pricing}</span><ArrowRight className='inline-block' />
                    </Link>
                    <Link onClick={() => setIsMenuOpen(false)} className='font-medium flex items-center justify-between text-xl w-full text-white/80 hover:text-white py-6 px-3 border-b-2 border-transparent hover:border-white box-border' href="/company/contact">
                        <span>{t.header.contact}</span><ArrowRight className='inline-block' />
                    </Link>
                    <SignedOut>
                        <Link onClick={() => setIsMenuOpen(false)} className='font-medium flex items-center justify-between text-xl w-full text-white/80 hover:text-white py-6 px-3 border-b-2 border-transparent hover:border-white box-border' href="/sign-in">{t.header.signIn}</Link>
                        <Link onClick={() => setIsMenuOpen(prev => !prev)} className='font-medium flex items-center justify-between text-xl w-full bg-white text-primary hover:text-white py-6 px-3 border-b-2 border-transparent hover:border-white box-border' href="/sign-up">{t.header.getStarted}</Link>
                    </SignedOut>
                    <SignedIn>
                        <Link onClick={() => setIsMenuOpen(prev => !prev)} className='font-medium flex items-center justify-between text-xl w-full bg-white text-primary hover:text-white py-6 px-3 border-b-2 border-transparent hover:border-white box-border' href="/dashboard">{t.header.dashboard}</Link>
                    </SignedIn>
                </div>
            )}
        </header>
    )
}
