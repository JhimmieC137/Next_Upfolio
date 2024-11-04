import { initialProjectData, IProject, upfolioProjects } from "@/contexts/project-context";
import FadeIn from "@/ui-components/FadeIn";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";


export default function SingleProjectPage({path}: {path: string}) {
    const [projectData, setProjectData] = useState<IProject>(initialProjectData)

    useEffect(() => {
        for (const data of upfolioProjects) {
            if (data.path === path) setProjectData(data);
            // else redirect('/not-found');
        }
    }, [upfolioProjects])

    return (
        <main className="w-full relative">
            <div className='max-w-screen m-auto overflow-hidden'>
                <div className='px-2 lg:px-8 min-h-full'>

                    <section id="hero" className="relative h-[80vh] flex flex-col justify-center items-center mx-auto max-w-2xl md:max-w-3xl lg:max-w-6xl pt-32 xl:pt-24 pb-18 md:pb-24 lg:pb-14">
                        <FadeIn>
                            <div className="mb-8 md:mb-2 text-center sm:mb-10 lg:mb-5 flex justify-center">
                                <p className="text-md  text-zinc-200 font-light">
                                    Home / Projects / <span className='capitalize'>{path}</span>
                                </p>
                            </div>
                        </FadeIn>
                        <FadeIn>
                            <div className="text-center">
                                <h1 className="text-5xl lg:text-[8rem] font-normal tracking-tight text-yellow-300 capitalize">
                                    {path.split('-')[0]} {path.split('-')[1]}<br/><span className=" text-cyan-600">{path.split('-').slice(2).map(el => `${el} `)}</span>
                                </h1>
                            </div>
                        </FadeIn>
                    </section>

                    <section className="relative mx-auto max-w-2xl md:max-w-[52rem] mt-5 md:mt-20 xl:mt-0 lg:max-w-[1300px]">
                        <div className="w-full -mt-20">
                            <img className="rounded-[2.5rem]" src="/jpg/project_meeting.jpg" alt="team_meeting"/>
                        </div>
                    </section>

                    <section id="intro" className="relative mx-auto max-w-2xl md:max-w-[52rem] mt-5 xl:mt-0 lg:max-w-[1300px]  py-10 lg:py-5">
                        <FadeIn>
                            <div className="w-full mx-auto flex flex-col items-stretch justify-center divide-y-2 divide-zinc-500 text-base lg:text-xl font-normal">
                                <div className="flex justify-between w-full py-6">
                                    <h2 className="text-zinc-300 pl-px">
                                        Title
                                    </h2>
                                    <h2 className="text-cyan-600 pl-px max-w-[25rem] md:max-w-[35rem] lg:max-w-[56rem]">
                                        {projectData.title}
                                    </h2>
                                </div>
                                <div className="flex justify-between w-full  py-6">
                                    <h2 className="text-zinc-300 pl-px">
                                        Type
                                    </h2>
                                    <h2 className="text-cyan-600 pl-px max-w-[25rem] md:max-w-[35rem] lg:max-w-[56rem]">
                                        {projectData.tags.map((el, index) => index === projectData.tags.length - 1 ? `${el}` : `${el}, `)}
                                    </h2>
                                </div>
                                <div className="flex justify-between w-full  py-6">
                                    <h2 className="text-zinc-300 pl-px">
                                        Partners
                                    </h2>
                                    <h2 className="text-cyan-600 pl-px max-w-[25rem] md:max-w-[35rem] lg:max-w-[56rem]">
                                        {projectData.partners} 
                                    </h2>
                                </div>
                                <div className="flex justify-between w-full  py-6">
                                    <h2 className="text-zinc-300 pl-px">
                                        Year
                                    </h2>
                                    <h2 className="text-cyan-600 pl-px max-w-[25rem] md:max-w-[35rem] lg:max-w-[56rem]">
                                        {projectData.year}
                                    </h2>
                                </div>
                            </div>
                        </FadeIn>
                    </section>
                    

                    <section id="intro" className="relative mx-auto max-w-2xl md:max-w-[52rem] mt-4 md:mt-6 lg:mt-8 lg:max-w-[1300px] py-0 md:py-2 lg:py-3">
                        <FadeIn>
                            <div className="w-full">
                                <div className="text-left md:max-w-6xl px-0">
                                    <h1 className="text-left text-4xl lg:text-[3rem] text-cyan-600">
                                        Objective
                                    </h1>
                                </div>
                            </div>
                        </FadeIn>
                        <FadeIn>
                            <div className="flex flex-row justify-center w-full my-3 md:mt-5 px-3">
                                <div className="text-left w-full">
                                    <h4 className="text-sm md:text-lg font-normal text-zinc-400">
                                        {projectData.objective}
                                    </h4>
                                </div>
                            </div>
                        </FadeIn>
                    </section>


                    <section id="intro" className="relative mx-auto max-w-2xl md:max-w-[52rem] mt-4 md:mt-6 lg:mt-8 lg:max-w-[1300px] py-0 md:py-2 lg:py-3">
                        <FadeIn>
                            <div className="w-full">
                                <div className="text-left md:max-w-6xl px-0">
                                    <h1 className="text-left text-4xl lg:text-[3rem] text-cyan-600">
                                        Defined <span className="text-cyan-600">Goals</span>
                                    </h1>
                                </div>
                            </div>
                        </FadeIn>
                        <FadeIn>
                            <div className="flex flex-row justify-center w-full my-3 md:mt-5 px-5">
                                <div className="text-left w-full">
                                    <ol className="w-full list-decimal list-inside">
                                        {
                                            projectData.definedGoals.map(goal => (
                                                <li className="w-full text-sm md:text-lg font-normal text-zinc-400 py-3">
                                                    {goal.item}
                                                </li>
                                            ))
                                        }
                                    </ol>
                                </div>
                            </div>
                        </FadeIn>
                    </section>

                    
                    <section className="relative mx-auto max-w-2xl md:max-w-[52rem] my-16 md:my-20 lg:max-w-[1300px]">
                        <FadeIn>
                            <div className="w-full">
                                <img className="rounded-[1rem] lg:rounded-[2.5rem]" src="/jpg/project_meeting.jpg" alt="team_meeting"/>
                            </div>
                        </FadeIn>
                    </section>


                    <section id="intro" className="relative mx-auto max-w-2xl md:max-w-[52rem] mt-4 md:mt-6 lg:mt-8 lg:max-w-[1300px] py-0 md:py-2 lg:py-3">
                        <FadeIn>
                            <div className="w-full">
                                <div className="text-left md:max-w-6xl px-0">
                                    <h1 className="text-left text-4xl lg:text-[3rem] text-cyan-600">
                                        Result
                                    </h1>
                                </div>
                            </div>
                        </FadeIn>
                        <FadeIn>
                            <div className="flex flex-row justify-center w-full my-3 md:mt-5 px-3">
                                <div className="text-left w-full">
                                    <h4 className="text-sm md:text-lg font-normal text-zinc-400">
                                        {projectData.results}
                                    </h4>
                                </div>
                            </div>
                        </FadeIn>
                    </section>

                    <section id="intro" className="relative mx-auto max-w-2xl md:max-w-[52rem] mt-24 xl:mt-20 lg:max-w-[1300px]  py-0 md:py-20 lg:py-16">
                        <div className="flex flex-row justify-center md:justify-start ">
                            <div className="text-left md:max-w-6xl">
                                <FadeIn>
                                    <h1 className="text-center md:text-left text-[3rem] md:text-[4.5rem] lg:text-[6rem] xl:text-[6.5rem] 2xl:text-[7.7rem] text-yellow-300">
                                        Other
                                    </h1>
                                </FadeIn>
                                <FadeIn>
                                    <div className="relative w-full flex flex-row justify-start ml-14 md:ml-20 xl:ml-16 -mt-5 md:-mt-7">
                                        <img className="absolute -left-16 md:-left-24 -top-1 md:-top-5 lg:-top-5 w-[25%]  lg:w-[20%]" src="/png/meteor.png" alt="icon"/>
                                        {/* <img className="ml-10 h-24 w-auto" src="/svg/main-logo.svg" altccccccccccccc="main-logo"/> */}
                                        <h2 className="text-center md:text-left text-[3rem] md:text-[4.5rem] lg:text-[6rem] xl:text-[6.5rem] 2xl:text-[7.7rem] text-cyan-600 font-normal">
                                            Projects
                                        </h2>
                                    </div>
                                </FadeIn>
                            </div>
                        </div>
                        <div className="grid grid-flow-row grid-cols-1  md:grid-cols-2  gap-7 px-3 lg:px-0 mt-5 md:mt-8">
                        
                            {
                                upfolioProjects.map(el => {
                                    if (el.path != path)
                                    return (
                                        <FadeIn key={el.id}>
                                            <div className="flex flex-col item-center max-w-[36rem]">
                                                <div className='relative w-full max-w-[36rem] max-h-[43rem] xl:rounded-[2rem] rounded-[1rem] mb-3 overflow-hidden'>
                                                    <Link href={`/projects/${el.path}`} className="cursor-pointer peer z-10 absolute top-4 right-4 lg:top-8 lg:right-8 rounded-full bg-white text-zinc-800 h-16 w-16 lg:h-24 lg:w-24 p-3 flex justify-center  hover:bg-pink-600 hover:text-zinc-100 ease-in-out duration-200">
                                                        <ArrowRightIcon className="font-bold m-auto p-1 h-10 w-auto -rotate-45" />
                                                    </Link>
                                                    <Link href={`/projects/${el.path}`}>
                                                        <img className='cursor-pointer relative w-full max-h-[24rem] md:max-h-[13.5rem] lg:max-h-[24rem] hover:scale-105 peer-hover:scale-105 hover:rotate-3 peer-hover:rotate-3 ease duration-[3.5s]' src={`/upfolio_projects/${el.image}`} alt=''/>
                                                    </Link>
                                                </div>
                                                <div className="flex flex-row items-center w-full mt-3">
                                                    {
                                                        el.tags.map((tag, index) => (
                                                            <div key={index} className="bg-zinc-950 flex justify-center mr-2 lg:mr-5 border-solid border-[1px] border-zinc-300/60 text-zinc-300/80 text-center h-12 px-5 rounded-[10px]">
                                                                <p className='w-full m-auto text-base  font-normal'>{tag}</p>
                                                            </div>
                                                        ))
                                                    }
                                                </div>
                                                <div className="flex flex-col w-full">
                                                    <Link href={`/projects/${el.path}`} className='text-xl md:text-2xl lg:text-3xl text-zinc-300 max-w-max my-3 lg:my-7 hover:text-pink-500 ease-in-out duration-200'>
                                                        {el.title}
                                                    </Link>
                                                    <p className="text-sm font-normal text-zinc-400 mb-5">
                                                        {el.description}
                                                    </p>
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