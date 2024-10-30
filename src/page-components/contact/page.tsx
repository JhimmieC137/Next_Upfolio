import { CiMail } from "react-icons/ci";
import { PiPhoneLight } from "react-icons/pi";
import { RxPerson } from "react-icons/rx";

export default function ContactPage() {
    return (
        <main className="w-full relative">
            <div className='max-w-screen m-auto overflow-hidden'>
                <div className='px-2 lg:px-8 min-h-full'>

                    <section id="hero" className="relative h-[45vh] flex flex-col justify-center items-center mx-auto max-w-2xl md:max-w-3xl lg:max-w-6xl pt-32 xl:pt-24 pb-6 md:pb-6 lg:pb-14">
                        <div className="mb-8 md:mb-2 text-center sm:mb-10 lg:mb-3 flex justify-center">
                            <p className="text-md  text-zinc-200 font-light">
                                Home/Contact
                            </p>
                        </div>
                        <div className="text-center">
                            <h1 className="text-6xl md:text-8xl lg:text-[8rem] font-normal tracking-tight text-yellow-300">
                                Contact <span className="lg:text-[9rem] text-cyan-600">Us</span>
                            </h1>
                        </div>
                    </section>


                    <section className="relative mx-auto max-w-2xl md:max-w-[52rem] mt-5 md:mt-20 xl:mt-0 lg:max-w-[1300px] flex flex-col lg:flex-row justify-between gap-10">
                        <div className="w-full px-3 lg:px-0 lg:w-[83%] flex justify-center lg:justify-end">
                            <img className="w-full lg:w-[93%] rounded-[1rem]" src="/jpg/contact.jpg" alt="contact_us"/>
                        </div>
                        <form className="w-full px-2" action="">
                            <div className="w-full flex flex-col justify-between">
                                <div className="w-full">
                                    <div className="w-full mb-5 flex flex-col">
                                        <label className="mb-3 pl-1 text-base md:text-lg text-zinc-400" htmlFor="name">
                                            Name
                                        </label>
                                        <div className="relative w-full">
                                            <RxPerson className='absolute text-zinc-400/60 h-7 w-7 top-4 lg:h-10 lg:w-10 md:top-5 bottom-auto left-4 z-10' />
                                            <input id="name" type="text" placeholder="John" className="relative bg-zinc-950 placeholder:text-zinc-400/60 text-white/90 w-full pl-[3.8rem] md:pl-[4.2rem] pr-4 text-[1.2rem] border border-zinc-600 rounded-[0.85rem] h-16 lg:h-20" required/>
                                        </div>
                                    </div>
                                    <div className="w-full my-5 flex flex-col">
                                        <label className="mb-3 pl-1 text-base md:text-lg text-zinc-400" htmlFor="phone">
                                            Phone
                                        </label>
                                        <div className="relative w-full">
                                            <PiPhoneLight className='absolute text-zinc-400/60 h-7 w-7 lg:h-10 md:w-10 top-5 bottom-auto left-4 z-10' />
                                            <input id="phone" type="text" placeholder="+234 8000000000" className="relative bg-zinc-950 placeholder:text-zinc-400/60 text-white/90 w-full pl-[3.8rem] md:pl-[4.2rem] pr-4 text-[1.2rem] border border-zinc-600 rounded-[0.85rem] h-16 lg:h-20" required/>
                                        </div>
                                    </div>
                                    <div className="w-full my-5 flex flex-col">
                                        <label className="mb-3 pl-1 text-base md:text-lg text-zinc-400" htmlFor="email">
                                            Email
                                        </label>
                                        <div className="relative w-full">
                                            <CiMail className='absolute  text-zinc-400/60 h-7 w-7  lg:h-10 md:w-10 top-5 bottom-auto left-4 z-10' />
                                            <input id="email" type="text" placeholder="example@mail.com" className="relative bg-zinc-950 placeholder:text-zinc-400/60 text-white/90 w-full pl-[3.8rem] md:pl-[4.2rem] pr-4 text-[1.2rem] border border-zinc-600 rounded-[0.85rem] h-16 lg:h-20" required/>
                                        </div>
                                    </div>
                                    <div className="w-full my-5 flex flex-col">
                                        <label className="mb-3 pl-1 text-base lg:text-lg text-zinc-400" htmlFor="message">
                                            Your message
                                        </label>
                                        <textarea id='message' rows={3} className="p-4 bg-zinc-950 placeholder:text-zinc-400/60 text-white/90 text-[1.2rem] border border-zinc-600 rounded-[0.85rem]" placeholder="Please write here ... " required/>
                                    </div>
                                </div>
                                <div className="w-full mt-2 lg:mt-0">
                                    <button type="submit" className="w-full h-14 rounded-[0.5rem] bg-pink-700 hover:bg-pink-600 text-center text-[1.2rem] font-normal">Submit</button>
                                </div>
                            </div>
                        </form>
                    </section>


                    <section className="relative mx-auto max-w-2xl md:max-w-[52rem] mt-10 md:mt-20 xl:mt-20 lg:max-w-[1300px] flex flex-col justify-between ">
                        <div className="w-full my-8  flex flex-col md:flex-row  justify-between gap-10">
                            <div className="w-full md:w-3/6 lg:2/6 flex justify-center items-center gap-3">
                                <img src="/png/star.png" className="w-2/6" alt=""/>
                                <p className="text-sm text-zinc-400">
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur voluptatem, mollitia vel aliquam quia distinctio laborum eius, cumque cum.
                                </p>
                            </div>
                            <div className="w-full md:w-3/6 lg:2/6 flex justify-center items-center gap-3">
                                <img src="/png/star.png" className="w-2/6" alt=""/>
                                <p className="text-sm text-zinc-400">
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Onsequatur voluptatem, mollitia vel aliquam quia distinctio laborum eius, cumque cum.
                                </p>
                            </div>
                        </div>
                        <div className="w-full map-container">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11855.8621423493!2d3.907607665226474!3d7.418770170261981!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1039ed5bb43aa999%3A0x77a78d14caa75a20!2sBodija%20Zone%2C%20Ibadan%20200132%2C%20Oyo!5e0!3m2!1sen!2sng!4v1729108743466!5m2!1sen!2sng" 
                                // width="600" 
                                // height="450" 
                                style={{ border: 0, width: '100%', height: '500px'}} 
                                allowFullScreen={true} 
                                loading="lazy" 
                                referrerPolicy="no-referrer-when-downgrade"
                            />
                        </div>
                    </section>



                </div>
            </div>
        </main>
    )
}