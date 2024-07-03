'use client'
import { useState } from 'react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import MobileNav, { pageList } from '@/ui-components/mobile-navbar'
import Link from 'next/link'

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <header className="absolute inset-x-0 top-0 z-50">
            <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
                <div className="flex lg:flex-1">
                    <div className="-m-1.5 p-1.5">
                        <span className="sr-only">Your Company</span>
                        <Link href="/">
                            <img
                                className="h-4 w-auto -mt-2"
                                src="https://theupfolio.com/statics/img/Icons/logo.png"
                                // src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                                alt=""
                            />
                        </Link>
                    </div>
                </div>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                        onClick={() => setMobileMenuOpen(true)}
                    >
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                    </button>
                </div>
                <div className="hidden lg:flex lg:gap-x-12">
                    {pageList.map((page) => (
                        <Link key={page.name} href={page.href} className="text-sm font-semibold leading-6 text-gray-900">
                            {page.name}
                        </Link>
                    ))}
                </div>
                <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                    <Link href="/join-our-community" className="text-sm font-semibold leading-6 text-gray-900">
                        Join our community <span aria-hidden="true">&rarr;</span>
                    </Link>
                </div>
            </nav>
            <MobileNav sideBarState={mobileMenuOpen} setSideBarState={setMobileMenuOpen}/>
        </header>
    )
}