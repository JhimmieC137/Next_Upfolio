import { blogData } from "@/contexts/blog-context"
import FadeIn from "@/ui-components/FadeIn"
import { ArrowRightIcon } from "@heroicons/react/24/outline"
import Link from "next/link"
import { LuDot } from "react-icons/lu"

export default function BlogsPage() {
    return (
        <main className="w-full relative">
            <div className='max-w-screen m-auto overflow-hidden'>
                <div className='px-2 lg:px-8 min-h-full'>

                    <section id="hero" className="relative h-[60vh] flex flex-col justify-center items-center mx-auto max-w-2xl md:max-w-3xl lg:max-w-6xl pt-32 xl:pt-24 pb-18 md:pb-6 lg:pb-14 ">
                        <FadeIn>
                            <div className="mb-8 md:mb-2 text-center sm:mb-10 lg:mb-3 flex justify-center">
                                <p className="text-md  text-zinc-200 font-light">
                                    Home / Blogs
                                </p>
                            </div>
                        </FadeIn>
                        <FadeIn>
                            <div className="text-center">
                                <h1 className="text-5xl md:text-8xl lg:text-8xl lg:text-[8rem] font-normal tracking-tight text-yellow-300">
                                    Explore <br/><span className="lg:text-[9rem] text-cyan-600">Our Articles</span>
                                </h1>
                            </div>
                        </FadeIn>
                    </section>


                    <section className="relative mx-auto max-w-2xl md:max-w-[52rem] mt-5 md:mt-20 lg:max-w-[1300px]">
                        <FadeIn>
                            <div className="w-full mt-16 md:mt-0 lg:-mt-20">
                                <img className="rounded-[1rem] lg:rounded-[2.5rem]" src="/jpg/blog.jpg" alt="team_meeting"/>
                            </div>
                        </FadeIn>
                    </section>


                    <section className="relative mx-auto max-w-2xl md:max-w-[52rem] lg:max-w-[1300px] mt-20 lg:mt-6 lg:py-16">
                        
                        <div className="w-full flex flex-col justify-start">
                            <div className="flex flex-row justify-center md:justify-start ">
                                <div className="text-left md:max-w-6xl px-5">
                                    <FadeIn>
                                        <h1 className="text-center md:text-left text-[3rem] md:text-[4.5rem] lg:text-[6rem] xl:text-[6.5rem] 2xl:text-[7.7rem] text-yellow-300">
                                            Recent
                                        </h1>
                                    </FadeIn>
                                    <FadeIn>
                                        <div className="relative w-full flex flex-row justify-end ml-0 md:ml-10 xl:ml-16 -mt-5 md:-mt-7">
                                            <img className="absolute -left-7 top-2 md:-top-1 lg:-top-5 w-[35%] lg:w-[29%]" src="/png/meteor.png" alt="icon"/>
                                            {/* <img className="ml-10 h-24 w-auto" src="/svg/main-logo.svg" altccccccccccccc="main-logo"/> */}
                                            <h2 className="text-center md:text-left text-[3rem] md:text-[4.5rem] lg:text-[6rem] xl:text-[6.5rem] 2xl:text-[7.7rem] text-cyan-600 font-normal">
                                                Blogs
                                            </h2>
                                        </div>
                                    </FadeIn>
                                </div>
                            </div>
                        </div>
                        
                        <div className="grid grid-flow-row grid-cols-1 md:grid-cols-2 mt-20 px-3 lg:px-0 gap-7">

                            {
                                blogData.map(el => {
                                    return (
                                        <FadeIn key={el.id}>
                                            <Link href={el.link} className="flex flex-col items-center w-full mb-16">
                                                <div className="flex flex-col item-center max-w-[36rem]">
                                                    <div className='relative w-full max-w-[43rem] max-h-[23rem] md:max-h-[13.8rem] lg:max-h-[23rem] xl:rounded-[2rem] rounded-[0.85rem] mb-3 overflow-hidden'>
                                                        <div className="cursor-pointer z-10 absolute top-4 right-4 lg:top-8 lg:right-8 rounded-full bg-white text-zinc-800 h-16 w-16 lg:h-24 lg:w-24 p-3 flex justify-center  hover:bg-pink-600 hover:text-zinc-100 ease-in-out duration-200">
                                                            <ArrowRightIcon className="font-bold m-auto p-1 h-10 w-auto -rotate-45" />
                                                        </div>
                                                        <img className='cursor-pointer relative w-full' src={`/upfolio_blogs/${el.img}`} alt=''/>
                                                    </div>
                                                    <div className="flex flex-col w-full">
                                                        <h3 className='text-xl lg:text-3xl text-zinc-300 max-w-max my-4 lg:my-7'>
                                                            {el.title}
                                                        </h3>
                                                    </div>
                                                </div>
                                                <div className="w-full lg:w-[90%] flex justify-start items-center">
                                                    <div className="flex justify-center mr-3 lg:mr-6 border-solid border-[1px] border-zinc-300/60 text-zinc-300/80 text-center h-8 px-4 rounded-[15px] lg:rounded-[20px]">
                                                        {
                                                            el.tags.map((tag, index) => (
                                                                <p key={index} className='w-full m-auto text-sm  font-normal'>{tag}</p>
                                                            ))
                                                        }
                                                    </div>
                                                    <h2 className="text-sm lg:text-lg font-normal text-zinc-400 mr-1">
                                                        {el.date}
                                                    </h2>
                                                    <h2 className="text-sm lg:text-lg font-normal text-zinc-400 mr-1">
                                                        <LuDot className="h-7 w-auto" />
                                                    </h2>
                                                    <h2 className="text-sm lg:text-lg font-normal text-zinc-400 ">
                                                        {el.mins} mins read
                                                    </h2>
                                                </div>
                                            </Link>
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