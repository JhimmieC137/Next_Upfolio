"use client"

import { daysOfTheMonth, monthsOfTheYear } from "@/lib/utils";
import FadeIn from "@/ui-components/FadeIn";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/ui-components/Select";
import { useState } from "react";
import { CiMail } from "react-icons/ci";
import { FaInstagram, FaWhatsapp, FaXTwitter } from "react-icons/fa6";
import { PiPhoneLight } from "react-icons/pi";
import { RxPerson } from "react-icons/rx";
import mailchimp from '@mailchimp/mailchimp_marketing'
import { toast, useToast } from "@/ui-components/Toast/use-toast";

export default function JOCPage() {
    const [selectedMonth, setSelectedMonth] = useState<string>('1');
    const [email, setEmail] = useState<string>('');
    const [firstName, setFirstName] = useState<string>('');
    const [lastName, setLastName] = useState<string>('');
    const [date, setDate] = useState<string>('');
    const [phone, setPhone] = useState<string>('');
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
                firstName,
                lastName,
                phone,
                date: `${Number(selectedMonth) < 10 && '0'}${selectedMonth}/${Number(date) < 10 && '0'}${date}`, 
            }),
        });
        
        if (res.ok) {
            setIsSent(true);
            toast({
                variant: 'default',
                title: "Success",
                description: "Form submitted successfully.",
            })
            document.getElementById("success")?.scrollIntoView({behavior: 'smooth'});
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
        <main className="w-full relative">
            <div className='max-w-screen m-auto overflow-hidden'>
                <div className='px-2 lg:px-8 min-h-full'>

                    <section id="hero" className="relative h-[60vh] flex flex-col justify-center items-center mx-auto max-w-2xl md:max-w-3xl lg:max-w-6xl pt-32 xl:pt-24 pb-18 md:pb-6 lg:pb-14">
                        <FadeIn>
                            <div className="mb-8 md:mb-2 text-center sm:mb-10 lg:mb-3 flex justify-center">
                                <p className="text-md  text-zinc-200 font-light">
                                    Home / Join-Our-Community
                                </p>
                            </div>
                        </FadeIn>
                        <FadeIn>
                            <div className="text-center">
                                <h1 className="text-5xl md:text-8xl lg:text-8xl lg:text-[8rem] font-normal tracking-tight text-yellow-300">
                                    Join Our <br/><span className="lg:text-[9rem] text-cyan-600">Community</span>
                                </h1>
                            </div>
                        </FadeIn>
                    </section>


                    <section className="relative mx-auto max-w-2xl md:max-w-[52rem] mt-5 md:mt-20 lg:max-w-[1300px]">
                        <FadeIn>
                            <div className="w-full mt-16 md:mt-0 lg:-mt-20">
                                <img className="rounded-[1rem] lg:rounded-[2.5rem]" src="/jpg/hands_together.jpg" alt="team_meeting"/>
                            </div>
                        </FadeIn>   
                    </section>


                    <section id="intro" className="relative mx-auto max-w-2xl md:max-w-[52rem] mt-5 md:mt-20 xl:mt-20 lg:max-w-[1300px]  py-0 md:py-20 lg:py-16">
                        <div className="flex flex-col justify-center items-center w-full max-w-7xl mt-0 md:mt-12 px-3">
                            
                            
                            {/*  Item 1  */}
                            <FadeIn>
                                <div className="my-10 h-full gap-x-6 flex flex-col md:flex-row justify-between items-center w-full lg:max-w-[77rem]">
                                    <div className="w-full max-w-[32rem] text-left mr-0 md:mr-7">
                                        <div className="flex flex-col justify-start pl-2 md:pl-5">
                                            <h2 className="text-2xl lg:text-4xl max-w-xl my-5 text-zinc-300 font-normal">
                                                We celebrate birthdays
                                            </h2>
                                            <div className="flex flex-col max-w-3xl">
                                                <div className="my-1 flex flex-row">
                                                    <p className="text-zinc-400 ml-0 text-sm md:text-md lg:tex-base font-normal">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto cumque explicabo autem doloremque a itaque debitis reiciendis! Non saepe, asperiores delectus sed sit tempora, dignissimos quisquam maxime quas, dolores dolor.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-full max-w-[32rem] text-left ml-0 mt-10 md:mt-0 md:ml-7">
                                        <div className='flex justify-center md:justify-end w-full'>
                                            <img src="/jpg/birthday.jpg" alt="" className="rounded-2xl w-full border-[3px] border-white/5"/>
                                        </div>
                                    </div>
                                </div>
                            </FadeIn>
                            
                            {/*  Item 1 ends */}
                            
                            
                            {/*  Item 2  */}
                            <FadeIn>
                                <div className="my-10 h-full gap-x-6 flex  flex-col md:flex-row-reverse justify-between items-center w-full lg:max-w-[77rem]">
                                    <div className="w-full flex justify-start md:justify-end max-w-[32rem] text-left ml-0 md:ml-7">
                                        <div className="flex flex-col justify-center w-full pl-2">
                                            <h2 className="text-2xl lg:text-4xl max-w-xl my-5 text-zinc-300 font-normal">
                                                We celebrate birthdays
                                            </h2>
                                            <div className="flex flex-col max-w-3xl">
                                                <div className="my-1 flex flex-row">
                                                    <p className="text-zinc-400 ml-0 text-sm md:text-md  lg:tex-base font-normal">Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, ullam quae amet, sint optio dolorum, qui obcaecati quisquam maiores quasi minus laudantium atque blanditiis. Omnis voluptatum tempora nostrum voluptates possimus.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-full max-w-[32rem] text-left mr-0 mt-10 md:mt-0 md:mr-7">
                                        <div className='flex justify-center md:justify-start w-full'>
                                            <img src="/jpg/birthday.jpg" alt="" className="rounded-2xl w-full border-[3px] border-white/5"/>
                                        </div>
                                    </div>
                                </div>
                            </FadeIn>
                            
                            {/*  Item 2 ends */}
                        </div>
                    </section>


                    {
                        isSent ?
                        <section id="success" className="relative mx-auto max-w-2xl md:max-w-[52rem] mt-20 xl:mt-20 lg:max-w-[1300px]  py-0 md:py-20 lg:py-16">
                            <div className="flex flex-col justify-center items-center text-center">
                                <h1 className="text-4xl lg:text-6xl font-normal tracking-tight text-cyan-600">
                                    Form submitted <br/><span className=" text-yellow-300">successfully!</span>
                                </h1>
                                <p className="text-base lg:text-2xl text-zinc-300 my-5 lg:my-10">
                                    We'll send you a mail shortly
                                </p>
                            </div>
                        </section>
                        :
                        <section id="intro" className="relative mx-auto max-w-2xl md:max-w-[52rem] mt-5 md:mt-20 xl:mt-20 lg:max-w-[1300px]  py-0 md:py-20 lg:py-16">
                            {/* <h2 className="text-2xl text-cyan-600 mb-10 px-5">
                                Fill the form
                            </h2> */}
                            <div className="flex flex-row justify-center md:justify-start mt-20 md:mt-3">
                                <div className="text-left md:max-w-6xl px-5">
                                    <FadeIn>
                                        <h1 className="text-left text-[3rem] md:text-[4.5rem] lg:text-[6rem] xl:text-[6.5rem] 2xl:text-[7.7rem] text-yellow-300">
                                            Community
                                        </h1>
                                    </FadeIn>
                                    <FadeIn>
                                        <div className="relative w-full flex flex-row justify-center md:justify-start ml-0 md:ml-10 xl:ml-16 -mt-5 md:-mt-7">
                                            <h2 className="text-center md:text-left text-[3rem] md:text-[4.5rem] lg:text-[6rem] xl:text-[6.5rem] 2xl:text-[7.7rem] text-cyan-600 font-normal">
                                                Form
                                            </h2>
                                        </div>
                                    </FadeIn>
                                </div>
                            </div>
                            <FadeIn>
                            <div className="w-[95%] md:w-[80%] m-auto my-5">
                                    <form className="w-full" onSubmit={handleSubmit}>
                                        <div className="grid grid-flow-row grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-5">
                                            <div className="w-full flex flex-col">
                                                <label className="mb-3 pl-1 text-md text-zinc-400" htmlFor="name">
                                                    First name *
                                                </label>
                                                <div className="relative w-full">
                                                    <RxPerson className='absolute text-zinc-400/60 h-8 w-8 top-4 bottom-auto left-4 z-10' />
                                                    <input 
                                                        id="fname" 
                                                        type="text" 
                                                        placeholder="John"
                                                        value={firstName}
                                                        onChange={(e) => setFirstName(e.target.value)}
                                                        className="bg-zinc-950 relative placeholder:text-zinc-400/60 text-white/90 w-full pl-[4.2rem] pr-4 text-[1.2rem] border border-zinc-600 rounded-[0.65rem] h-16" 
                                                        required
                                                    />
                                                </div>
                                            </div>
                                            <div className="w-full flex flex-col">
                                                <label className="mb-3 pl-1 text-md text-zinc-400" htmlFor="name">
                                                    Last name *
                                                </label>
                                                <div className="relative w-full">
                                                    <RxPerson className='absolute text-zinc-400/60 h-8 w-8 top-4 bottom-auto left-4 z-10' />
                                                    <input 
                                                        id="lname" 
                                                        type="text" 
                                                        placeholder="Doe" 
                                                        value={lastName}
                                                        onChange={(e) => setLastName(e.target.value)}
                                                        className="bg-zinc-950 relative placeholder:text-zinc-400/60 text-white/90 w-full pl-[4.2rem] pr-4 text-[1.2rem] border border-zinc-600 rounded-[0.65rem] h-16" 
                                                        required
                                                    />
                                                </div>
                                            </div>
                                            <div className="w-full flex flex-col">
                                                <label className="mb-3 pl-1 text-md text-zinc-400" htmlFor="name">
                                                    Email address *
                                                </label>
                                                <div className="relative w-full">
                                                    <CiMail className='absolute  text-zinc-400/60 h-8 w-8 top-4 bottom-auto left-4 z-10' />
                                                    <input 
                                                        id="lname" 
                                                        type="email" 
                                                        placeholder="Doe"
                                                        value={email}
                                                        onChange={(e) => setEmail(e.target.value)}
                                                        className="bg-zinc-950 relative placeholder:text-zinc-400/60 text-white/90 w-full pl-[4.2rem] pr-4 text-[1.2rem] border border-zinc-600 rounded-[0.65rem] h-16" 
                                                        required
                                                    />
                                                </div>
                                            </div>
                                            <div className="w-full flex flex-col">
                                                <label className="mb-3 pl-1 text-md text-zinc-400" htmlFor="name">
                                                    Phone number <i>(WhatsApp)</i>
                                                </label>
                                                <div className="relative w-full">
                                                    {/* Replace this icon with a country code selector that defaults to +234 for Nigeria */}
                                                    <PiPhoneLight className='absolute text-zinc-400/60 h-8 w-8 top-4 bottom-auto left-4 z-10' />
                                                    <input 
                                                        id="phone" 
                                                        type="text" 
                                                        placeholder="+234 800000000"
                                                        value={phone}
                                                        maxLength={15}
                                                        onChange={(e) => setPhone(e.target.value.replace(/[^+\d\s]/g, ''))}
                                                        className="bg-zinc-950 relative placeholder:text-zinc-400/60 text-white/90 w-full pl-[4.2rem] pr-4 text-[1.2rem] border border-zinc-600 rounded-[0.65rem] h-16"
                                                    />
                                                </div>
                                            </div>
                                            <div className="w-full flex flex-col">
                                                <label className="mb-3 pl-1 text-md text-zinc-400" htmlFor="name">
                                                    Birthday
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
                                                    
                                                    <Select onValueChange={setDate}>
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
                                        <div className="w-full flex flex-col md:flex-row justify-around gap-10 md:gap-6 lg:gap-12 mt-16">
                                            
                                            <a href={'/#'} className="w-full p-4 flex justify-center items-center rounded-lg bg-black border border-zinc-300/20 hover:bg-zinc-950 ease-in-out duration-200">
                                                <p className="text-sm lg:text-base text-white">
                                                    Follow us on
                                                </p>
                                                <FaXTwitter className="text-xl lg:text-2xl mx-2 text-white"/>
                                            </a>
                                            
                                            <a href={'/#'} className="w-full p-4 flex justify-center items-center rounded-lg bg-gradient-to-r from-pink-500 from-[15%] via-orange-500 via-[40%] to-blue-700  hover:from-blue-700 hover:from-[0%] hover:via-orange-500 hover:via-[30%] hover:to-pink-500 ease-in-out duration-300">
                                                <p className="text-sm lg:text-base text-white">
                                                    Follow us on 
                                                </p>
                                                <FaInstagram className="text-xl lg:text-2xl mx-2 text-white"/>
                                            </a>
                                            
                                            <a href={'/#'} className="group w-full p-4 flex justify-center items-center rounded-lg bg-green-600  hover:bg-green-500 ease-in-out duration-200">
                                                <p className="text-sm lg:text-base text-white">
                                                    Message us on
                                                </p>
                                                <FaWhatsapp className="text-xl lg:text-2xl mx-2 text-white"/>
                                            </a>

                                        </div>
                                        <div className="w-2/6 mt-16 mb-5">
                                            
                                            <button
                                                disabled={isLoading}
                                                type="submit" 
                                                className="w-full h-14 rounded-[0.5rem] bg-pink-700 disabled:hover:bg-pink-700 hover:bg-pink-600 text-center text-[1.2rem] font-normal"
                                            >
                                                {
                                                    !isLoading ? 'Submit' : <div role="status">
                                                        <svg aria-hidden="true" className="inline w-8 h-8 text-gray-100 animate-spin dark:text-gray-600 fill-gray-600 dark:fill-gray-100" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                                                            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                                                        </svg>
                                                        <span className="sr-only">Loading...</span>
                                                    </div>
                                                }
                                            </button>
                                        </div>
                                    </form>
                            </div>
                            </FadeIn>
                        </section>
                    }
                </div>
            </div>
        </main>
    )
}