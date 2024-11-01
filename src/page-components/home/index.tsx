'use client'
import { ProgressBar } from '@nadfri/react-scroll-progress-bar';
import { ArrowRightIcon, ChevronDownIcon, UserGroupIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { FaArrowRight, FaArrowRightLong, FaPeopleGroup, FaPeopleRoof } from "react-icons/fa6";
import { PiStarFourFill } from 'react-icons/pi';
import { MdOutlineJoinInner } from 'react-icons/md';
import { VscGitPullRequestCreate } from 'react-icons/vsc';
import { CgFilters } from 'react-icons/cg';
import { HiArrowNarrowRight, HiPuzzle } from 'react-icons/hi';
import { BsPersonRaisedHand } from 'react-icons/bs';
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import { BiPlusCircle } from 'react-icons/bi';
import { AnimatePresence, easeOut, motion } from 'framer-motion';
import * as Accordion from '@radix-ui/react-accordion';
import AccordionItem from '@/ui-components/Accordion/Item';
import AccordionTrigger from '@/ui-components/Accordion/Trigger';
import AccordionContent from '@/ui-components/Accordion/Content';
import { FAQs } from '@/contexts/faq-context';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { TestimonialContent } from '@/contexts/testimonial-context';
import BlitzImage from '@/ui-components/BlitzImage';
import { blogData } from '@/contexts/blog-context';

export default function HomePage() {
  const refToServices = useRef<HTMLElement | null>(null);

  return (
    <main className="relative w-full">
      {/******* Hero Section *******/}
      
      <div className='w-full m-auto'>
        <div className='px-2 lg:px-8 min-h-full'>
          
          <section 
            id="hero" 
            className="h-screen flex flex-col justify-center items-center mx-auto max-w-2xl md:max-w-3xl lg:max-w-6xl pt-16 pb-20 md:pt-20 md:pb-24 lg:pb-24" >
            {/* <div className="hidden sm:mb-8 lg:mb-1 sm:flex sm:justify-center">
              <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-zinc-300 ring-1 ring-zinc-300/80 hover:ring-zinc-300 ease-in-out duration-200">
                Announcing our next round of announcements.{' '}
                <a href="#" className="font-semibold text-yellow-300">
                  <span className="absolute inset-0" aria-hidden="true" />
                  Read more <span aria-hidden="true">&rarr;</span>
                </a>
              </div>
            </div> */}
            <div className="mb-5 md:mb-2 text-center sm:mb-8 lg:mb-1 flex justify-center">
              <p className="text-md  text-zinc-200 font-semibold">
                DISCOVER YOUR PATH
              </p>
            </div>
            <div className="text-center">
              <h1 className="text-6xl md:text-8xl lg:text-[8rem] font-normal tracking-tight text-yellow-300">
                Elevate Your <span className="lg:text-[9rem] text-cyan-600">Career Journey</span>
              </h1>
              <p className="m-auto mt-6 text-md md:text-lg leading-6 md:leading-8 md:max-w-md lg:max-w-xl text-zinc-200">
                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt.
              </p>
              <div className="mt-10 flex flex-col items-center justify-center gap-x-6">
                <div 
                  onClick={() => {document.getElementById("intro")?.scrollIntoView({behavior: 'smooth'}); console.log("clicked")}} 
                  className='hover:cursor-pointer'  
                >
                  <div 
                    className='h-14 w-8 rounded-2xl border-2 border-white'
                  >
                    <div className='elementor-button-text m-auto' />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* <div
            className="absolute inset-x-0 top-0 -z-10 transform-gpu overflow-hidden blur-3xl"
            aria-hidden="true"
          >
            <divs
              className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#4690e4] to-[#77afee] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
            />
          </div> */}

          {/******* Hero Section Ends *******/}


          {/******* Introduction Section *******/}


          <section id="intro" className="relative mx-auto max-w-2xl md:max-w-[52rem] mt-5 md:mt-20 xl:mt-0 lg:max-w-[1300px]  py-0 md:py-20 lg:py-16">
            <div className="w-full flex flex-col justify-start">
              <div className="flex flex-row justify-center md:justify-start ">
                <div className="text-left max-w-6xl px-5">
                  <h1 className="text-[3rem] md:text-[4.5rem] lg:text-[6rem] text-left xl:text-[6.5rem] 2xl:text-[7.7rem] text-yellow-300 font-normal">
                    We Are
                  </h1>
                  <div className="relative w-full flex flex-row md:justify-end -mt-5 text-left md:ml-16">
                    <img className="absolute left-0 md:left-0 -top-2 md:top-3 lg:top-0 xl:-top-6 w-[20%]" src="/png/sparkles.png" alt="icon"/>`
                    {/* <img className="ml-10 h-24 w-auto" src="/svg/main-logo.svg" altccccccccccccc="main-logo"/> */}
                    <h2 className="ml-10 md:ml-2 text-[3rem] md:text-[4.5rem] lg:text-[6rem] xl:text-[6.5rem] 2xl:text-[7.7rem] text-cyan-600 font-normal">
                      Upfolio
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
              <div className="flex flex-row w-full mt-6 md:mt-20">
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
              </div>
            </div>
          </section>

          {/******* Introduction Section Ends *******/}

          {/******* Services Section *******/}

          <section ref={refToServices} id="intro" className="relative mx-auto max-w-2xl md:max-w-[52rem] lg:max-w-[1300px] mt-36 md:mt-24 lg:py-16">
            <div className="w-full flex flex-col justify-start">
              <div className="flex flex-row justify-center md:justify-start ">
                <div className="text-left md:max-w-6xl px-5">
                  <h1 className="text-center md:text-left text-[3rem] md:text-[4.5rem] lg:text-[6rem] xl:text-[6.5rem] 2xl:text-[7.7rem] text-yellow-300">
                    Grow With
                  </h1>
                  <div className="relative w-full flex flex-row justify-end ml-0 md:ml-10 xl:ml-16 -mt-5 md:-mt-7">
                    <img className="absolute -left-7 -top-6 md:-top-5 lg:-top-5 w-[19%]" src="/png/meteor.png" alt="icon"/>
                    {/* <img className="ml-10 h-24 w-auto" src="/svg/main-logo.svg" altccccccccccccc="main-logo"/> */}
                    <h2 className="text-center md:text-left text-[3rem] md:text-[4.5rem] lg:text-[6rem] xl:text-[6.5rem] 2xl:text-[7.7rem] text-cyan-600 font-normal">
                      Our Services
                    </h2>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col justify-start items-start w-full xl:mt-44 md:mt-20 mt-10">
                
                {/* -- Service 1 -- */} 
                <div className="flex flex-row h-full justify-between w-full py-7">
                  <div className="flex flex-row md:items-start self-center items-center h-full md:h-max max-w-10 md:max-w-40 w-full">
                    <h1 className="xl:text-[6.3rem] md:text-[4rem] text-[1.8rem] md:pl-0 xl:pl-8 opacity-20 text-zinc-300 font-normal">01</h1>
                  </div>
                  <div className="flex justify-start w-[70%] md:w-full pr-5 md:pr-0 md:pl-0 xl:pl-20 peer">
                    <div className="flex flex-col justify-start">
                      <h4 className="max-w-max text-[1.5rem] xl:text-[3.5rem] md:text-[2.6rem] ml-0 text-zinc-300 hover:text-pink-400 ease-in-out duration-500 cursor-pointer">
                        Career Growth Projects
                      </h4>
                      <p className="text-sm md:text-md xl:text-lg mt-1 md:mt-5 text-zinc-400 font-normal max-w-2xl">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum sequi vel, pariatur recusandae expedita repudiandae consequatur eos temporibus amet dolorem
                      </p>
                    </div>
                  </div>
                  <div className="md:ml-5 max-w-max xl:ml-0 h-full flex justify-center opacity-20 text-zinc-400 peer-has-[h4:hover]:text-pink-400  item-center md:max-w-40 peer-has-[h4:hover]:-rotate-45 peer-has-[h4:hover]:opacity-100 ease-in-out duration-500">
                    <ArrowRightIcon className="m-auto h-10 md:h-10 xl:h-16 w-auto" />
                  </div>
                </div>
                {/* -- End of Service 1 -- */}

                {/* -- Service 2 -- */}
                <div className="flex flex-row h-full justify-between w-full py-7">
                  <div className="flex flex-row md:items-start self-center items-center h-full md:h-max max-w-10 md:max-w-40 w-full">
                    <h1 className="xl:text-[6.3rem] md:text-[4rem] text-[1.8rem] md:pl-0 xl:pl-8 opacity-20 text-zinc-300 font-normal">02</h1>
                  </div>
                  <div className="flex justify-start w-[70%] md:w-full pr-5 md:pr-0 md:pl-0 xl:pl-20 peer">
                    <div className="flex flex-col justify-start">
                      <h4 className="max-w-max text-[1.5rem] xl:text-[3.5rem] md:text-[2.6rem] ml-0 text-zinc-300 hover:text-pink-400 ease-in-out duration-500 cursor-pointer">
                        Programs &<br/> Information Sessions
                      </h4>
                      <p className="text-sm md:text-md xl:text-lg mt-1 md:mt-5 text-zinc-400 font-normal max-w-2xl">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum sequi vel, pariatur recusandae expedita repudiandae consequatur eos temporibus amet dolorem
                      </p>
                    </div>
                  </div>
                  <div className="md:ml-5 max-w-max xl:ml-0 h-full flex justify-center opacity-20 text-zinc-400 peer-has-[h4:hover]:text-pink-400  item-center md:max-w-40 peer-has-[h4:hover]:-rotate-45 peer-has-[h4:hover]:opacity-100 ease-in-out duration-500">
                    <ArrowRightIcon className="m-auto h-10 md:h-10 xl:h-16 w-auto" />
                  </div>
                </div>
                {/* -- End of Service 2 -- */}

                {/* -- Service 3 -- */}
                <div className="flex flex-row h-full justify-between w-full py-7">
                  <div className="flex flex-row md:items-start self-center items-center h-full md:h-max max-w-10 md:max-w-40 w-full">
                    <h1 className="xl:text-[6.3rem] md:text-[4rem] text-[1.8rem] md:pl-0 xl:pl-8 opacity-20 text-zinc-300 font-normal">03</h1>
                  </div>
                  <div className="flex justify-start w-[70%] md:w-full pr-5 md:pr-0 md:pl-0 xl:pl-20 peer">
                    <div className="flex flex-col justify-start">
                      <h4 className="max-w-max text-[1.5rem] xl:text-[3.5rem] md:text-[2.6rem] ml-0 text-zinc-300 hover:text-pink-400 ease-in-out duration-500 cursor-pointer">
                        Blogs & Articles
                      </h4>
                      <p className="text-sm md:text-md xl:text-lg mt-1 md:mt-5 text-zinc-400 font-normal max-w-2xl">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum sequi vel, pariatur recusandae expedita repudiandae consequatur eos temporibus amet dolorem
                      </p>
                    </div>
                  </div>
                  <div className="md:ml-5 max-w-max xl:ml-0 h-full flex justify-center opacity-20 text-zinc-400 peer-has-[h4:hover]:text-pink-400  item-center md:max-w-40 peer-has-[h4:hover]:-rotate-45 peer-has-[h4:hover]:opacity-100 ease-in-out duration-500">
                    <ArrowRightIcon className="m-auto h-10 md:h-10 xl:h-16 w-auto" />
                  </div>
                </div>
                {/* End of Service 3 -- */}

              </div>
            </div>
          </section>

          {/******* Services Section Ends *******/}


          {/******* Getting Started *******/}

          <section className="relative mx-auto max-w-2xl md:max-w-[52rem] lg:max-w-[1300px] mt-36 md:mt-24 lg:mt-24">
            <div className="w-full flex flex-col justify-start">
              <div className="flex flex-row justify-center md:justify-start ">
                <div className="text-left max-w-6xl px-5">
                  <h1 className="text-center md:text-left text-[3rem] md:text-[4.5rem] lg:text-[6rem] xl:text-[6.5rem] 2xl:text-[7.7rem] text-yellow-300 font-normal">
                    Getting
                  </h1>
                  <div className="relative w-full flex flex-row justify-end ml-0 md:ml-16 -mt-5">
                    <img className="absolute -left-10 md:-left-10 xl:-left-24 xl:-top-10 w-[35%] -rotate-[40deg]" src="/png/checklist.png" alt="icon"/>
                    {/* <img className="ml-10 h-24 w-auto" src="/svg/main-logo.svg" altccccccccccccc="main-logo"/> */}
                    <h2 className="ml-3 text-center md:text-left text-[3rem] md:text-[4.5rem] lg:text-[6rem] xl:text-[6.5rem] 2xl:text-[7.7rem] text-cyan-600 font-normal">
                      Started
                    </h2>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-center items-center w-full max-w-7xl mt-0 md:mt-12 px-3">
                
                
                {/*  Item 1  */}

                <div className="my-10 h-full gap-x-6 flex flex-col md:flex-row justify-between items-center w-full lg:max-w-[77rem]">
                  <div className="w-full max-w-[32rem] text-left mr-0 md:mr-7">
                    <div className="flex flex-col justify-start">
                      <div className="max-h-[5rem] max-w-[81px] lg:max-h-32 lg:max-w-[125px] p-[1rem] lg:p-7 rounded-[50%] border-2 border-zinc-400">
                        <FaPeopleGroup className="p-2 h-12 lg:h-16 w-auto text-zinc-400" />
                      </div>
                      <h2 className="text-xl lg:text-3xl max-w-xs my-5 text-zinc-300 font-normal">
                        Join Our Community On Social Media
                      </h2>
                      <div className="flex flex-col max-w-3xl">
                        <div className="my-1 flex flex-row">
                          <PiStarFourFill className='h-7 p-1 w-auto text-cyan-600' />
                          <p className="text-zinc-400 ml-5 text-sm md:text-md font-normal">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                        <div className="my-1 flex flex-row">
                          <PiStarFourFill className='h-7 p-1 w-auto text-cyan-600' />
                          <p className="text-zinc-400 ml-5 text-sm md:text-md font-normal">Necessitatibus maiores temporibus error culpa rerum totam</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <ScrollProgressBar 
                    barHeight="300px" 
                    barWidth="50px" 
                    parentRef={refToIntro}
                  /> */}
                  {/* <div className="relative flex justify-center item-center mx-5 h-5 w-full rotate-90">
                    <ProgressBar 
                      color1 = "white" 
                      color2 = "black"
                      height   = "10px"
                      position = "fixed" 
                    />
                  </div> */}
                  <div className="w-full max-w-[32rem] text-left ml-0 mt-10 md:mt-0 md:ml-7">
                    <div className='flex justify-center md:justify-end'>
                      <BlitzImage
                        child={
                          <div className={`w-full max-w-full`}>
                            <img className="rounded-bl-[32px] rounded-tr-[32px] w-full border-[3px] border-white/5" src="/jpg/community-one.jpg"/>
                          </div>
                        }
                      />
                    </div>
                  </div>
                </div>
                
                {/*  Item 1 ends */}
                
                
                {/*  Item 2  */}
                
                <div className="my-10 h-full gap-x-6 flex  flex-col md:flex-row-reverse justify-between items-center w-full lg:max-w-[77rem]">
                  <div className="w-full flex justify-start md:justify-end max-w-[32rem] text-left ml-0 md:ml-7">
                    <div className="flex flex-col justify-center w-full">
                      <div className="max-h-[5rem] max-w-[81px] lg:max-h-32 lg:max-w-[125px] p-[1rem] lg:p-7 rounded-[50%] border-2 border-zinc-400">
                        <VscGitPullRequestCreate className="p-2 h-12 lg:h-16  w-auto text-zinc-400" />
                      </div>
                      <h2 className="text-xl lg:text-3xl max-w-xs my-5 text-zinc-300 font-normal">
                        Sign Up For Upcoming Programs
                      </h2>
                      <div className="flex flex-col max-w-3xl">
                        <div className="my-1 flex flex-row">
                          <PiStarFourFill className='h-7 p-1 w-auto text-cyan-600' />
                          <p className="text-zinc-400 ml-5 text-sm md:text-md font-normal">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt</p>
                        </div>
                        <div className="my-1 flex flex-row">
                          <PiStarFourFill className='h-7 p-1 w-auto text-cyan-600' />
                          <p className="text-zinc-400 ml-5 text-sm md:text-md font-normal">Necessitatibus maiores temporibus error culpa rerum totam architecto facilis </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <ScrollProgressBar 
                    barHeight="100%" 
                    barWidth="50px" 
                  /> */}
                  {/* <div className="relative flex justify-center item-center mx-5 h-5 w-full rotate-90">
                    <ProgressBar 
                      color1 = "white" 
                      color2 = "black"
                      height   = "10px"
                      position = "fixed" 
                    />
                  </div> */}
                  <div className="w-full max-w-[32rem] text-left mr-0 mt-10 md:mt-0 md:mr-7">
                    <div className='flex justify-center md:justify-start '>
                      <BlitzImage
                        child={
                          <div className={`w-full max-w-full`}>
                            <img className="rounded-bl-[32px] rounded-tr-[32px] w-full border-[3px] border-white/5" src="/png/programs.png"/>
                          </div>
                        }
                      />
                    </div>
                  </div>
                </div>
                
                {/*  Item 2 ends */}


                {/*  Item 3  */}

                <div className="my-10 h-full gap-x-6 flex  flex-col md:flex-row justify-between items-center w-full lg:max-w-[77rem]">
                  <div className="w-full max-w-[32rem] text-left mr-0 md:mr-7">
                    <div className="flex flex-col justify-start">
                      <div className="max-h-[5rem] max-w-[81px] lg:max-h-32 lg:max-w-[125px] p-[1rem] lg:p-7 rounded-[50%] border-2 border-zinc-400">
                        <CgFilters className="p-2 h-12 lg:h-16 w-auto text-zinc-400" />
                      </div>
                      <h2 className="text-xl lg:text-3xl max-w-xs my-5 text-zinc-300 font-normal">
                        Collaborate With Us on Annual Projects
                      </h2>
                      <div className="flex flex-col max-w-3xl">
                        <div className="my-1 flex flex-row">
                          <PiStarFourFill className='h-7 p-1 w-auto text-cyan-600' />
                          <p className="text-zinc-400 ml-5 text-sm md:text-md font-normal">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                        <div className="my-1 flex flex-row">
                          <PiStarFourFill className='h-7 p-1 w-auto text-cyan-600' />
                          <p className="text-zinc-400 ml-5 text-sm md:text-md font-normal">Necessitatibus maiores temporibus error culpa rerum totam</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <ScrollProgressBar 
                    barHeight="100%" 
                    barWidth="50px" 
                  /> */}
                  {/* <div className="relative flex justify-center item-center mx-5 h-5 w-full rotate-90">
                    <ProgressBar 
                      color1 = "white" 
                      color2 = "black"
                      height   = "10px"
                      position = "fixed" 
                    />
                  </div> */}
                  <div className="w-full max-w-[32rem] text-left ml-0 mt-10 md:mt-0 md:ml-7">
                    <div className='flex justify-center md:justify-end'>
                      <BlitzImage
                        child={
                          <div className={`w-full max-w-full`}>
                            <img className="rounded-bl-[32px] rounded-tr-[32px] w-full border-[3px] border-white/5" src="/jpg/project.jpg"/>
                          </div>
                        }
                      />
                    </div>
                  </div>
                </div>
                
                {/*  Item 3 ends */}
                            

                {/*  Item 4  */}
                
                <div className="my-10 h-full gap-x-6 flex flex-col md:flex-row-reverse justify-between items-center w-full lg:max-w-[77rem]">
                  <div className="w-full flex justify-end max-w-[32rem] text-left ml-0 md:ml-7">
                    <div className="flex flex-col justify-center">
                      <div className="max-h-[5rem] max-w-[81px] lg:max-h-32 lg:max-w-[125px] p-[1rem] lg:p-7 rounded-[50%] border-2 border-zinc-400">
                        <BsPersonRaisedHand className="p-2 h-12 lg:h-16 w-auto text-zinc-400" />
                      </div>
                      <h2 className="text-xl lg:text-3xl max-w-xs my-5 text-zinc-300 font-normal">
                        Volunteer With Us
                      </h2>
                      <div className="flex flex-col max-w-3xl">
                        <div className="my-1 flex flex-row">
                          <PiStarFourFill className='h-7 p-1 w-auto text-cyan-600' />
                          <p className="text-zinc-400 ml-5 text-sm md:text-md font-normal">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt</p>
                        </div>
                        <div className="my-1 flex flex-row">
                          <PiStarFourFill className='h-7 p-1 w-auto text-cyan-600' />
                          <p className="text-zinc-400 ml-5 text-sm md:text-md font-normal">Necessitatibus maiores temporibus error culpa rerum totam architecto facilis </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <div className="relative flex justify-center item-center mx-5 h-5 w-full rotate-90">
                    <ProgressBar 
                      color1 = "white" 
                      color2 = "black"
                      height   = "10px"
                      position = "fixed" 
                    />
                  </div> */}
                  <div className="w-full max-w-[35rem] text-left mr-0 mt-10 md:mt-0 md:mr-7">
                    <div className='flex md:justify-start justify-center'>
                      <BlitzImage
                        child={
                          <div className={`w-full max-w-full`}>
                            <img className="rounded-bl-[32px] rounded-tr-[32px] w-full border-[3px] border-white/5" src="/jpg/volunteer.jpg"/>
                          </div>
                        }
                      />
                    </div>
                  </div>
                </div>
                
                {/*  Item 4 ends */}
              </div>
            </div>
          </section>

          {/******* Getting Started Section Ends *******/}

          {/******* Testimonial Section *******/}

          <section className="relative mx-auto max-w-2xl md:max-w-[52rem] lg:max-w-[1300px] mt-32 md:mt-24 ">
            <div className="w-full flex flex-col justify-start">
              <div className="flex flex-row justify-center md:justify-start ">
                <div className="text-left max-w-6xl px-5">
                  <h1 className="text-center md:text-left text-[3rem] md:text-[4.5rem] lg:text-[6rem] xl:text-[6.5rem] 2xl:text-[7.7rem] text-yellow-300 font-normal">
                    From Our
                  </h1>
                  <div className="relative w-full flex flex-row justify-end ml-0 -mt-5 md:ml-10 md:-mt-8 ">
                    <img className="absolute -left-4 md:top-3 -top-5 w-[20%] md:w-[15%]" src="/png/speaker.png" alt="icon"/>
                    {/* <img className="ml-10 h-24 w-auto" src="/svg/main-logo.svg" altccccccccccccc="main-logo"/> */}
                    <h2 className="ml-0 md:ml-10 text-center md:text-left text-[3rem] md:text-[4.5rem] lg:text-[6rem] xl:text-[6.5rem] 2xl:text-[7.7rem] text-cyan-600 font-normal">
                      Community
                    </h2>
                  </div>
                </div>
              </div>
              <div className="w-full  xl:mt-16 md:mt-10 mt-0">
                <div className="max-w-4xl m-auto">
                  <Swiper
                    modules={[Navigation]}
                    loop={true}
                    spaceBetween={30}
                    navigation
                    className="rewind"
                  >
                    {TestimonialContent.map((p, index) => {
                      return (
                        <SwiperSlide style={{"marginRight" : "0"}} className="p-px w-full mt-12 bg-gradient-to-br from-yellow-400 from-10% via-cyan-600 via-30% to-zinc-950 to-45% rounded-[2rem] md:rounded-[5rem]" key={index}>
                          <div className='bg-zinc-950 w-full rounded-[calc(2rem-1px)] md:rounded-[calc(5rem-1px)] p-8 md:p-20 pb-8 md:pb-16 text-gray-300'>
                            <p className='text-[0.9rem] leading-[24px] md:text-2xl md:leading-10 text-zinc-300'>{p.info}</p>
                            <div className="flex justify-start w-full mt-7 md:mt-14">
                              <div className="flex justify-center ">
                                <div>
                                  <h3 className='mb-3 text-xl md:text-[1.65rem] text-cyan-400'>Agbo Felix</h3>
                                  <h3 className='text-md md:text-[1.7rem] text-zinc-300'>Twitter</h3>
                                </div>
                              </div>
                            </div>
                          </div>
                        </SwiperSlide>
                      );
                    })}
                  </Swiper>
                </div>
              </div>
            </div>
          </section>

          {/******* Testimonial Section Ends *******/}

          {/******* FQ Section *******/}

          <section className="relative mx-auto max-w-2xl md:max-w-[52rem] lg:max-w-[1300px] mt-20 md:mt-24">
            <div className="w-full flex flex-col justify-start">
              <div className="flex flex-row justify-center md:justify-start ">
                <div className="text-left max-w-6xl px-5">
                  <h1 className="text-center md:text-left text-[3rem] md:text-[4.5rem] lg:text-[6rem] xl:text-[6.5rem] 2xl:text-[7.7rem] text-yellow-300 font-normal">
                    Frequent
                  </h1>
                  <div className="relative w-full flex flex-row justify-end ml-0 md:ml-10 -mt-5 md:-mt-5">
                    <img className="absolute -left-5 md:-left-2 -top-7 md:-top-5 w-[14%]" src="/png/question_mark.png" alt="icon"/>
                    {/* <img className="ml-10 h-24 w-auto" src="/svg/main-logo.svg" altccccccccccccc="main-logo"/> */}
                    <h2 className="ml-0 md:ml-10 text-center md:text-left text-[3rem] md:text-[4.5rem] lg:text-[6rem] xl:text-[6.5rem] 2xl:text-[7.7rem] text-cyan-600 font-normal">
                      Questions
                    </h2>
                  </div>
                </div>
              </div>
              
              <div className="w-full mt-12 md:mt-28">
                <Accordion.Root
                  className="w-full max-w-7xl m-auto"
                  type="single"
                  defaultValue=""
                  collapsible
                >
                  {
                    FAQs.map((faq) => (
                      <AccordionItem key={faq.id} value={`item-${faq.id}`} className={'w-full p-5 my-6'}>
                        <AccordionTrigger className={'w-full pr-5 text-base md:text-xl xl:text-2xl'}>
                          <p>
                            {faq.question}
                          </p>
                        </AccordionTrigger>
                        <AccordionContent className={"text-sm md:text-xl xl:text-2xl"}>
                          <p>
                            {faq.answer}
                          </p>
                        </AccordionContent>
                      </AccordionItem>
                    ))
                  }
                </Accordion.Root>
              </div>
              
            </div>
          </section>

          {/******* FQ Section Ends *******/}

          
          {/******* Blogs Section *******/}

          <section className="relative mx-auto max-w-2xl md:max-w-[52rem] lg:max-w-[1300px] py-36 md:py-24 lg:py-24">
            <div className="w-full flex flex-col justify-center md:justify-start">
              <div className="flex flex-row justify-between mb-8">
                <div className="text-left max-w-6xl px-5">
                  <h1 className="text-center md:text-left text-[3rem] md:text-[4.5rem] lg:text-[6rem] xl:text-[6.5rem] 2xl:text-[7.7rem] text-yellow-300 font-normal">
                    Our Blogs
                  </h1>
                  <div className="relative w-full flex flex-row justify-end ml-0 md:ml-16 -mt-5">
                    <img className="absolute -left-0 xl:-top-7 w-[25%]" src="/png/thought.png" alt="icon"/>
                    {/* <img className="ml-10 h-24 w-auto" src="/svg/main-logo.svg" altccccccccccccc="main-logo"/> */}
                    <h2 className="ml-0 md:ml-10 text-center md:text-left text-[3rem] md:text-[4.5rem] lg:text-[6rem] xl:text-[6.5rem] 2xl:text-[7.7rem] text-cyan-600 font-normal">
                      For You
                    </h2>
                  </div>
                </div>
                <div className='w-2/6 flex justify-end items-end'>
                  <Link href="/blogs" className="hidden md:block w-[60%] lg:w-[50%] mx-auto md:m-0 text-center text-md font-normal leading-6 text-zinc-200 rounded-full md:ml-2 py-3 px-3 bg-pink-700 hover:bg-pink-500 ease-in-out duration-300 group">
                    See more
                  </Link>
                </div>
              </div>
              
              <div className="flex justify-center w-full max-w-7xl mt-8">
                <div className="grid grid-cols-1 md:grid-cols-2 grid-flow-row gap-16 w-full">
                  
                  {
                    blogData.map((blog) => (
                      <div key={blog.id} className="flex flex-col item-center max-w-[43rem] peer">
                        <div className='w-full max-w-[43rem] max-h-[23rem] md:max-h-[13.5rem] lg:max-h-[23rem] xl:rounded-[2rem] rounded-[1rem] mb-3 overflow-hidden'>
                          <img className='w-full' src={`/webp/${blog.img}`} alt={`${blog.title}`}/>
                        </div>
                        <div className="flex flex-row items-center w-full my-3">
                          <div className="flex justify-center mr-5 border-solid border-[1px] border-zinc-300 text-zinc-300 text-center px-4 h-8 lg:h-12 lg:px-5 rounded-[10px]">
                            {
                              blog.tags.map((tag, index) => (
                                <p key={index} className='w-full m-auto text-sm lg:text-xl  font-normal'>{tag}</p>
                              ))
                            }
                          </div>
                          <p className='text-sm lg:text-lg text-zinc-300 font-normal'>
                            {blog.date}
                          </p>
                        </div>
                        <div className="flex flex-row justify-between w-full group my-1 lg:my-4">
                          <h3 className='text-xl lg:text-3xl  text-zinc-400 max-w-max group-hover:text-pink-400 pr-3 ease-in-out duration-500 peer'>
                            {blog.title}
                          </h3>
                          <div className="flex justify-center items-center w-auto max-w-max px-px rounded-[50%] text-zinc-400 group-hover:text-pink-400 group-hover:-rotate-45 peer-has-[img:hover]:-rotate-45 ease-in-out duration-500">
                            <ArrowRightIcon className="m-auto p-1 w-8 lg:w-10 h-auto" />
                          </div>
                        </div>
                      </div>
                    ))
                  }

                  <div className='flex justify-end w-full'>
                    <Link href="/blogs" className="md:hidden block w-[50%] mx-auto md:m-0 text-center text-md font-normal leading-6 text-zinc-200 rounded-full md:ml-2 py-3 px-3 bg-pink-700 hover:bg-pink-500 ease-in-out duration-300 group">
                      See more
                    </Link>
                  </div>

                </div>
              </div>
            </div>
          </section>

          {/******* Blogs Section Ends *******/}

        </div>
      </div>

    </main>
  )
}
