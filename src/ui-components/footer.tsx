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
        <footer className="flex flex-col justify-between">
            <div className="w-full py-7">
                {/* nav links */}
                <div className="m-auto">
                    <ul className="flex flex-col md:flex-row justify-center items-center">
                        {pageList.map((page) => (
                            <Link key={page.name} href={page.href} className="text-sm py-2 md:py-5 px-3 md:px-5 lg:px-7 xl:px-10 font-semibold leading-6 text-zinc-400 hover:text-pink-400 hover:underline">
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