export default function JOCPage() {
    return (
        <main className="w-full relative">
            <div className='max-w-screen m-auto overflow-hidden'>
                <div className='px-2 lg:px-8 min-h-full'>

                    <section id="hero" className="relative h-[70vh] flex flex-col justify-center items-center mx-auto max-w-2xl md:max-w-3xl lg:max-w-6xl pt-16 pb-20 md:pt-24 md:pb-20 lg:pb-14">
                        <div className="mb-8 md:mb-2 text-center sm:mb-10 lg:mb-3 flex justify-center">
                            <p className="text-md  text-zinc-200 font-light">
                                Home/Join-Our-Community
                            </p>
                        </div>
                        <div className="text-center">
                            <h1 className="text-6xl md:text-8xl lg:text-[8rem] font-normal tracking-tight text-yellow-300">
                                Join Our <br/><span className="lg:text-[9rem] text-cyan-600">Community</span>
                            </h1>
                        </div>
                    </section>


                    <section className="relative mx-auto max-w-2xl md:max-w-[52rem] mt-5 md:mt-20 xl:mt-0 lg:max-w-[1300px]">
                        <div className="w-full -mt-20">
                            <img className="rounded-[2.5rem]" src="/jpg/hands_together.jpg" alt="team_meeting"/>
                        </div>
                    </section>


                    <section id="intro" className="relative mx-auto max-w-2xl md:max-w-[52rem] mt-5 md:mt-20 xl:mt-20 lg:max-w-[1300px]  py-0 md:py-20 lg:py-16">
                        {/* <div className="flex flex-row justify-center md:justify-start ">
                            <div className="text-left md:max-w-6xl px-5">
                                <h1 className="text-center md:text-left text-[3rem] md:text-[4.5rem] lg:text-[6rem] xl:text-[6.5rem] 2xl:text-[7.7rem] text-yellow-300">
                                    Benefits Of
                                </h1>
                                <div className="relative w-full flex flex-row justify-start ml-0 md:ml-10 xl:ml-16 -mt-5 md:-mt-7">
                                    <img className="absolute -left-48 -top-6 md:-top-5 lg:-top-5 w-[29%]" src="/png/meteor.png" alt="icon"/>
                                    <h2 className="text-center md:text-left text-[3rem] md:text-[4.5rem] lg:text-[6rem] xl:text-[6.5rem] 2xl:text-[7.7rem] text-cyan-600 font-normal">
                                        Being A Member
                                    </h2>
                                </div>
                            </div>
                        </div> */}
                        <div className="w-full">
                            
                            <div className="flex flex-row justify-between items-center w-full my-10 md:my-24 px-5">
                                <div className=" px-3 md:px-4 md:p-3 w-[45%]">
                                    <h2 className="font-light text-zinc-100 text-[3.2rem] leading-tight my-10 pr-3">
                                        We celebrate birthdays
                                    </h2>
                                    <p className="text-lg font-normal text-zinc-400">
                                        Lorem ipsum dolor itaque autem alias quo natus quasi fugiat eaque ipsa quis voluptate nam numquam, fugit aliquid, ratione cum est? Dolorem consequuntur necessitatibus voluptate, ipsa quis voluptate nam numquam!
                                    </p>
                                </div>
                                <img src="/jpg/birthday.jpg" alt="" className="rounded-2xl w-2/5"/>
                            </div>
                            
                            
                            <div className="flex flex-row-reverse justify-between items-center w-full md:my-24 px-5">
                                <div className=" px-3 md:px-4 md:p-3 w-[42%]">
                                    <h2 className="font-light text-zinc-100 text-[3.2rem] leading-tight my-10 pr-3">
                                        We celebrate birthdays
                                    </h2>
                                    <p className="text-lg font-normal text-zinc-400">
                                        Lorem ipsum dolor itaque autem alias quo natus quasi fugiat eaque ipsa quis voluptate nam numquam, fugit aliquid, ratione cum est? Dolorem consequuntur necessitatibus voluptate, ipsa quis voluptate nam numquam!
                                    </p>
                                </div>
                                <img src="/jpg/birthday.jpg" alt="" className="rounded-2xl w-2/5"/>
                            </div>
                            
                            
                            <div className="flex flex-row justify-between items-center w-full md:my-24 px-5">
                                <div className=" px-3 md:px-4 md:p-3 w-[45%]">
                                    <h2 className="font-light text-zinc-100 text-[3.2rem] leading-tight my-10 pr-3">
                                        We celebrate birthdays
                                    </h2>
                                    <p className="text-lg font-normal text-zinc-400">
                                        Lorem ipsum dolor itaque autem alias quo natus quasi fugiat eaque ipsa quis voluptate nam numquam, fugit aliquid, ratione cum est? Dolorem consequuntur necessitatibus voluptate, ipsa quis voluptate nam numquam!
                                    </p>
                                </div>
                                <img src="/jpg/birthday.jpg" alt="" className="rounded-2xl w-2/5"/>
                            </div>

                        </div>
                    </section>


                    <section id="intro" className="relative mx-auto max-w-2xl md:max-w-[52rem] mt-5 md:mt-20 xl:mt-20 lg:max-w-[1300px]  py-0 md:py-20 lg:py-16">
                        <div className="w-[95%]">

                        </div>
                    </section>



                </div>
            </div>
        </main>
    )
}