import { capacityDevelopmentSessions, initialProgramData, IProgram, upfolioPrograms } from "@/contexts/program-context";
import FadeIn from "@/ui-components/FadeIn";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";
import { BsFillPersonFill, BsPeopleFill } from "react-icons/bs";
import { IoLocationSharp } from "react-icons/io5";
import { LiaStarSolid } from "react-icons/lia";

export default function SingleProgramPage({path} : {path: string}) {
    const [programData, setProgramData] = useState<IProgram>(initialProgramData)

    useEffect(() => {
        for (const data of upfolioPrograms) {
            if (data.path === path) setProgramData(data);
            // else redirect('/not-found');
        }
    }, [upfolioPrograms])

    return (
        <main className="w-full relative">
            <div className='max-w-screen m-auto overflow-hidden'>
                <div className='px-2 lg:px-8 min-h-full'>

                    <section id="hero" className="relative h-[80vh] flex flex-col justify-center items-center mx-auto max-w-2xl md:max-w-3xl lg:max-w-6xl pt-32 xl:pt-24 pb-18 md:pb-24 lg:pb-14">
                        <FadeIn>
                            <div className="mb-8 md:mb-2 text-center sm:mb-10 lg:mb-3 flex justify-center">
                                <p className="text-md  text-zinc-200 font-light">
                                    Home / Programs / <span className='capitalize'>{path}</span>
                                </p>
                            </div>
                        </FadeIn>
                        <FadeIn>
                            <div className="text-center">
                                <h1 className="text-5xl lg:text-[8rem] font-normal tracking-tight text-yellow-300 capitalize">
                                    {path.split('-')[0]} {path.split('-')[1]}<br/><span className="text-cyan-600">{path.split('-').slice(2).map(el => `${el} `)}</span>
                                </h1>
                            </div>
                        </FadeIn>
                    </section>


                    <section className="relative mx-auto max-w-2xl md:max-w-[52rem] mt-5 md:mt-20 lg:max-w-[1300px]">
                        <FadeIn>
                            <div className="w-full mt-16 md:mt-0 lg:-mt-20">
                                <img className="rounded-[1rem] lg:rounded-[2.5rem]" src="/jpg/project_meeting.jpg" alt="team_meeting"/>
                            </div>
                        </FadeIn>
                    </section>


                    <section id="intro" className="relative mx-auto max-w-2xl md:max-w-[52rem] px-2 md:px-0 mt-5 lg:mt-0 lg:max-w-[1300px] py-0 md:py-5 lg:py-10 flex flex-col md:flex-row justify-between">
                        <FadeIn>
                            <div className="flex flex-row justify-center md:justify-start ">
                                <div className="text-left max-w-full lg:max-w-xl pr-0 md:pl-5 lg:px-5">
                                    <p className="text-sm text-zinc-400/80 mb-2">
                                        {programData.category} 
                                    </p>
                                    <h1 className="text-left text-[2rem] md:text-[2.3rem] 2xl:text-[3rem] text-yellow-300 capitalize">
                                        {path.split('-')[0]} {path.split('-')[1]} <span className="text-cyan-600">{path.split('-').slice(2).map(el => `${el} `)}</span>
                                    </h1>
                                    <div className="w-full px-px my-3">
                                        <h4 className="text-sm md:text-base font-normal text-zinc-400">
                                            {programData.description}
                                        </h4>
                                    </div>
                                </div>
                            </div>
                        </FadeIn>
                        <div className="flex flex-row justify-end w-full lg:w-2/6 my-6 mt-8 md:my-0 px-2">
                            <FadeIn>
                                <div className="max-w-max pt-3">
                                    <div className="max-w-20 max-h-20 md:max-h-[5rem] md:max-w-[5rem] lg:max-h-20 lg:max-w-20 p-[5px] lg:p-2 rounded-[50%] border-2 border-zinc-400">
                                        <IoLocationSharp className="p-0 lg:p-2 h-10 md:h-6 lg:h-10  w-auto text-zinc-400" />
                                    </div>
                                </div>
                            </FadeIn>
                            <FadeIn>
                                <div className="flex flex-col justify-start w-full ml-5">
                                    <h4 className="text-xl lg:text-2xl font-normal text-zinc-300">
                                        {programData.location}
                                    </h4>
                                    <h4 className="text-base lg:text-lg font-normal text-zinc-300 mt-1 lg:mt-4">
                                        <span className="text-pink-600 font-semibold no-underline hover:underline"><a href="/#">{programData.address}</a></span>, {programData.date}
                                    </h4>
                                </div>
                            </FadeIn>
                        </div>
                    </section>


                    <section id="intro" className="relative mx-auto max-w-2xl md:max-w-[52rem] mt-10 md:mt-24 xl:mt-20 lg:max-w-[1300px]  px-2 md:my-20 lg:my-16">
                        <FadeIn>
                            <div className="px-5 w-full md:h-40 lg:h-44 bg-zinc-700/50 flex flex-col md:flex-row justify-around items-center divide-zinc-900 rounded-[0.55rem] lg:rounded-[1rem] text-zinc-200">
                                <div className="my-6 lg:my-0 w-full flex justify-around md:justify-center items-center">
                                    <h1 className="w-3/6 md:w-max text-6xl text-center">
                                        {programData.speakers}
                                    </h1>
                                    <div className="w-3/6 md:w-max ml-0 md:ml-4 flex flex-col items-center justify-center">
                                        <BsFillPersonFill className="h-5 w-5 lg:h-7 lg:w-7 text-center"/>
                                        <h1 className="my-2 lg:my-0 text-base md:text-sm lg:text-base mt-1 lg:mt-2">
                                            Speaker(s)
                                        </h1>
                                    </div>
                                </div>
                                <div className="hidden md:block h-20 w-[3px] bg-zinc-950/70 rounded-xl mx-3"/>
                                <div className="my-6 lg:my-0  w-full flex justify-around md:justify-center items-center">
                                    <h1 className="w-3/6 md:w-max text-6xl text-center">
                                        {programData.feedback}
                                    </h1>
                                    <div className="w-3/6 md:w-max ml-0 md:ml-4 flex flex-col items-center justify-center">
                                        <div className="px-3 flex justify-center gap-1">
                                        <LiaStarSolid className="h-3 w-3 lg:h-4 lg:w-4 text-center"/>
                                        <LiaStarSolid className="h-3 w-3 lg:h-4 lg:w-4 text-center"/>
                                        <LiaStarSolid className="h-3 w-3 lg:h-4 lg:w-4 text-center"/>
                                        <LiaStarSolid className="h-3 w-3 lg:h-4 lg:w-4 text-center"/>
                                        <LiaStarSolid className="h-3 w-3 lg:h-4 lg:w-4 text-center"/>
                                        </div>
                                        <h1 className="text-sm lg:text-base mt-2">
                                            Reviews and feedbacks 
                                        </h1>
                                    </div>
                                </div>
                                <div className="hidden md:block h-20 w-[3px] bg-zinc-950/70 rounded-xl mx-3"/>
                                <div className="my-6 lg:my-0   w-full flex justify-around md:justify-center items-center">
                                    <h1 className="w-3/6 md:w-max text-6xl text-center">
                                        {programData.attendance}+
                                    </h1>
                                    <div className="w-3/6 md:w-max ml-0 md:ml-4 flex flex-col items-center justify-center">
                                        <BsPeopleFill className="h-5 w-5 lg:h-7 lg:w-7 text-center"/>
                                        <h1 className="text-sm lg:text-base mt-1">
                                            Listeners 
                                        </h1>
                                    </div>
                                </div>
                            </div>
                        </FadeIn>
                    </section>

                    <section id="intro" className="relative mx-auto max-w-2xl md:max-w-[52rem] mt-16 md:mt-8 lg:mt-24 xl:mt-20 lg:max-w-[1300px]  py-0 md:py-2 lg:py-16">
                        <FadeIn>
                            <div className="w-full">
                                <div className="text-left md:max-w-6xl px-3 md:px-5 lg:px-0">
                                    <h1 className="text-left text-4xl lg:text-[3rem] text-cyan-600">
                                        Quick Insight
                                    </h1>
                                </div>
                            </div>
                        </FadeIn>
                        <FadeIn>
                            <div className="flex flex-row justify-center w-full my-6 md:mt-8 lg:mt-8 px-3">
                                <div className="text-left w-full">
                                    <h4 className="text-sm md:text-lg font-normal text-zinc-400">
                                        {programData.insight}
                                    </h4>
                                </div>
                            </div>
                        </FadeIn>
                    </section>


                    <section id="intro" className="relative mx-auto max-w-2xl md:max-w-[52rem] mt-20 lg:mt-24 xl:mt-20 lg:max-w-[1300px]  py-0 md:py-16 lg:py-16">
                        <div className="flex flex-row justify-center md:justify-start ">
                            <div className="text-left md:max-w-6xl px-5">
                                <FadeIn>
                                    <h1 className="text-center md:text-left text-[3rem] md:text-[4.5rem] lg:text-[6rem] xl:text-[6.5rem] 2xl:text-[7.7rem] text-yellow-300">
                                        Related
                                    </h1>
                                </FadeIn>
                                <FadeIn>
                                    <div className="relative w-full flex flex-row justify-start ml-16 md:ml-20 xl:ml-16 -mt-5 md:-mt-7">
                                        <img className="absolute -left-16 lg:-left-20 -top-1 md:-top-5 lg:-top-5 w-[20%] lg:w-[18%]" src="/png/meteor.png" alt="icon"/>
                                        {/* <img className="ml-10 h-24 w-auto" src="/svg/main-logo.svg" altccccccccccccc="main-logo"/> */}
                                        <h2 className="text-center md:text-left text-[3rem] md:text-[4.5rem] lg:text-[6rem] xl:text-[6.5rem] 2xl:text-[7.7rem] text-cyan-600 font-normal">
                                            Programs
                                        </h2>
                                    </div>
                                </FadeIn>
                            </div>
                        </div>
                    </section>

                    <section id="intro" className="relative mx-auto max-w-2xl md:max-w-[52rem] mt-8 lg:mt-5 xl:mt-0 lg:max-w-[1300px]  py-0 lg:py-5">
                        <div className="grid grid-flow-row grid-cols-1 md:grid-cols-2 gap-3 md:gap-6 p-3 lg:p-0">

                            {
                                upfolioPrograms.map(el => {
                                    if (el.category === programData.category && el.path != path)
                                    return (
                                        <FadeIn key={el.id}>
                                            <div className="flex flex-col items-center w-full mb-10">
                                                <div className="flex flex-col item-center max-w-[36rem]">
                                                    <div className='relative w-full max-w-[43rem] max-h-[36rem] xl:rounded-[2rem] rounded-[1rem] mb-3 overflow-hidden'>
                                                        <Link href={`/programs/${el.path}`}  className="cursor-pointer z-10 absolute top-4 right-4 lg:top-8 lg:right-8 rounded-full bg-white text-zinc-800 h-16 w-16 lg:h-24 lg:w-24 p-3 flex justify-center  hover:bg-pink-600 hover:text-zinc-100 ease-in-out duration-200">
                                                            <ArrowRightIcon className="font-bold m-auto p-1 h-10 w-auto -rotate-45" />
                                                        </Link>
                                                        <Link href={`/programs/${el.path}`} >
                                                            <img className='cursor-pointer relative w-full' src={`/upfolio_programs/${programData.category}/${el.image}`} alt=''/>
                                                        </Link>
                                                    </div>
                                                    <div className="flex flex-col jw-full">
                                                        <Link href={`/programs/${el.path}`}  className='text-xl md:text-2xl lg:text-3xl text-zinc-300 max-w-max my-3 lg:my-7 hover:text-pink-500 ease-in-out duration-200 cursor-pointer'>
                                                            {el.title}
                                                        </Link>
                                                        <p className="text-sm font-normal text-zinc-400 mb-5">
                                                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda voluptatem optio perferendis et consectetur.
                                                        </p>
                                                    </div>
                                                </div>

                                            </div>
                                        </FadeIn>
                                    )
                                })
                            }


                        </div>
                    </section>



                </div>
            </div>
        </main>
    )
}