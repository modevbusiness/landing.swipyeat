import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'

export default function Hero() {
  return (
    <div className='bg-primary min-h-screen flex flex-col justify-center gap-16'>
      <div className="flex flex-col md:flex-row items-center ">
        <div className='flex-1 md:p-8 p-4'>
          <h1 className="font-heading text-3xl md:text-6xl text-white">Fewer mistakes. Faster service. Happier customers.</h1>
          <p className='text-white/80 mt-6 text-sm md:text-lg max-w-xl'>
            SwipyEat brings waiters, kitchen staff, and management together in one real-time system to streamline ordering, improve kitchen flow, and keep service running smoothly.
          </p>
          <Link className='flex items-center justify-center w-max gap-2 hover:gap-3 mt-6 bg-white text-primary font-semibold py-3 px-12 text-xl hover:bg-gray-100 transition-all' href="/sign-in">
            <span>Get Started</span><ArrowRight className='inline-block group-hover:h-5 group-hover:ml-2' />
          </Link>
        </div>
        <div className='flex-1'>
          <Image src="/hero.png" alt="Hero Image" width={600} height={400} className="w-full h-full object-cover rounded-r" />
        </div>
      </div>
      <div className='flex flex-col md:flex-row justify-between items-center md:p-8 p-4'>
        <h1 className='font-mono uppercase md:text-2xl text-white'>Trusted by over 1,000 <br />restaurants worldwide</h1>
        <div>
          <Image src="/trusted.png" alt="Logos" width={600} height={100} />
        </div>
      </div>
    </div>
  )
}
