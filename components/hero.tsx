'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import { useLanguage } from '@/lib/i18n/LanguageContext'

export default function Hero() {
  const { t } = useLanguage()
  return (
    <div className='bg-[#ff4d00] min-h-screen flex flex-col justify-center gap-16'>
      <div className="flex flex-col md:flex-row items-center ">
        <div className='flex-1 md:p-8 p-4'>
          <h1 className="font-heading text-3xl md:text-6xl text-white">{t.hero.title}</h1>
          <p className='text-white mt-6 text-sm md:text-lg max-w-xl'>
            {t.hero.subtitle}
          </p>
          <Link className='flex bg-white items-center justify-center w-max gap-2 hover:gap-3 mt-6 text-primary font-semibold py-3 px-12 text-xl transition-all' href="/sign-in">
            <span>{t.hero.cta}</span><ArrowRight className='inline-block group-hover:h-5 group-hover:ml-2' />
          </Link>
        </div>
        <div className='flex-1'>
          <Image src="/img-hero.png" alt="Hero Image" width={700} height={100} className="object-cover h-full rounded-r" />
        </div>
      </div>
      <div className='flex flex-col md:flex-row justify-between items-center md:p-8 p-4'>
        <h1 className='font-mono uppercase md:text-2xl text-white'>{t.hero.trustedBy}</h1>
        <div>
          <Image src="/trusted.png" alt="Logos" width={600} height={5} />
        </div>
      </div>
    </div>
  )
}
