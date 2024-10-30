import { capacityDevelopmentSessions, informationSessions } from "@/contexts/team-context";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { BsFillPersonFill, BsPeopleFill } from "react-icons/bs";
import { IoLocationSharp } from "react-icons/io5";
import { LiaStarSolid } from "react-icons/lia";

export default function SingleProgramPage() {
    return (
        <main className="w-full relative">
            <div className='max-w-screen m-auto overflow-hidden'>
                <div className='px-2 lg:px-8 min-h-full'>

                    <section id="hero" className="relative h-[60vh] flex flex-col justify-center items-center mx-auto max-w-2xl md:max-w-3xl lg:max-w-6xl pt-32 xl:pt-24 pb-18 md:pb-24 lg:pb-14">
                        <div className="mb-8 md:mb-2 text-center sm:mb-10 lg:mb-3 flex justify-center">
                            <p className="text-md  text-zinc-200 font-light">
                                Home/Programs/Single
                            </p>
                        </div>
                        <div className="text-center">
                            <h1 className="text-5xl md:text-8xl lg:text-[8rem] font-normal tracking-tight text-yellow-300">
                               Programs <br/><span className="lg:text-[9rem] text-cyan-600">That Matter</span>
                            </h1>
                        </div>
                    </section>


                    <section className="relative mx-auto max-w-2xl md:max-w-[52rem] mt-5 md:mt-20 lg:max-w-[1300px]">
                        <div className="w-full mt-16 md:mt-0 lg:-mt-20">
                            <img className="rounded-[1rem] lg:rounded-[2.5rem]" src="/jpg/project_meeting.jpg" alt="team_meeting"/>
                        </div>
                    </section>


                    <section id="intro" className="relative mx-auto max-w-2xl md:max-w-[52rem] md:mt-5 lg:mt-0 lg:max-w-[1300px] py-0 md:py-5 lg:py-10 flex flex-col md:flex-row justify-between">
                        <div className="flex flex-row justify-center md:justify-start ">
                            <div className="text-left max-w-full lg:max-w-xl  pl-5 pr-0 lg:px-5">
                                <p className="text-sm text-zinc-400/80 mb-2">
                                    Information Sessions  
                                </p>
                                <h1 className="text-left text-[2rem] md:text-[2.3rem] 2xl:text-[3rem] text-yellow-300">
                                    Discovering Fully Funded <span className="text-cyan-600">Scholarships</span>
                                </h1>
                                <div className="w-full px-px my-3">
                                    <h4 className="text-sm md:text-base font-normal text-zinc-400">
                                        Lorem ipsum dolor itaque autem alias quo natus quasi fugiat eaque ipsa quis voluptate nam numquam, fugit aliquid, ratione cum est? Dolorem consequuntur necessitatibus voluptate, ipsa quis voluptate nam numquam!
                                    </h4>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-row justify-end w-full lg:w-2/6 my-6 mt-8 md:my-0 px-2">
                            <div className="max-w-max pt-3">
                                <div className="max-h-[5rem] max-w-[5rem] lg:max-h-20 lg:max-w-20 p-[5px] lg:p-2 rounded-[50%] border-2 border-zinc-400">
                                    <IoLocationSharp className="p-0 lg:p-2 h-6 lg:h-10  w-auto text-zinc-400" />
                                </div>
                            </div>
                            <div className="flex flex-col justify-start w-full ml-5">
                                <h4 className="text-lg lg:text-2xl font-normal text-zinc-300">
                                    Google Meet
                                </h4>
                                <h4 className="text-base lg:text-lg font-normal text-zinc-300 mt-1 lg:mt-4">
                                    <span className="text-pink-600 no-underline hover:underline"><a href="/#">https://meet.google.com/cssdc-dsc-dccc</a></span>, 5th October 2011
                                </h4>
                            </div>
                        </div>
                    </section>


                    <section id="intro" className="relative mx-auto max-w-2xl md:max-w-[52rem] mt-24 xl:mt-20 lg:max-w-[1300px]  px-2 md:my-20 lg:my-16">
                        <div className="w-full h-44 bg-zinc-700/50 flex flex-col lg:flex-row justify-evenly items-center divide-zinc-900 rounded-[0.55rem] lg:rounded-[1rem] text-zinc-200">
                            <div className="flex justify-end items-center">
                                <h1 className="text-6xl">
                                    1
                                </h1>
                                <div className="ml-4 flex flex-col items-center">
                                    <BsFillPersonFill className="h-7 w-7 text-center"/>
                                    <h1 className="text-base mt-2">
                                        Speaker(s) 
                                    </h1>
                                </div>
                            </div>
                            <div className="h-20 w-[2px] bg-zinc-950/60 rounded-xl"/>
                            <div className="flex justify-center items-center">
                                <h1 className="text-6xl">
                                    65%
                                </h1>
                                <div className="ml-4 flex flex-col items-center">
                                    <div className="px-3 flex justify-center gap-1">
                                       <LiaStarSolid className="h-4 w-4 text-center"/>
                                       <LiaStarSolid className="h-4 w-4 text-center"/>
                                       <LiaStarSolid className="h-4 w-4 text-center"/>
                                       <LiaStarSolid className="h-4 w-4 text-center"/>
                                       <LiaStarSolid className="h-4 w-4 text-center"/>
                                    </div>
                                    <h1 className="text-base mt-2">
                                        Reviews and feedbacks 
                                    </h1>
                                </div>
                            </div>
                            <div className="h-20 w-[2px] bg-zinc-950/60 rounded-xl"/>
                            <div className="flex justify-center items-center">
                                <h1 className="text-6xl">
                                    70+
                                </h1>
                                <div className="ml-4 flex flex-col items-center">
                                    <BsPeopleFill className="h-7 w-7 text-center"/>
                                    <h1 className="text-base mt-2">
                                        Listeners 
                                    </h1>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section id="intro" className="relative mx-auto max-w-2xl md:max-w-[52rem] mt-24 xl:mt-20 lg:max-w-[1300px]  py-0 md:py-20 lg:py-16">
                        <div className="flex flex-row justify-center md:justify-start ">
                            <div className="text-left md:max-w-6xl px-5">
                                <h1 className="text-center md:text-left text-xl md:text-3xl lg:text-[3rem] text-cyan-600">
                                    Quick Insight
                                </h1>
                            </div>
                        </div>
                        <div className="flex flex-row justify-center w-full my-6 md:mt-8 lg:mt-8 px-7">
                            <div className="text-left w-full">
                                <h4 className="text-sm md:text-lg font-normal text-zinc-400">
                                    Lorem ipsum dolor itaque autem alias quo natus quasi fugiat eaque ipsa quis voluptate nam numquam, fugit aliquid, ratione cum est? Dolorem consequuntur necessitatibus voluptate, ipsa quis voluptate nam numquam! fugit aliquid, ratione cum est? Dolorem consequuntur necessitatibus voluptate. wj jsdckjk jw oiwurewpol ak lsc noino qiw p.
                                    Quasi fugiat eaque ipsa quis voluptate nam numquam, fugit aliquid Ratione cum est Dolorem consequuntur necessitatibus voluptate, ipsa quis voluptate nam numquam fugit aliquid ratione cum est? Dolorem consequuntur necessitatibus voluptate. wj jsdckjk jw oiwurewpol ak lsc noino qiw p.
                                </h4>
                                <h4 className="text-sm md:text-lg font-normal text-zinc-400">
                                    Uid, ratione cum est? Dolorem consequuntur necessitatibus voluptate, ipsa quis voluptate nam numquam! Olorem consequuntur necessitatibus voluptate.
                                </h4>
                            </div>
                        </div>
                    </section>


                    <section id="intro" className="relative mx-auto max-w-2xl md:max-w-[52rem] mt-24 xl:mt-20 lg:max-w-[1300px]  py-0 md:py-20 lg:py-16">
                        <div className="flex flex-row justify-center md:justify-start ">
                            <div className="text-left md:max-w-6xl px-5">
                                <h1 className="text-center md:text-left text-[3rem] md:text-[4.5rem] lg:text-[6rem] xl:text-[6.5rem] 2xl:text-[7.7rem] text-yellow-300">
                                    Related
                                </h1>
                                <div className="relative w-full flex flex-row justify-start ml-16 md:ml-20 xl:ml-16 -mt-5 md:-mt-7">
                                    <img className="absolute -left-20 md:-left-24 -top-1 md:-top-5 lg:-top-5 w-[20%] lg:w-[18%]" src="/png/meteor.png" alt="icon"/>
                                    {/* <img className="ml-10 h-24 w-auto" src="/svg/main-logo.svg" altccccccccccccc="main-logo"/> */}
                                    <h2 className="text-center md:text-left text-[3rem] md:text-[4.5rem] lg:text-[6rem] xl:text-[6.5rem] 2xl:text-[7.7rem] text-cyan-600 font-normal">
                                        Programs
                                    </h2>
                                </div>
                            </div>
                        </div>
                        {/* <div className="flex flex-row justify-center w-full my-6 md:mt-8 lg:mt-8 px-5">
                            <div className="flex flex-row justify-center w-full">
                                <h4 className="text-lg md:text-3xl md:px-4 md:leading-[3rem] md:p-3 font-normal text-zinc-300">
                                    Lorem ipsum dolor itaque autem alias quo natus quasi fugiat eaque ipsa quis voluptate nam numquam, fugit aliquid, ratione cum est? Dolorem consequuntur necessitatibus voluptate, ipsa quis voluptate nam numquam!
                                </h4>
                            </div>
                        </div> */}
                    </section>

                    <section id="intro" className="relative mx-auto max-w-2xl md:max-w-[52rem] mt-5 xl:mt-0 lg:max-w-[1300px]  py-0 md:py-10 lg:py-5">
                        <div className="grid grid-flow-row grid-cols-1 md:grid-cols-2 gap-6 p-3 lg:p-0">

                            {
                                capacityDevelopmentSessions.map(el => {
                                    return (
                                        <div key={el.id} className="flex flex-col items-center w-full mb-10">
                                            <div className="flex flex-col item-center max-w-[36rem]">
                                                <div className='relative w-full max-w-[43rem] max-h-[36rem] xl:rounded-[2rem] rounded-[1rem] mb-3 overflow-hidden'>
                                                    <div className="cursor-pointer z-10 absolute top-4 right-4 lg:top-8 lg:right-8 rounded-full bg-white text-zinc-800 h-16 w-16 lg:h-24 lg:w-24 p-3 flex justify-center  hover:bg-pink-600 hover:text-zinc-100 ease-in-out duration-200">
                                                        <ArrowRightIcon className="font-bold m-auto p-1 h-10 w-auto -rotate-45" />
                                                    </div>
                                                    <img className='cursor-pointer relative w-full' src={`/upfolio_programs/capacity_development/${el.image}`} alt=''/>
                                                </div>
                                                <div className="flex flex-col jw-full">
                                                    <h3 className='text-xl md:text-2xl lg:text-3xl text-zinc-300 max-w-max my-3 lg:my-7'>
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
                            }


                        </div>
                    </section>



                </div>
            </div>
        </main>
    )
}