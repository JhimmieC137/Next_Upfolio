'use client'
import { FaXTwitter, FaInstagram, FaWhatsapp } from "react-icons/fa6";
import { TbBrandLinktree, TbMail } from "react-icons/tb";
import { pageList } from "./mobile-navbar";
import Link from "next/link";

const socialLinks = [
    {
        name: "Twitter",
        icon: <FaXTwitter className="text-2xl mx-7 text-gray-400 hover:text-white ease-in-out duration-200"/>,
        link: "https://x.com/Upfolio_"
    },
    {
        name: "Instagram",
        icon: <FaInstagram className="text-2xl mx-7 text-gray-400 hover:text-white ease-in-out duration-200"/>,
        link: "https://www.instagram.com/upfolio_/"
    },
    {
        name: "WhatsApp",
        icon: <FaWhatsapp className="text-2xl mx-7 text-gray-400 hover:text-white ease-in-out duration-200"/>,
        link: "https://api.whatsapp.com/send?phone=2349067053686"
    },
    {
        name: "Mail",
        icon: <TbMail className="text-2xl mx-7 text-gray-400 hover:text-white ease-in-out duration-200"/>,
        link: "mailto:hello@theupfolio.com"
    },
    {
        name: "LinkTree",
        icon: <TbBrandLinktree className="text-2xl mx-7 text-gray-400 hover:text-white ease-in-out duration-200"/>,
        link: "https://linktr.ee/Upfolio"
    },
]

export default function Footer() {
    return (
        <footer className="flex flex-col items-center justify-center w-full">

            {/******* Newsletter Section Ends *******/}

            <div className="w-full flex justify-center">
                <div className="w-[95%] md:w-[50%] lg:w-[40%] flex flex-col justify-center items-center mx-auto">
                    <h2 className="text-lg text-center md:text-2xl mb-2">
                        Newsletter
                    </h2>
                    <p className="text-sm text-center px-2 mb-6 ">
                        Sign up to receive latest news and exclusive content
                    </p>
                    <div className="flex flex-col justify-between md:flex-row items-center w-full mb-6">
                        <input type="email" placeholder="Enter your email" className="w-[80%] md:w-full mx-auto my-4 h-12 rounded-lg px-3 md:mr-2 text-sm text-white placeholder:text-zinc-600 bg-zinc-950 outline-zinc-700 outline-1 outline focus-within:outline-white focus-within:outline-2 "/>
                        <Link href="/join-our-community" className="w-[50%] mx-auto md:m-0 text-center text-md font-bold leading-6 text-zinc-200 rounded-full md:rounded-lg md:ml-2 py-3 px-3 bg-pink-700 hover:bg-pink-500 ease-in-out duration-300 group">
                            Subscribe
                        </Link>
                    </div>
                </div>
            </div>

            {/******* Newsletter Section Ends *******/}
            
            <div className="w-full py-7">

                {/* nav links */}
                <div className="m-auto">
                    <ul className="flex flex-col md:flex-row justify-center items-center">
                        {pageList.map((page) => (
                            <Link key={page.name} href={page.href} className="text-sm py-2 md:py-5 px-3 md:px-5 lg:px-7 xl:px-10 font-semibold leading-6 text-zinc-400 hover:text-pink-400 ease-in-out duration-200">
                                {page.name}
                            </Link>
                        ))}
                    </ul>
                </div>


                {/* social links */}
                <div className="mx-auto mt-7 md:mt-3 ">
                    <ul className="flex flex-row justify-center items-center">
                        {socialLinks.map((link) => (
                            <a key={link.name} href={link.link} target="_blank">
                                {link.icon}
                            </a>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="w-full text-center">
            {/* copyright */}
                <p className="text-sm font-light text-gray-500 py-3">
                    © 2024 Upfolio. All rights reserved.
                </p>
            </div>
        </footer>
    )
}