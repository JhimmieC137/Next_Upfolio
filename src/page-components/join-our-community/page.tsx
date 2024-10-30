"use client"

import { daysOfTheMonth, monthsOfTheYear } from "@/lib/utils";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/ui-components/Select";
import { useState } from "react";
import { CiMail } from "react-icons/ci";
import { FaInstagram, FaWhatsapp, FaXTwitter } from "react-icons/fa6";
import { PiPhoneLight } from "react-icons/pi";
import { RxPerson } from "react-icons/rx";

export default function JOCPage() {
    const [selectedMonth, setSelectedMonth] = useState<string>('1');


    return (
        <main className="w-full relative">
            <div className='max-w-screen m-auto overflow-hidden'>
                <div className='px-2 lg:px-8 min-h-full'>

                    <section id="hero" className="relative h-[70vh] flex flex-col justify-center items-center mx-auto max-w-2xl md:max-w-3xl lg:max-w-6xl pt-16 pb-20 md:pt-24 md:pb-20 lg:pb-14">
                        <div className="mb-8 md:mb-2 text-center sm:mb-10 lg:mb-3 flex justify-center">
                            <p className="text-md  text-zinc-200 font-light">
                                Home/Join-Our-Community
                            </p>
                        </div>
                        <div className="text-center">
                            <h1 className="text-6xl md:text-8xl lg:text-[8rem] font-normal tracking-tight text-yellow-300">
                                Join Our <br/><span className="lg:text-[9rem] text-cyan-600">Community</span>
                            </h1>
                        </div>
                    </section>


                    <section className="relative mx-auto max-w-2xl md:max-w-[52rem] mt-5 md:mt-20 xl:mt-0 lg:max-w-[1300px]">
                        <div className="w-full -mt-20">
                            <img className="rounded-[2.5rem]" src="/jpg/hands_together.jpg" alt="team_meeting"/>
                        </div>
                    </section>


                    <section id="intro" className="relative mx-auto max-w-2xl md:max-w-[52rem] mt-5 md:mt-20 xl:mt-20 lg:max-w-[1300px]  py-0 md:py-20 lg:py-16">
                        {/* <div className="flex flex-row justify-center md:justify-start ">
                            <div className="text-left md:max-w-6xl px-5">
                                <h1 className="text-center md:text-left text-[3rem] md:text-[4.5rem] lg:text-[6rem] xl:text-[6.5rem] 2xl:text-[7.7rem] text-yellow-300">
                                    Benefits Of
                                </h1>
                                <div className="relative w-full flex flex-row justify-start ml-0 md:ml-10 xl:ml-16 -mt-5 md:-mt-7">
                                    <img className="absolute -left-48 -top-6 md:-top-5 lg:-top-5 w-[29%]" src="/png/meteor.png" alt="icon"/>
                                    <h2 className="text-center md:text-left text-[3rem] md:text-[4.5rem] lg:text-[6rem] xl:text-[6.5rem] 2xl:text-[7.7rem] text-cyan-600 font-normal">
                                        Being A Member
                                    </h2>
                                </div>
                            </div>
                        </div> */}
                        <div className="w-full">
                            
                            <div className="flex flex-row justify-between items-center w-full my-10 md:my-24 px-5">
                                <div className=" px-3 md:px-4 md:p-3 w-[45%]">
                                    <h2 className="font-light text-zinc-100 text-[3.2rem] leading-tight my-10 pr-3">
                                        We celebrate birthdays
                                    </h2>
                                    <p className="text-lg font-normal text-zinc-400">
                                        Lorem ipsum dolor itaque autem alias quo natus quasi fugiat eaque ipsa quis voluptate nam numquam, fugit aliquid, ratione cum est? Dolorem consequuntur necessitatibus voluptate, ipsa quis voluptate nam numquam!
                                    </p>
                                </div>
                                <img src="/jpg/birthday.jpg" alt="" className="rounded-2xl w-2/5"/>
                            </div>
                            
                            
                            <div className="flex flex-row-reverse justify-between items-center w-full md:my-24 px-5">
                                <div className=" px-3 md:px-4 md:p-3 w-[42%]">
                                    <h2 className="font-light text-zinc-100 text-[3.2rem] leading-tight my-10 pr-3">
                                        We celebrate birthdays
                                    </h2>
                                    <p className="text-lg font-normal text-zinc-400">
                                        Lorem ipsum dolor itaque autem alias quo natus quasi fugiat eaque ipsa quis voluptate nam numquam, fugit aliquid, ratione cum est? Dolorem consequuntur necessitatibus voluptate, ipsa quis voluptate nam numquam!
                                    </p>
                                </div>
                                <img src="/jpg/birthday.jpg" alt="" className="rounded-2xl w-2/5"/>
                            </div>
                            
                            
                            <div className="flex flex-row justify-between items-center w-full md:my-24 px-5">
                                <div className=" px-3 md:px-4 md:p-3 w-[45%]">
                                    <h2 className="font-light text-zinc-100 text-[3.2rem] leading-tight my-10 pr-3">
                                        We celebrate birthdays
                                    </h2>
                                    <p className="text-lg font-normal text-zinc-400">
                                        Lorem ipsum dolor itaque autem alias quo natus quasi fugiat eaque ipsa quis voluptate nam numquam, fugit aliquid, ratione cum est? Dolorem consequuntur necessitatibus voluptate, ipsa quis voluptate nam numquam!
                                    </p>
                                </div>
                                <img src="/jpg/birthday.jpg" alt="" className="rounded-2xl w-2/5"/>
                            </div>

                        </div>
                    </section>


                    <section id="intro" className="relative mx-auto max-w-2xl md:max-w-[52rem] mt-5 md:mt-20 xl:mt-20 lg:max-w-[1300px]  py-0 md:py-20 lg:py-16">
                        {/* <h2 className="text-2xl text-cyan-600 mb-10 px-5">
                            Fill the form
                        </h2> */}
                        <div className="flex flex-row justify-center md:justify-start ">
                            <div className="text-left md:max-w-6xl px-5">
                                <h1 className="text-center md:text-left text-[3rem] md:text-[4.5rem] lg:text-[6rem] xl:text-[6.5rem] 2xl:text-[7.7rem] text-yellow-300">
                                    Community
                                </h1>
                                <div className="relative w-full flex flex-row justify-start ml-0 md:ml-10 xl:ml-16 -mt-5 md:-mt-7">
                                    {/* <img className="absolute -left-7 -top-6 md:-top-5 lg:-top-5 w-[29%]" src="/png/meteor.png" alt="icon"/> */}
                                    {/* <img className="ml-10 h-24 w-auto" src="/svg/main-logo.svg" altccccccccccccc="main-logo"/> */}
                                    <h2 className="text-center md:text-left text-[3rem] md:text-[4.5rem] lg:text-[6rem] xl:text-[6.5rem] 2xl:text-[7.7rem] text-cyan-600 font-normal">
                                        Form
                                    </h2>
                                </div>
                            </div>
                        </div>
                        <div className="w-[80%] m-auto">
                            <form className="w-full" action="">
                                <div className="grid grid-flow-row grid-cols-2 gap-x-10 gap-y-5">
                                    <div className="w-full flex flex-col">
                                        <label className="mb-3 pl-1 text-md text-zinc-400" htmlFor="name">
                                            First name *
                                        </label>
                                        <div className="relative w-full">
                                            <RxPerson className='absolute text-zinc-400/60 h-8 w-8 top-4 bottom-auto left-4 z-10' />
                                            <input id="fname" type="text" placeholder="John" className="bg-zinc-950 relative placeholder:text-zinc-400/60 text-white/90 w-full pl-[4.2rem] pr-4 text-[1.2rem] border border-zinc-600 rounded-[0.65rem] h-16" required/>
                                        </div>
                                    </div>
                                    <div className="w-full flex flex-col">
                                        <label className="mb-3 pl-1 text-md text-zinc-400" htmlFor="name">
                                            Last name *
                                        </label>
                                        <div className="relative w-full">
                                            <RxPerson className='absolute text-zinc-400/60 h-8 w-8 top-4 bottom-auto left-4 z-10' />
                                            <input id="lname" type="text" placeholder="Doe" className="bg-zinc-950 relative placeholder:text-zinc-400/60 text-white/90 w-full pl-[4.2rem] pr-4 text-[1.2rem] border border-zinc-600 rounded-[0.65rem] h-16" required/>
                                        </div>
                                    </div>
                                    <div className="w-full flex flex-col">
                                        <label className="mb-3 pl-1 text-md text-zinc-400" htmlFor="name">
                                            Email address *
                                        </label>
                                        <div className="relative w-full">
                                            <CiMail className='absolute  text-zinc-400/60 h-8 w-8 top-4 bottom-auto left-4 z-10' />
                                            <input id="lname" type="text" placeholder="Doe" className="bg-zinc-950 relative placeholder:text-zinc-400/60 text-white/90 w-full pl-[4.2rem] pr-4 text-[1.2rem] border border-zinc-600 rounded-[0.65rem] h-16" required/>
                                        </div>
                                    </div>
                                    <div className="w-full flex flex-col">
                                        <label className="mb-3 pl-1 text-md text-zinc-400" htmlFor="name">
                                            Phone number <i>(WhatsApp)</i>
                                        </label>
                                        <div className="relative w-full">
                                            {/* Replace this icon with a country code selector that defaults to +234 for Nigeria */}
                                            <PiPhoneLight className='absolute text-zinc-400/60 h-8 w-8 top-4 bottom-auto left-4 z-10' />
                                            <input id="lname" type="text" placeholder="+234 800000000" className="bg-zinc-950 relative placeholder:text-zinc-400/60 text-white/90 w-full pl-[4.2rem] pr-4 text-[1.2rem] border border-zinc-600 rounded-[0.65rem] h-16"/>
                                        </div>
                                    </div>
                                    <div className="w-full flex flex-col">
                                        <label className="mb-3 pl-1 text-md text-zinc-400" htmlFor="name">
                                            Birthday *
                                        </label>
                                        <div className="relative w-full flex justify-start gap-4">
                                            <Select onValueChange={setSelectedMonth}>
                                                <SelectTrigger className="w-full h-16 text-[1.2rem] rounded-[0.65rem] pl-8 text-zinc-200">
                                                    <SelectValue className="" placeholder="Month" />
                                                </SelectTrigger>
                                                <SelectContent className="max-h-[18rem]">
                                                    {
                                                        monthsOfTheYear.map(el => {
                                                            return (
                                                                <SelectItem key={el.id} value={`${el.id}`} className="text-[1.2rem] pl-5">{el.name}</SelectItem>
                                                            )
                                                        })
                                                    }
                                                </SelectContent>
                                            </Select>
                                            
                                            <Select>
                                                <SelectTrigger className="w-[7rem] h-16 text-[1.2rem] rounded-[0.65rem] pl-5 text-zinc-200">
                                                    <SelectValue className="" placeholder="Day" />
                                                </SelectTrigger>
                                                <SelectContent className="max-h-56 min-w-[2.5rem] text-center">
                                                    {
                                                        Array.from({ length: monthsOfTheYear[Number(selectedMonth) - 1].maxDays }, (_, i) => i + 1).map(el => {
                                                            return (
                                                                <SelectItem key={el} value={`${el}`} className="text-[1.2rem] flex justify-center pl-8">{el}</SelectItem>
                                                            )
                                                        })
                                                    }
                                                </SelectContent>
                                            </Select>
                                        </div>
                                    </div>
                                </div>
                                <div className="h-px bg-zinc-200/50 w-[90%] mt-16 mx-auto"/>
                                <div className="w-full flex justify-around gap-12 mt-16">
                                    
                                    <a href={'/#'} className="w-full p-4 flex justify-center items-center rounded-lg bg-black border border-zinc-300/20 hover:bg-zinc-950 ease-in-out duration-200">
                                        <p className="text-base text-white">
                                            Follow us on
                                        </p>
                                        <FaXTwitter className="text-2xl mx-2 text-white"/>
                                    </a>
                                    
                                    <a href={'/#'} className="w-full p-4 flex justify-center items-center rounded-lg bg-gradient-to-r from-pink-500 from-[15%] via-orange-500 via-[40%] to-blue-700  hover:from-blue-700 hover:from-[0%] hover:via-orange-500 hover:via-[30%] hover:to-pink-500 ease-in-out duration-300">
                                        <p className="text-base text-white">
                                            Follow us on 
                                        </p>
                                        <FaInstagram className="text-2xl mx-2 text-white"/>
                                    </a>
                                    
                                    <a href={'/#'} className="group w-full p-4 flex justify-center items-center rounded-lg bg-green-600  hover:bg-green-500 ease-in-out duration-200">
                                        <p className="text-base text-white">
                                            Message us on
                                        </p>
                                        <FaWhatsapp className="text-2xl mx-2 text-white"/>
                                    </a>

                                </div>
                                <div className="w-2/6 mt-16 mb-5">
                                    <button type="submit" className="w-full h-14 rounded-[0.5rem] bg-pink-700 hover:bg-pink-600 text-center text-[1.2rem] font-normal">Submit</button>
                                </div>
                            </form>
                        </div>
                    </section>



                </div>
            </div>
        </main>
    )
}