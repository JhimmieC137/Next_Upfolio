import TsParticles from "@/ui-components/TsParticles";
import { AiOutlineRise } from "react-icons/ai";
import { PiChartLineUp } from "react-icons/pi";
import { RiSeedlingFill, RiServiceFill } from "react-icons/ri";

export default function AboutPage() {
    return (
        <main className="w-full relative">
            <div className='absolute -z-10 size-full'>
                <TsParticles />
            </div>
            <div className='max-w-screen m-auto'>
                <div className='px-2 lg:px-8 min-h-full'>

                    <section id="hero" className="relative h-[70vh] flex flex-col justify-center items-center mx-auto max-w-2xl md:max-w-3xl lg:max-w-6xl pt-16 pb-20 md:pt-24 md:pb-20 lg:pb-14">
                        <div className="mb-8 md:mb-2 text-center sm:mb-10 lg:mb-3 flex justify-center">
                            <p className="text-md  text-zinc-200 font-semibold">
                                Home/About
                            </p>
                        </div>
                        <div className="text-center">
                            <h1 className="text-6xl md:text-8xl lg:text-[8rem] font-normal tracking-tight text-yellow-300">
                                We support <br/><span className="lg:text-[9rem] text-cyan-600">Career growth</span>
                            </h1>
                        </div>
                    </section>


                    <section className="relative mx-auto max-w-2xl md:max-w-[52rem] mt-5 md:mt-20 xl:mt-0 lg:max-w-[1300px]">
                        <div className="w-full -mt-20">
                            <img className="rounded-[2.5rem]" src="/jpg/team_meeting.jpg" alt="team_meeting"/>
                        </div>
                    </section>

                    <section id="intro" className="relative mx-auto max-w-2xl md:max-w-[52rem] mt-5 md:mt-20 xl:mt-20 lg:max-w-[1300px]  py-0 md:py-20 lg:py-16">
                        <div className="w-full flex flex-col justify-start">
                            <div className="flex flex-row justify-center md:justify-start ">
                                <div className="text-left max-w-6xl px-5">
                                <h1 className="text-[3rem] md:text-[4.5rem] lg:text-[6rem] text-left xl:text-[6.5rem] 2xl:text-[7.7rem] text-yellow-300 font-normal">
                                    About
                                </h1>
                                <div className="relative w-full flex flex-row md:justify-center -mt-5 text-left md:ml-16">
                                    <img className="absolute left-0 md:left-3 -top-2 md:top-3 lg:top-0 xl:-top-6 w-[20%]" src="/png/sparkles.png" alt="icon"/>`
                                    {/* <img className="ml-10 h-24 w-auto" src="/svg/main-logo.svg" altccccccccccccc="main-logo"/> */}
                                    <h2 className="text-[3rem] md:text-[4.5rem] lg:text-[6rem] xl:text-[6.5rem] 2xl:text-[7.7rem] text-cyan-600 font-normal">
                                        Us
                                    </h2>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-row justify-center lg:justify-end w-full md:mt-16 lg:mt-8">
                            <div className="flex flex-row justify-center w-full lg:w-4/6">
                                <h4 className="text-lg md:text-3xl xl:text-4xl px-3 md:px-4 md:leading-[3rem] xl:leading-[3.5rem] xl:p-0 font-normal text-zinc-300">
                                    Lorem ipsum dolor itaque autem alias quo natus quasi fugiat eaque ipsa quis voluptate nam numquam, fugit aliquid, ratione cum est? Dolorem consequuntur necessitatibus voluptate!
                                </h4>
                            </div>
                        </div>
                        <div className="flex flex-row justify-center lg:justify-end w-full md:mt-16 lg:mt-8">
                            <div className="flex flex-row justify-center w-full lg:w-4/6">
                                <h4 className="text-lg md:text-3xl xl:text-4xl px-3 md:px-4 md:leading-[3rem] xl:leading-[3.5rem] xl:p-0 font-normal text-zinc-300/60">
                                Dolor itaque autem alias quo natus quasi fugiat eaque ipsa quis voluptate nam aliquid, ratione cum est? Dolorem consequuntur necessitatibus voluptate!
                                </h4>
                            </div>
                        </div>
                        {/* <div className="flex flex-row w-full mt-6 md:mt-20">
                            <div className="flex flex-col-reverse md:items-center xl:items-end justify-center lg:flex-row lg:justify-end w-full md:ml-0 xl:ml-20">
                                <div className="flex flex-row h-full items-end justify-center w-full md:w-max  mt-10 lg:mt-0">
                                    <div className="m-auto md:m-0 flex flex-row justify-center w-max">
                                        <img className="h-10 -mt-2" src="/png/star.png" alt="" />
                                        <p className="ml-2 w-full text-lg md:text-2xl text-zinc-300 font-normal " >
                                            100+ Community Members
                                            <span><img className="px-2 hidden md:inline-block h-auto w-20 -rotate-[18deg] -mt-8" src="/png/star-arrow.png" /></span>
                                        </p>
                                    </div>
                                </div>
                                <div className='relative md:w-[95%] lg:w-[90%] xl:w-[60%] 2xl:w-[52%]'>
                                    <img className='w-[12%] lg:w-[13%] xl:w-[15%] absolute -z-10 xl:-top-8 md:-top-5 lg:-top-5 -top-2 -left-3  lg:-left-5 xl:-left-7 2xl:-left-4 md:-left-5 rotate-12' src='/png/pic_frame_1.png'/>
                                    <img className='w-[15%] lg:w-[13%] xl:w-[18%] absolute -bottom-2 md:-bottom-10 lg:-bottom-5 -right-2 md:-right-12 lg:-right-6 xl:-right-14 -rotate-180' src='/png/pic_frame_1.png'/>
                                    <img className="xl:m-0 2xl:ml-4 rounded-[35px] max-w-full border-[5px] border-white/10" src="/png/community-collage.png" alt="" />
                                </div>
                            </div>
                        </div> */}
                        </div>
                    </section>

                    <section className="relative mx-auto max-w-2xl md:max-w-[52rem] mt-5 md:mt-20 xl:mt-20 lg:max-w-[1300px]  py-0 md:py-20 lg:py-16">
                        <div className="w-5/6 p-2 m-auto">
                            <div className="w-full flex flex-row gap-4 justify-around m-auto">
                                <div className="text-center text-zinc-200">
                                    <h2 className="font-normal text-[2.8rem]">23+</h2>
                                    <p className="text-base  mt-1">
                                        Community members
                                    </p>
                                </div>
                                <div className="text-center text-zinc-200">
                                    <h2 className="font-normal text-[2.8rem]">23+</h2>
                                    <p className="text-base  mt-1">
                                        Community members
                                    </p>
                                </div>
                                <div className="text-center text-zinc-200">
                                    <h2 className="font-normal text-[2.8rem]">23+</h2>
                                    <p className="text-base  mt-1">
                                        Community members
                                    </p>
                                </div>
                                <div className="text-center text-zinc-200">
                                    <h2 className="font-normal text-[2.8rem]">23+</h2>
                                    <p className="text-base  mt-1">
                                        Community members
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="relative mx-auto max-w-2xl md:max-w-[52rem] lg:max-w-[1300px] mt-36 md:mt-24 lg:py-16">
                        <div className="w-full flex flex-col justify-start">
                            <div className="flex flex-row justify-center md:justify-start ">
                                <div className="text-left md:max-w-6xl px-5">
                                    <h1 className="text-center md:text-left text-[3rem] md:text-[4.5rem] lg:text-[6rem] xl:text-[6.5rem] 2xl:text-[7.7rem] text-yellow-300">
                                        Our
                                    </h1>
                                    <div className="relative w-full flex flex-row justify-end ml-0 md:ml-10 xl:ml-16 -mt-5 md:-mt-7">
                                        <img className="absolute -left-7 -top-6 md:-top-5 lg:-top-5 w-[29%]" src="/png/meteor.png" alt="icon"/>
                                        {/* <img className="ml-10 h-24 w-auto" src="/svg/main-logo.svg" altccccccccccccc="main-logo"/> */}
                                        <h2 className="text-center md:text-left text-[3rem] md:text-[4.5rem] lg:text-[6rem] xl:text-[6.5rem] 2xl:text-[7.7rem] text-cyan-600 font-normal">
                                            Values
                                        </h2>
                                    </div>
                                </div>
                            </div>
                            <div className="w-5/6 m-auto mt-7 grid grid-flow-row grid-cols-3 gap-7">
                                <div className="bg-zinc-800/40 text-zinc-200 rounded-2xl p-7">
                                    <PiChartLineUp className="h-12 w-12 text-cyan-600" />
                                    <h2 className="text-white font-light text-[2.3rem] my-5">
                                        Something
                                    </h2>
                                    <p className="">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. voluptate distinctio autem et beatae.
                                    </p>
                                </div>
                                <div className="bg-zinc-800/40 text-zinc-200 rounded-2xl p-7">
                                    <RiServiceFill className="h-12 w-12 text-pink-700" />
                                    <h2 className="text-white font-light text-[2.3rem] my-5">
                                        Something
                                    </h2>
                                    <p className="">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. voluptate distinctio autem et beatae.
                                    </p>
                                </div>
                                <div className="bg-zinc-800/40 text-zinc-200 rounded-2xl p-7">
                                    <RiSeedlingFill className="h-12 w-12 text-yellow-400" />
                                    <h2 className="text-white font-light text-[2.3rem] my-5">
                                        Something
                                    </h2>
                                    <p className="">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. voluptate distinctio autem et beatae.
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