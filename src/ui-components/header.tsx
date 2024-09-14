'use client'
import { useState } from 'react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import MobileNav, { pageList } from '@/ui-components/mobile-navbar'
import Link from 'next/link'

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <header className="absolute inset-x-0 top-0 z-50 max-w-7xl m-auto">
            <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
                <div className="flex lg:flex-1">
                    <div className="-m-1.5 p-1.5">
                        <span className="sr-only">Your Company</span>
                        <Link href="/">
                            <img
                                className="h-4 w-auto -mt-2"
                                src="/svg/main-logo.svg"
                                alt=""
                            />
                        </Link>
                    </div>
                </div>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-zinc-200"
                        onClick={() => setMobileMenuOpen(true)}
                    >
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                    </button>
                </div>
                <div className="hidden lg:flex lg:gap-x-12">
                    {pageList.map((page) => (
                        <Link key={page.name} href={page.href} className="text-md font-normal ease-in-out duration-300 leading-6 text-zinc-200 link-underline link-underline-black ">
                            {page.name}
                        </Link>
                    ))}
                </div>
                <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                    <Link href="/join-our-community" className="w-[70%] text-center text-md font-bold leading-6 text-pink-400 hover:text-zinc-200 rounded-full border-2 border-pink-400 py-3 px-6 hover:bg-pink-700 hover:border-pink-700 ease-in-out duration-300 group">
                        Join our community <span className='ml-1' aria-hidden="true">&rarr;</span>
                    </Link>
                </div>
            </nav>
            <MobileNav sideBarState={mobileMenuOpen} setSideBarState={setMobileMenuOpen}/>
        </header>
    )
}