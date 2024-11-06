'use client'

import { FaXTwitter, FaInstagram, FaWhatsapp, FaArrowDown } from "react-icons/fa6";
import { TbBrandLinktree, TbMail } from "react-icons/tb";
import { pageList } from "./mobile-navbar";
import Link from "next/link";
import FadeIn from "@/ui-components/FadeIn";
import { useState } from "react";
import { useToast } from "./Toast/use-toast";

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
    const [email, setEmail] = useState<string>('');
    const [isSent, setIsSent] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    
    const { toast } = useToast();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        
        const res = await fetch('/api/subscribe', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ 
                email,
            }),
        });
        
        
        if (res.ok) {
            setIsSent(true);
            toast({
                variant: 'default',
                title: "Success",
                description: "Form submitted successfully.",
            })
        } else {
            setIsSent(false);
            toast({
                variant: 'destructive',
                title: "Failed",
                description: "Something went wrong, please try again later or contact us.",
            })
        }
        
        setIsLoading(false);
    };

    return (
        <footer className="flex flex-col items-center justify-center w-full">

            <div className="relative mx-auto max-w-2xl md:max-w-[52rem] lg:max-w-[1300px] mb-24 mt-36 md:mt-24 lg:py-16">
                <div className="w-full flex flex-col items-center relative">
                    <div className="flex flex-row justify-center relative">
                        <div className="text-center md:max-w-6xl px-5">
                            <FadeIn>
                                <h1 className="text-center text-[3rem] md:text-[4.5rem] lg:text-[6rem] xl:text-[6.5rem] 2xl:text-[7.7rem] text-yellow-300">
                                    Work
                                </h1>
                            </FadeIn>
                            <FadeIn>

                                <div className="relative w-full flex flex-row justify-center ml-0 -mt-5 md:-mt-7">
                                    {/* <img className="absolute -left-48 -top-6 md:-top-5 lg:-top-5 w-[29%]" src="/png/meteor.png" alt="icon"/> */}
                                    <h2 className="text-center text-[3rem] md:text-[4.5rem] lg:text-[6rem] xl:text-[6.5rem] 2xl:text-[7.7rem] text-cyan-600 font-normal">
                                        With Us.
                                    </h2>
                                </div>
                            </FadeIn>
                        </div>
                    </div>
                </div>
                <div className="mt-16 w-full">
                    <FadeIn>
                        <div className="flex justify-center">
                            <Link href={'/contact'} className="w-36 h-36 p-5 rounded-full bg-pink-700 hover:bg-pink-500 ease-in-out duration-200 flex flex-col items-center text-center cursor-pointer">
                                <div className="flex flex-col items-center w-full">
                                    <FaArrowDown className="bouncing-arrow font-medium h-5 w-5 text-white"/>
                                    <p className="relative text-xl font-medium text-white mt-3">
                                        Get in touch
                                    </p>
                                </div>
                            </Link>
                        </div>
                    </FadeIn>
                </div>
            </div>

            {/******* Newsletter Section Ends *******/}

            <div className="w-full flex justify-center">
                <div className="w-[95%] md:w-[50%] lg:w-[40%] flex flex-col justify-center items-center mx-auto">
                    <FadeIn>
                        <h2 className="text-lg text-center md:text-2xl mb-2">
                            Newsletter
                        </h2>
                    </FadeIn>
                    <FadeIn>
                        <p className="text-sm text-center px-2 mb-6 ">
                            Sign up to receive latest news and exclusive content
                        </p>
                    </FadeIn>
                    <FadeIn>
                        <div className="flex flex-col justify-between md:flex-row items-center w-full mb-6">
                            <input value={email} onChange={e => setEmail(e.target.value)} type="email" placeholder="Enter your email" className="w-[80%] md:w-full mx-auto my-4 h-12 rounded-lg px-3 md:mr-2 text-sm text-white placeholder:text-zinc-600 bg-zinc-950 outline-zinc-700 outline-1 outline focus-within:outline-white focus-within:outline-2 "/>
                            <div onClick={e => handleSubmit(e)} className={`cursor-pointer w-[50%] mx-auto md:m-0 text-center text-md font-bold leading-6 text-zinc-200 rounded-full md:rounded-lg md:ml-2 py-3 px-3 bg-pink-700 ease-in-out duration-300 group ${!isLoading && 'hover:bg-pink-500'}`}>
                                {
                                    !isLoading ? 'Subscribe' : <div role="status">
                                    <svg aria-hidden="true" className="inline w-8 h-8 text-gray-100 animate-spin dark:text-gray-600 fill-gray-600 dark:fill-gray-100" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                                    </svg>
                                    <span className="sr-only">Loading...</span>
                                </div>
                                }
                            </div>
                        </div>
                    </FadeIn>
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