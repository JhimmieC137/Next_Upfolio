import { informationSessions } from "@/contexts/team-context"
import { ArrowRightIcon } from "@heroicons/react/24/outline"
import { LuDot } from "react-icons/lu"

export default function BlogsPage() {
    return (
        <main className="w-full relative">
            <div className='max-w-screen m-auto overflow-hidden'>
                <div className='px-2 lg:px-8 min-h-full'>

                    <section id="hero" className="relative h-[70vh] flex flex-col justify-center items-center mx-auto max-w-2xl md:max-w-3xl lg:max-w-6xl pt-16 pb-20 md:pt-24 md:pb-20 lg:pb-14">
                        <div className="mb-8 md:mb-2 text-center sm:mb-10 lg:mb-3 flex justify-center">
                            <p className="text-md  text-zinc-200 font-light">
                                Home/Blogs
                            </p>
                        </div>
                        <div className="text-center">
                            <h1 className="text-6xl md:text-8xl lg:text-[8rem] font-normal tracking-tight text-yellow-300">
                                Explore <br/><span className="lg:text-[9rem] text-cyan-600">Our Articles</span>
                            </h1>
                        </div>
                    </section>


                    <section className="relative mx-auto max-w-2xl md:max-w-[52rem] mt-5 md:mt-20 xl:mt-0 lg:max-w-[1300px]">
                        <div className="w-full -mt-20">
                            <img className="rounded-[2.5rem]" src="/jpg/project_meeting.jpg" alt="team_meeting"/>
                        </div>
                        {/* <div className="w-full flex justify-between">
                            <h1>

                            </h1>

                        </div> */}
                    </section>


                    <section className="relative mx-auto max-w-2xl md:max-w-[52rem] lg:max-w-[1300px] mt-6 lg:py-16">
                        
                        <div className="w-full flex flex-col justify-start">
                            <div className="flex flex-row justify-center md:justify-start ">
                                <div className="text-left md:max-w-6xl px-5">
                                    <h1 className="text-center md:text-left text-[3rem] md:text-[4.5rem] lg:text-[6rem] xl:text-[6.5rem] 2xl:text-[7.7rem] text-yellow-300">
                                        Recent
                                    </h1>
                                    <div className="relative w-full flex flex-row justify-end ml-0 md:ml-10 xl:ml-16 -mt-5 md:-mt-7">
                                        <img className="absolute -left-7 -top-6 md:-top-5 lg:-top-5 w-[29%]" src="/png/meteor.png" alt="icon"/>
                                        {/* <img className="ml-10 h-24 w-auto" src="/svg/main-logo.svg" altccccccccccccc="main-logo"/> */}
                                        <h2 className="text-center md:text-left text-[3rem] md:text-[4.5rem] lg:text-[6rem] xl:text-[6.5rem] 2xl:text-[7.7rem] text-cyan-600 font-normal">
                                            Blogs
                                        </h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="flex flex-row items-center w-full mt-5 px-10">
                            <div className="flex justify-center mr-5 border-solid border-[1px] border-zinc-300/60 text-zinc-300/80 text-center h-14 px-5 rounded-[33px]">
                                <p className='w-full m-auto text-base  font-normal'>Technology</p>
                            </div>
                            <div className="flex justify-center mr-5 border-solid border-[1px] border-zinc-300/60 text-zinc-300/80 text-center h-14 px-5 rounded-[33px]">
                                <p className='w-full m-auto text-base  font-normal'>Internship</p>
                            </div>
                            <div className="flex justify-center mr-5 border-solid border-[1px] border-zinc-300/60 text-zinc-300/80 text-center h-14 px-5 rounded-[33px]">
                                <p className='w-full m-auto text-base  font-normal'>Boost</p>
                            </div>
                            <div className="flex justify-center mr-5 border-solid border-[1px] border-zinc-300/60 text-zinc-300/80 text-center h-14 px-5 rounded-[33px]">
                                <p className='w-full m-auto text-base  font-normal'>Boost</p>
                            </div>
                            <div className="flex justify-center mr-5 border-solid border-[1px] border-zinc-300/60 text-zinc-300/80 text-center h-14 px-5 rounded-[33px]">
                                <p className='w-full m-auto text-base  font-normal'>Boost</p>
                            </div>
                        </div>
                        
                        <div className="grid grid-flow-row grid-cols-2 mt-20">

                            {
                                informationSessions.map(el => {
                                    return (
                                        <div key={el.id} className="flex flex-col items-center w-full mb-16">
                                            <div className="flex flex-col item-center max-w-[36rem]">
                                                <div className='relative w-full max-w-[43rem] max-h-[36rem] xl:rounded-[2rem] rounded-[0.85rem] mb-3 overflow-hidden'>
                                                    <div className="cursor-pointer z-10 absolute top-8 right-8 rounded-full bg-white text-zinc-800 h-24 w-24 p-3 flex justify-center  hover:bg-pink-600 hover:text-zinc-100 ease-in-out duration-200">
                                                        <ArrowRightIcon className="font-bold m-auto p-1 h-10 w-auto -rotate-45" />
                                                    </div>
                                                    <img className='cursor-pointer relative w-full' src={`/upfolio_programs/information_sessions/${el.image}`} alt=''/>
                                                </div>
                                                <div className="flex flex-col jw-full">
                                                    <h3 className='text-2xl md:text-3xl text-zinc-300 max-w-max my-7'>
                                                        {el.title}
                                                    </h3>
                                                </div>
                                            </div>
                                            <div className="w-[90%] flex justify-start items-center">
                                                <div className="flex justify-center mr-6 border-solid border-[1px] border-zinc-300/60 text-zinc-300/80 text-center h-8 px-4 rounded-[20px]">
                                                    <p className='w-full m-auto text-sm  font-normal'>Boost</p>
                                                </div>
                                                <h2 className="text-lg font-normal text-zinc-400 mr-1">
                                                    15th October, 2025 
                                                </h2>
                                                <h2 className="text-lg font-normal text-zinc-400 mr-1">
                                                    <LuDot className="h-7 w-auto" />
                                                </h2>
                                                <h2 className="text-lg font-normal text-zinc-400 ">
                                                    10 mins read
                                                </h2>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                            
                        </div>

                    </section>


                    <section id="intro" className="relative mx-auto max-w-2xl md:max-w-[52rem] mt-5 xl:mt-0 lg:max-w-[1300px]  py-0 md:py-10 lg:py-5">
                        <div className="grid grid-flow-row grid-cols-2 ">

                            {/* {
                                informationSessions.map(el => {
                                    return (
                                        <div key={el.id} className="flex flex-col items-center w-full mb-10">
                                            <div className="flex flex-col item-center max-w-[36rem]">
                                                <div className='relative w-full max-w-[43rem] max-h-[36rem] xl:rounded-[2rem] rounded-[1rem] mb-3 overflow-hidden'>
                                                    <div className="cursor-pointer z-10 absolute top-8 right-8 rounded-full bg-white text-zinc-800 h-24 w-24 p-3 flex justify-center  hover:bg-pink-600 hover:text-zinc-100 ease-in-out duration-200">
                                                        <ArrowRightIcon className="font-bold m-auto p-1 h-10 w-auto -rotate-45" />
                                                    </div>
                                                    <img className='cursor-pointer relative w-full' src={`/upfolio_programs/information_sessions/${el.image}`} alt=''/>
                                                </div>
                                                <div className="flex flex-col jw-full">
                                                    <h3 className='text-xl md:text-3xl text-zinc-300 max-w-max my-7'>
                                                        {el.title}
                                                    </h3>
                                                    <p className="text-sm font-normal text-zinc-400 mb-5">
                                                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda voluptatem optio perferendis et consectetur.
                                                    </p>
                                                </div>
                                            </div>

                                        </div>
                                    )
                                })
                            } */}



                        </div>
                    </section>



                </div>
            </div>
        </main>
    )
}