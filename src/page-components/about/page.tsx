'use client'

import { MdOutlineAlternateEmail } from "react-icons/md";
import { PiChartLineUp } from "react-icons/pi";
import { RiSeedlingFill, RiServiceFill } from "react-icons/ri";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { teamMembers } from "@/contexts/team-context";
import NumberCounter from "@/lib/NumberCounter";
import { FaLinkedinIn } from "react-icons/fa6";
import FadeIn from "@/ui-components/FadeIn";

export default function AboutPage() {
    return (
        <main className="w-full relative">
            <div className='max-w-screen m-auto overflow-hidden'>
                <div className='px-2 lg:px-8 min-h-full'>

                    <section id="hero" className="relative h-[60vh] flex flex-col justify-center items-center mx-auto max-w-2xl md:max-w-3xl lg:max-w-6xl pt-32 xl:pt-24 pb-18 md:pb-6 lg:pb-14 ">
                        <FadeIn>
                            <div className="mb-8 md:mb-2 text-center sm:mb-10 lg:mb-3 flex justify-center">
                                <p className="text-md  text-zinc-200 font-light">
                                    Home / About
                                </p>
                            </div>
                        </FadeIn>
                        <FadeIn>
                            <div className="text-center">
                                <h1 className="text-5xl md:text-8xl lg:text-[8rem] font-normal tracking-tight text-yellow-300">
                                    We support <br/><span className="lg:text-[9rem] text-cyan-600">Career growth</span>
                                </h1>
                            </div>
                        </FadeIn>
                    </section>


                    <section className="relative mx-auto max-w-2xl md:max-w-[52rem] mt-5 md:mt-20 lg:max-w-[1300px]">
                        <FadeIn>
                            <div className="w-full mt-16 md:mt-0 lg:-mt-20">
                                <img className="rounded-[1rem] lg:rounded-[2.5rem]" src="/jpg/team_meeting.jpg" alt="team_meeting"/>
                            </div>
                        </FadeIn>
                    </section>

                    <section id="intro" className="relative mx-auto max-w-2xl md:max-w-[52rem] mt-24 xl:mt-20 lg:max-w-[1300px] py-0 md:py-20 lg:py-16">
                        <div className="flex flex-row justify-center md:justify-start ">
                            <div className="text-left md:max-w-6xl px-5">
                                <FadeIn>
                                    <h1 className="text-center md:text-left text-[3rem] md:text-[4.5rem] lg:text-[6rem] xl:text-[6.5rem] 2xl:text-[7.7rem] text-yellow-300">
                                        About
                                    </h1>
                                </FadeIn>
                                <FadeIn>
                                    <div className="relative w-full flex flex-row justify-end ml-5 md:ml-16 xl:ml-16 -mt-5 md:-mt-7">
                                        <img className="absolute -left-3 -top-3 md:-top-5 lg:-top-5 w-[29%]" src="/png/meteor.png" alt="icon"/>
                                        {/* <img className="ml-10 h-24 w-auto" src="/svg/main-logo.svg" altccccccccccccc="main-logo"/> */}
                                        <h2 className="text-center md:text-left text-[3rem] md:text-[4.5rem] lg:text-[6rem] xl:text-[6.5rem] 2xl:text-[7.7rem] text-cyan-600 font-normal">
                                            Upfolio
                                        </h2>
                                    </div>
                                </FadeIn>
                            </div>
                        </div>
                        <div className="flex flex-row justify-center lg:justify-end w-full my-6 md:my-16 lg:mt-8">
                            <div className="flex flex-row justify-center w-full lg:w-4/6">
                                <FadeIn>
                                    <h4 className="text-center lg:text-left text-lg md:text-3xl xl:text-4xl px-3 md:px-4 md:leading-[3rem] xl:leading-[3.5rem] xl:p-0 font-normal text-zinc-300">
                                        Lorem ipsum dolor itaque autem alias quo natus quasi fugiat eaque ipsa quis voluptate nam numquam, fugit aliquid, ratione cum est? Dolorem consequuntur necessitatibus voluptate!
                                    </h4>
                                </FadeIn>
                            </div>
                        </div>
                        <div className="flex flex-row justify-center lg:justify-end w-full md:my-16 lg:mt-8">
                            <div className="flex flex-row justify-center w-full lg:w-4/6">
                                <FadeIn>
                                    <h4 className="text-center lg:text-left text-lg md:text-3xl xl:text-4xl px-3 md:px-4 md:leading-[3rem] xl:leading-[3.5rem] xl:p-0 font-normal text-zinc-300/60">
                                        Dolor itaque autem alias quo natus quasi fugiat eaque ipsa quis voluptate nam aliquid, ratione cum est? Dolorem consequuntur necessitatibus voluptate!
                                    </h4>
                                </FadeIn>
                            </div>
                        </div>
                    </section>

                    <section className="relative mx-auto max-w-2xl md:max-w-[52rem] mt-0 lg:max-w-[1300px]  py-0 md:py-8 lg:py-16">
                        <div className="w-5/6 p-2 m-auto">
                            <FadeIn>
                                <div className="w-full grid grid-flow-row grid-cols-2 md:grid-cols-4 gap-7 justify-around m-auto">
                                    <div className="text-center text-zinc-200">
                                        <h2 className="font-normal text-3xl lg:text-[2.8rem] flex flex-row justify-center">
                                            <NumberCounter n={110}/> +
                                        </h2>
                                        <p className="text-small lg:text-base  mt-1">
                                            Community members
                                        </p>
                                    </div>
                                    <div className="text-center text-zinc-200">
                                        <h2 className="font-normal text-3xl lg:text-[2.8rem] flex flex-row justify-center">
                                            <NumberCounter n={3}/> +
                                        </h2>
                                        <p className="text-small lg:text-base  mt-1">
                                            Projects
                                        </p>
                                    </div>
                                    <div className="text-center text-zinc-200">
                                        <h2 className="font-normal text-3xl lg:text-[2.8rem] flex flex-row justify-center">
                                            <NumberCounter n={13}/> +
                                        </h2>
                                        <p className="text-small lg:text-base  mt-1">
                                            Programs
                                        </p>
                                    </div>
                                    <div className="text-center text-zinc-200">
                                        <h2 className="font-normal text-3xl lg:text-[2.8rem] flex flex-row justify-center">
                                            <NumberCounter n={43}/> +
                                        </h2>
                                        <p className="text-small lg:text-base  mt-1">
                                            Volunteers
                                        </p>
                                    </div>
                                </div>
                            </FadeIn>
                        </div>
                    </section>

                    <section className="relative mx-auto max-w-2xl md:max-w-[52rem] lg:max-w-[1300px] mt-36 md:mt-24 lg:py-16">
                        <div className="w-full flex flex-col justify-start">
                            <div className="flex flex-row justify-center md:justify-start ">
                                <div className="text-left md:max-w-6xl px-5">
                                    <FadeIn>
                                        <h1 className="text-center md:text-left text-[3rem] md:text-[4.5rem] lg:text-[6rem] xl:text-[6.5rem] 2xl:text-[7.7rem] text-yellow-300">
                                            Our
                                        </h1>
                                    </FadeIn>
                                    <FadeIn>
                                        <div className="relative w-full flex flex-row justify-end ml-0 md:ml-10 xl:ml-16 -mt-5 md:-mt-7">
                                            <img className="absolute -left-7 -top-3 md:-top-5 lg:-top-5 w-[32%]" src="/png/meteor.png" alt="icon"/>
                                            {/* <img className="ml-10 h-24 w-auto" src="/svg/main-logo.svg" altccccccccccccc="main-logo"/> */}
                                            <h2 className="text-center md:text-left text-[3rem] md:text-[4.5rem] lg:text-[6rem] xl:text-[6.5rem] 2xl:text-[7.7rem] text-cyan-600 font-normal">
                                                Values
                                            </h2>
                                        </div>
                                    </FadeIn>
                                </div>
                            </div>
                            <div className="w-[90%] m-auto mt-10 grid grid-flow-row grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
                                <FadeIn>
                                    <div className="bg-zinc-800/55 text-zinc-200 rounded-2xl p-10 md:p-7">
                                        <PiChartLineUp className="h-12 w-12 text-cyan-600" />
                                        <h2 className="text-white font-light text-[1.8rem] md:text-[2.5rem] my-5">
                                            Something
                                        </h2>
                                        <p className="mb-5">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. voluptate distinctio autem et beatae.
                                        </p>
                                    </div>
                                </FadeIn>
                                <FadeIn>
                                    <div className="bg-zinc-800/55 text-zinc-200 rounded-2xl p-7">
                                        <RiServiceFill className="h-12 w-12 text-pink-700" />
                                        <h2 className="text-white font-light text-[1.8rem] md:text-[2.5rem] my-5">
                                            Something
                                        </h2>
                                        <p className="mb-5">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. voluptate distinctio autem et beatae.
                                        </p>
                                    </div>
                                </FadeIn>
                                <FadeIn>
                                    <div className="bg-zinc-800/55 text-zinc-200 rounded-2xl p-7">
                                        <RiSeedlingFill className="h-12 w-12 text-yellow-400" />
                                        <h2 className="text-white font-light text-[1.8rem] md:text-[2.5rem] my-5">
                                            Something
                                        </h2>
                                        <p className="mb-5">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. voluptate distinctio autem et beatae.
                                        </p>
                                    </div>
                                </FadeIn>
                            </div>
                        </div>
                    </section>
 

                    <section className="relative mx-auto max-w-2xl md:max-w-[52rem] lg:max-w-[1300px] mt-36 md:mt-24 lg:py-16">
                        <div className="w-full flex flex-col justify-start relative">
                            <div className="flex flex-row justify-center md:justify-start relative">
                                <div className="text-left md:max-w-6xl px-5">
                                    <FadeIn>
                                        <h1 className="text-center md:text-left text-[3rem] md:text-[4.5rem] lg:text-[6rem] xl:text-[6.5rem] 2xl:text-[7.7rem] text-yellow-300">
                                            Our
                                        </h1>
                                    </FadeIn>
                                    <FadeIn>
                                        <div className="relative w-full flex flex-row justify-end ml-0 md:ml-10 xl:ml-16 -mt-5 md:-mt-7">
                                            <img className="absolute -left-7 -top-3 md:-top-5 lg:-top-5 w-[35%]" src="/png/meteor.png" alt="icon"/>
                                            {/* <img className="ml-10 h-24 w-auto" src="/svg/main-logo.svg" altccccccccccccc="main-logo"/> */}
                                            <h2 className="text-center md:text-left text-[3rem] md:text-[4.5rem] lg:text-[6rem] xl:text-[6.5rem] 2xl:text-[7.7rem] text-cyan-600 font-normal">
                                                Team
                                            </h2>
                                        </div>
                                    </FadeIn>
                                </div>
                            </div>
                            <div className="w-full mx-auto relative mt-14 ">
                                <FadeIn>
                                    <Swiper 
                                        breakpoints={{
                                            760: {
                                                slidesPerView: 3,
                                                spaceBetween: 60,
                                            },
                                            576: {
                                                slidesPerView: 2,
                                                spaceBetween: 20,
                                            },
                                            190: {
                                                slidesPerView: 1,
                                                spaceBetween: 20,
                                            }
                                        }}
                                        slidesPerView={3}
                                        spaceBetween={60}
                                        modules={[Navigation]}
                                        navigation
                                        className="overflow-visible multiple"
                                    >
                                        {
                                            teamMembers.map(el => {
                                                return (
                                                    <SwiperSlide key={el.id} className="p-px mt-8 relative">
                                                        <div className="flex flex-col items-center w-full">
                                                            <div className="p-px w-full bg-gradient-to-br from-yellow-400 from-10% via-cyan-600 via-70% to-zinc-950 to-95% rounded-[1.4rem] lg:rounded-[2rem]">
                                                                <img className="w-full rounded-[calc(1.4rem-1px)] lg:rounded-[calc(2rem-1px)]" src={`/upfolio_team/${el.image}`} alt={`/upfolio_team/${el.name}`}/>
                                                            </div>
                                                            <div className="w-full flex flex-row justify-between p-2 mt-2">
                                                                <div className="">
                                                                    <h5 className="font-normal my-2 text-base text-cyan-600">
                                                                        {el.team}
                                                                    </h5>
                                                                    <h3 className="font-light m-0 text-xl lg:text-2xl text-zinc-300">
                                                                        {el.name}
                                                                    </h3>
                                                                </div>
                                                                <div className="flex justify-around items-center w-2/6">
                                                                    <FaLinkedinIn className="bg-zinc-950 border border-zinc-500/60 rounded-[0.5rem] p-[6px] h-10 w-10 text-zinc-400"/>
                                                                    <MdOutlineAlternateEmail className="bg-zinc-950  border border-zinc-500/60 rounded-[0.5rem] p-[6px] h-10 w-10  text-zinc-400"/>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </SwiperSlide>
                                                )
                                            })
                                        }
                                        
                                    </Swiper>
                                </FadeIn>
                            </div>
                        </div>
                    </section>

                </div>
            </div>
        </main>
    )
}