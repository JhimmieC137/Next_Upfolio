import { ArrowRightIcon } from "@heroicons/react/24/outline";

export default function ProjectsPage() {
    return (
        <main className="w-full relative">
            <div className='max-w-screen m-auto overflow-hidden'>
                <div className='px-2 lg:px-8 min-h-full'>

                    <section id="hero" className="relative h-[70vh] flex flex-col justify-center items-center mx-auto max-w-2xl md:max-w-3xl lg:max-w-6xl pt-16 pb-20 md:pt-24 md:pb-20 lg:pb-14">
                        <div className="mb-8 md:mb-2 text-center sm:mb-10 lg:mb-5 flex justify-center">
                            <p className="text-md  text-zinc-200 font-light">
                                Home/Projects
                            </p>
                        </div>
                        <div className="text-center">
                            <h1 className="text-6xl md:text-8xl lg:text-[8rem] font-normal tracking-tight text-yellow-300">
                                Driving Change<br/><span className="lg:text-[9rem] text-cyan-600">Through Projects </span>
                            </h1>
                        </div>
                    </section>

                    {/* <section className="relative mx-auto max-w-2xl md:max-w-[52rem] mt-5 md:mt-20 xl:mt-0 lg:max-w-[1300px]">
                        <div className="w-full -mt-20">
                            <img className="rounded-[2.5rem]" src="/jpg/project_meeting.jpg" alt="team_meeting"/>
                        </div>
                    </section> */}

                    <section id="intro" className="relative mx-auto max-w-2xl md:max-w-[52rem] mt-5 xl:mt-0 lg:max-w-[1170px]  py-0 md:py-10 lg:py-5">
                        <div className="grid grid-flow-row grid-cols-2 gap-10">
                        
                            
                            <div className="flex flex-col item-center max-w-[36rem]">
                                <div className='relative w-full max-w-[36rem] max-h-[43rem] xl:rounded-[2rem] rounded-[1rem] mb-3 overflow-hidden'>
                                    <div className="cursor-pointer peer z-10 absolute top-8 right-8 rounded-full bg-white text-zinc-800 h-24 w-24 p-3 flex justify-center  hover:bg-pink-600 hover:text-zinc-100 ease-in-out duration-200">
                                        <ArrowRightIcon className="font-bold m-auto p-1 h-10 w-auto -rotate-45" />
                                    </div>
                                    <img className='cursor-pointer relative w-full hover:scale-125 peer-hover:scale-125 hover:rotate-6 peer-hover:rotate-3 ease-in-out duration-[4.5s]' src='/webp/blog-3.webp' alt=''/>
                                </div>
                                <div className="flex flex-row items-center w-full mt-3">
                                    <div className="flex justify-center mr-5 border-solid border-[1px] border-zinc-300/60 text-zinc-300/80 text-center h-12 px-5 rounded-[10px]">
                                        <p className='w-full m-auto text-base  font-normal'>Technology</p>
                                    </div>
                                    <div className="flex justify-center mr-5 border-solid border-[1px] border-zinc-300/60 text-zinc-300/80 text-center h-12 px-5 rounded-[10px]">
                                        <p className='w-full m-auto text-base  font-normal'>Internship</p>
                                    </div>
                                    <div className="flex justify-center mr-5 border-solid border-[1px] border-zinc-300/60 text-zinc-300/80 text-center h-12 px-5 rounded-[10px]">
                                        <p className='w-full m-auto text-base  font-normal'>Boost</p>
                                    </div>
                                </div>
                                <div className="flex flex-col jw-full">
                                    <h3 className='text-xl md:text-3xl text-zinc-300 max-w-max my-7'>
                                        How cold email can scale a business
                                    </h3>
                                    <p className="text-sm font-normal text-zinc-400 mb-5">
                                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda voluptatem optio perferendis et consectetur.
                                    </p>
                                </div>
                            </div>
                        
                            
                            <div className="flex flex-col item-center max-w-[36rem]">
                                <div className='relative w-full max-w-[36rem] max-h-[43rem] xl:rounded-[2rem] rounded-[1rem] mb-3 overflow-hidden'>
                                    <div className="cursor-pointer peer z-10 absolute top-8 right-8 rounded-full bg-white text-zinc-800 h-24 w-24 p-3 flex justify-center  hover:bg-pink-600 hover:text-zinc-100 ease-in-out duration-200">
                                        <ArrowRightIcon className="font-bold m-auto p-1 h-10 w-auto -rotate-45" />
                                    </div>
                                    <img className='cursor-pointer relative w-full hover:scale-125 peer-hover:scale-125 hover:rotate-6 peer-hover:rotate-3 ease-in-out duration-[4.5s]' src='/webp/blog-3.webp' alt=''/>
                                </div>
                                <div className="flex flex-row items-center w-full mt-3">
                                    <div className="flex justify-center mr-5 border-solid border-[1px] border-zinc-300/60 text-zinc-300/80 text-center h-12 px-5 rounded-[10px]">
                                        <p className='w-full m-auto text-base  font-normal'>Technology</p>
                                    </div>
                                    <div className="flex justify-center mr-5 border-solid border-[1px] border-zinc-300/60 text-zinc-300/80 text-center h-12 px-5 rounded-[10px]">
                                        <p className='w-full m-auto text-base  font-normal'>Internship</p>
                                    </div>
                                    <div className="flex justify-center mr-5 border-solid border-[1px] border-zinc-300/60 text-zinc-300/80 text-center h-12 px-5 rounded-[10px]">
                                        <p className='w-full m-auto text-base  font-normal'>Boost</p>
                                    </div>
                                </div>
                                <div className="flex flex-col jw-full">
                                    <h3 className='text-xl md:text-3xl text-zinc-300 max-w-max my-7'>
                                        How cold email can scale a business
                                    </h3>
                                    <p className="text-sm font-normal text-zinc-400 mb-5">
                                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda voluptatem optio perferendis et consectetur.
                                    </p>
                                </div>
                            </div>
                        
                            
                            <div className="flex flex-col item-center max-w-[36rem]">
                                <div className='relative w-full max-w-[36rem] max-h-[43rem] xl:rounded-[2rem] rounded-[1rem] mb-3 overflow-hidden'>
                                    <div className="cursor-pointer peer z-10 absolute top-8 right-8 rounded-full bg-white text-zinc-800 h-24 w-24 p-3 flex justify-center  hover:bg-pink-600 hover:text-zinc-100 ease-in-out duration-200">
                                        <ArrowRightIcon className="font-bold m-auto p-1 h-10 w-auto -rotate-45" />
                                    </div>
                                    <img className='cursor-pointer relative w-full hover:scale-125 peer-hover:scale-125 hover:rotate-6 peer-hover:rotate-3 ease-in-out duration-[4.5s]' src='/webp/blog-3.webp' alt=''/>
                                </div>
                                <div className="flex flex-row items-center w-full mt-3">
                                    <div className="flex justify-center mr-5 border-solid border-[1px] border-zinc-300/60 text-zinc-300/80 text-center h-12 px-5 rounded-[10px]">
                                        <p className='w-full m-auto text-base  font-normal'>Technology</p>
                                    </div>
                                    <div className="flex justify-center mr-5 border-solid border-[1px] border-zinc-300/60 text-zinc-300/80 text-center h-12 px-5 rounded-[10px]">
                                        <p className='w-full m-auto text-base  font-normal'>Internship</p>
                                    </div>
                                    <div className="flex justify-center mr-5 border-solid border-[1px] border-zinc-300/60 text-zinc-300/80 text-center h-12 px-5 rounded-[10px]">
                                        <p className='w-full m-auto text-base  font-normal'>Boost</p>
                                    </div>
                                </div>
                                <div className="flex flex-col jw-full">
                                    <h3 className='text-xl md:text-3xl text-zinc-300 max-w-max my-7'>
                                        How cold email can scale a business
                                    </h3>
                                    <p className="text-sm font-normal text-zinc-400 mb-5">
                                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda voluptatem optio perferendis et consectetur.
                                    </p>
                                </div>
                            </div>
                        
                            
                            <div className="flex flex-col item-center max-w-[36rem]">
                                <div className='relative w-full max-w-[36rem] max-h-[43rem] xl:rounded-[2rem] rounded-[1rem] mb-3 overflow-hidden'>
                                    <div className="cursor-pointer peer z-10 absolute top-8 right-8 rounded-full bg-white text-zinc-800 h-24 w-24 p-3 flex justify-center  hover:bg-pink-600 hover:text-zinc-100 ease-in-out duration-200">
                                        <ArrowRightIcon className="font-bold m-auto p-1 h-10 w-auto -rotate-45" />
                                    </div>
                                    <img className='cursor-pointer relative w-full hover:scale-125 peer-hover:scale-125 hover:rotate-6 peer-hover:rotate-3 ease-in-out duration-[4.5s]' src='/webp/blog-3.webp' alt=''/>
                                </div>
                                <div className="flex flex-row items-center w-full mt-3">
                                    <div className="flex justify-center mr-5 border-solid border-[1px] border-zinc-300/60 text-zinc-300/80 text-center h-12 px-5 rounded-[10px]">
                                        <p className='w-full m-auto text-base  font-normal'>Technology</p>
                                    </div>
                                    <div className="flex justify-center mr-5 border-solid border-[1px] border-zinc-300/60 text-zinc-300/80 text-center h-12 px-5 rounded-[10px]">
                                        <p className='w-full m-auto text-base  font-normal'>Internship</p>
                                    </div>
                                    <div className="flex justify-center mr-5 border-solid border-[1px] border-zinc-300/60 text-zinc-300/80 text-center h-12 px-5 rounded-[10px]">
                                        <p className='w-full m-auto text-base  font-normal'>Boost</p>
                                    </div>
                                </div>
                                <div className="flex flex-col jw-full">
                                    <h3 className='text-xl md:text-3xl text-zinc-300 max-w-max my-7'>
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