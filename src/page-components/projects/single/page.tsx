import FadeIn from "@/ui-components/FadeIn";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

export default function SingleProjectPage() {
    return (
        <main className="w-full relative">
            <div className='max-w-screen m-auto overflow-hidden'>
                <div className='px-2 lg:px-8 min-h-full'>

                    <section id="hero" className="relative h-[60vh] flex flex-col justify-center items-center mx-auto max-w-2xl md:max-w-3xl lg:max-w-6xl pt-32 xl:pt-24 pb-18 md:pb-24 lg:pb-14">
                        <FadeIn>
                            <div className="mb-8 md:mb-2 text-center sm:mb-10 lg:mb-5 flex justify-center">
                                <p className="text-md  text-zinc-200 font-light">
                                    Home/Projects/Single
                                </p>
                            </div>
                        </FadeIn>
                        <FadeIn>
                            <div className="text-center">
                                <h1 className="text-5xl md:text-8xl lg:text-[8rem] font-normal tracking-tight text-yellow-300">
                                    Driving Change<br/><span className="lg:text-[9rem] text-cyan-600">Through Projects </span>
                                </h1>
                            </div>
                        </FadeIn>
                    </section>

                    {/* <section className="relative mx-auto max-w-2xl md:max-w-[52rem] mt-5 md:mt-20 xl:mt-0 lg:max-w-[1300px]">
                        <div className="w-full -mt-20">
                            <img className="rounded-[2.5rem]" src="/jpg/project_meeting.jpg" alt="team_meeting"/>
                        </div>
                    </section> */}

                    <section id="intro" className="relative mx-auto max-w-2xl md:max-w-[52rem] mt-5 xl:mt-0 lg:max-w-[1170px]  py-10 lg:py-5">
                        <div className="grid grid-flow-row grid-cols-1  md:grid-cols-2  gap-7 px-3 lg:px-0">
                        
                            
                            <div className="flex flex-col item-center max-w-[36rem]">
                                <div className='relative w-full max-w-[36rem] max-h-[43rem] xl:rounded-[2rem] rounded-[1rem] mb-3 overflow-hidden'>
                                    <div className="cursor-pointer peer z-10 absolute top-4 right-4 lg:top-8 lg:right-8 rounded-full bg-white text-zinc-800 h-16 w-16 lg:h-24 lg:w-24 p-3 flex justify-center  hover:bg-pink-600 hover:text-zinc-100 ease-in-out duration-200">
                                        <ArrowRightIcon className="font-bold m-auto p-1 h-10 w-auto -rotate-45" />
                                    </div>
                                    <img className='cursor-pointer relative w-full hover:scale-105 peer-hover:scale-105 hover:rotate-3 peer-hover:rotate-3 ease duration-[3.5s]' src='/webp/blog-3.webp' alt=''/>
                                </div>
                                <div className="flex flex-row items-center w-full mt-3">
                                    <div className="bg-zinc-950 flex justify-center mr-2 lg:mr-5 border-solid border-[1px] border-zinc-300/60 text-zinc-300/80 text-center h-12 px-5 rounded-[10px]">
                                        <p className='w-full m-auto text-base  font-normal'>Technology</p>
                                    </div>
                                    <div className="bg-zinc-950 flex justify-center mr-2 lg:mr-5 border-solid border-[1px] border-zinc-300/60 text-zinc-300/80 text-center h-12 px-5 rounded-[10px]">
                                        <p className='w-full m-auto text-base  font-normal'>Internship</p>
                                    </div>
                                    <div className="bg-zinc-950 flex justify-center mr-2 lg:mr-5 border-solid border-[1px] border-zinc-300/60 text-zinc-300/80 text-center h-12 px-5 rounded-[10px]">
                                        <p className='w-full m-auto text-base  font-normal'>Boost</p>
                                    </div>
                                </div>
                                <div className="flex flex-col jw-full">
                                    <h3 className='text-xl md:text-2xl lg:text-3xl text-zinc-300 max-w-max my-3 lg:my-7'>
                                        How cold email can scale a business
                                    </h3>
                                    <p className="text-sm font-normal text-zinc-400 mb-5">
                                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda voluptatem optio perferendis et consectetur.
                                    </p>
                                </div>
                            </div>
                            
                            <div className="flex flex-col item-center max-w-[36rem]">
                                <div className='relative w-full max-w-[36rem] max-h-[43rem] xl:rounded-[2rem] rounded-[1rem] mb-3 overflow-hidden'>
                                    <div className="cursor-pointer peer z-10 absolute top-4 right-4 lg:top-8 lg:right-8 rounded-full bg-white text-zinc-800 h-16 w-16 lg:h-24 lg:w-24 p-3 flex justify-center  hover:bg-pink-600 hover:text-zinc-100 ease-in-out duration-200">
                                        <ArrowRightIcon className="font-bold m-auto p-1 h-10 w-auto -rotate-45" />
                                    </div>
                                    <img className='cursor-pointer relative w-full hover:scale-105 peer-hover:scale-105 hover:rotate-3 peer-hover:rotate-3 ease duration-[3.5s]' src='/webp/blog-3.webp' alt=''/>
                                </div>
                                <div className="flex flex-row items-center w-full mt-3">
                                    <div className="bg-zinc-950 flex justify-center mr-2 lg:mr-5 border-solid border-[1px] border-zinc-300/60 text-zinc-300/80 text-center h-12 px-5 rounded-[10px]">
                                        <p className='w-full m-auto text-base  font-normal'>Technology</p>
                                    </div>
                                    <div className="bg-zinc-950 flex justify-center mr-2 lg:mr-5 border-solid border-[1px] border-zinc-300/60 text-zinc-300/80 text-center h-12 px-5 rounded-[10px]">
                                        <p className='w-full m-auto text-base  font-normal'>Internship</p>
                                    </div>
                                    <div className="bg-zinc-950 flex justify-center mr-2 lg:mr-5 border-solid border-[1px] border-zinc-300/60 text-zinc-300/80 text-center h-12 px-5 rounded-[10px]">
                                        <p className='w-full m-auto text-base  font-normal'>Boost</p>
                                    </div>
                                </div>
                                <div className="flex flex-col jw-full">
                                    <h3 className='text-xl md:text-2xl lg:text-3xl text-zinc-300 max-w-max my-3 lg:my-7'>
                                        How cold email can scale a business
                                    </h3>
                                    <p className="text-sm font-normal text-zinc-400 mb-5">
                                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda voluptatem optio perferendis et consectetur.
                                    </p>
                                </div>
                            </div>
                            
                            <div className="flex flex-col item-center max-w-[36rem]">
                                <div className='relative w-full max-w-[36rem] max-h-[43rem] xl:rounded-[2rem] rounded-[1rem] mb-3 overflow-hidden'>
                                    <div className="cursor-pointer peer z-10 absolute top-4 right-4 lg:top-8 lg:right-8 rounded-full bg-white text-zinc-800 h-16 w-16 lg:h-24 lg:w-24 p-3 flex justify-center  hover:bg-pink-600 hover:text-zinc-100 ease-in-out duration-200">
                                        <ArrowRightIcon className="font-bold m-auto p-1 h-10 w-auto -rotate-45" />
                                    </div>
                                    <img className='cursor-pointer relative w-full hover:scale-105 peer-hover:scale-105 hover:rotate-3 peer-hover:rotate-3 ease duration-[3.5s]' src='/webp/blog-3.webp' alt=''/>
                                </div>
                                <div className="flex flex-row items-center w-full mt-3">
                                    <div className="bg-zinc-950 flex justify-center mr-2 lg:mr-5 border-solid border-[1px] border-zinc-300/60 text-zinc-300/80 text-center h-12 px-5 rounded-[10px]">
                                        <p className='w-full m-auto text-base  font-normal'>Technology</p>
                                    </div>
                                    <div className="bg-zinc-950 flex justify-center mr-2 lg:mr-5 border-solid border-[1px] border-zinc-300/60 text-zinc-300/80 text-center h-12 px-5 rounded-[10px]">
                                        <p className='w-full m-auto text-base  font-normal'>Internship</p>
                                    </div>
                                    <div className="bg-zinc-950 flex justify-center mr-2 lg:mr-5 border-solid border-[1px] border-zinc-300/60 text-zinc-300/80 text-center h-12 px-5 rounded-[10px]">
                                        <p className='w-full m-auto text-base  font-normal'>Boost</p>
                                    </div>
                                </div>
                                <div className="flex flex-col jw-full">
                                    <h3 className='text-xl md:text-2xl lg:text-3xl text-zinc-300 max-w-max my-3 lg:my-7'>
                                        How cold email can scale a business
                                    </h3>
                                    <p className="text-sm font-normal text-zinc-400 mb-5">
                                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda voluptatem optio perferendis et consectetur.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                </div>
            </div>
        </main>
    )
}