'use client'
import { ProgressBar } from '@nadfri/react-scroll-progress-bar';
import { ArrowRightIcon, ChevronDownIcon, UserGroupIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useRef } from "react";
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

export default function HomePage() {
  const refToIntro = useRef<HTMLElement | null>(null);
  const refToServices = useRef<HTMLElement | null>(null);


  return (
    <main className="relative px-3 md:px6 pt-14 lg:px-8 min-h-full">
      {/******* Hero Section *******/}
      
      {/* <div
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#4690e4] to-[#77afee] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div> */}

      <section id="hero" className="h-screen mx-auto max-w-2xl md:max-w-3xl lg:max-w-6xl py-36 md:py-24 lg:py-24">
        <div className="hidden sm:mb-8 lg:mb-1 sm:flex sm:justify-center">
          {/* <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-zinc-300 ring-1 ring-zinc-300/80 hover:ring-zinc-300 ease-in-out duration-200">
            Announcing our next round of announcements.{' '}
            <a href="#" className="font-semibold text-yellow-300">
              <span className="absolute inset-0" aria-hidden="true" />
              Read more <span aria-hidden="true">&rarr;</span>
            </a>
          </div> */}
        </div>
        <div className="mb-5 md:mb-2 md:mt-28 lg:mt-20 text-center sm:mb-8 lg:mb-1 flex justify-center">
          <p className="text-md  text-zinc-200 font-semibold">
            DISCOVER YOUR PATH
          </p>
        </div>
        <div className="text-center">
          <h1 className="text-6xl md:text-c8xl lg:text-[8rem] font-normal tracking-tight text-yellow-300">
            Elevate Your <span className="lg:text-[9rem] text-cyan-600">Career Journey</span>
          </h1>
          <p className="m-auto mt-6 text-md md:text-lg leading-6 md:leading-8 md:max-w-md lg:max-w-xl text-zinc-200">
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-x-6">
            <div 
              onClick={() => {document.getElementById("intro")?.scrollIntoView({behavior: 'smooth'}); console.log("clicked")}} 
              className='cursor-pointer'  
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
        <div
          className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#4690e4] to-[#77afee] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div> */}

      {/******* Hero Section Ends *******/}


      {/******* Introduction Section *******/}


      <section ref={refToIntro} id="intro" className="relative mx-auto max-w-2xl md:max-w-3xl lg:max-w-[1300px] py-36 md:py-24 lg:py-16">
        <div className="w-full flex flex-col justify-start">
          <div className="flex flex-row justify-start ">
            <div className="text-left max-w-6xl px-5">
              <h1 className="text-4xl md:text-6xl lg:text-[7.7rem] text-yellow-300 font-normal">
                We Are
              </h1>
              <div className="relative w-full flex flex-row justify-end ml-16 mt-3">
                <img className="absolute left-0 -top-8 w-[20%]" src="/png/sparkles.png" alt="icon"/>
                {/* <img className="ml-10 h-24 w-auto" src="/svg/main-logo.svg" altccccccccccccc="main-logo"/> */}
                <h2 className="ml-10 text-4xl md:text-6xl lg:text-[7.7rem] text-cyan-600 font-normal">
                  Upfolio
                </h2>
              </div>
            </div>
          </div>
          <div className="flex flex-row w-full mt-8">
            <div className="flex flex-row justify-end w-full">
              <h4 className="max-w-4xl text-4xl font-normal leading-[3rem] text-zinc-300">
                Lorem ipsum dolor itaque autem alias quo natus quasi fugiat eaque ipsa quis voluptate nam numquam, fugit aliquid, ratione cum est? Dolorem consequuntur necessitatibus voluptate!
              </h4>
            </div>
          </div>
          <div className="flex flex-row w-full mt-20">
            <div className="flex flex-row justify-end items-end w-full ml-20">
              <img className="h-10 mt-1 w-auto" src="/png/star.png" alt="" />
              <p className="mx-2 text-2xl text-zinc-300 font-normal " >
                100+ Community Members
              </p>
              <img className="mx-2 h-20 w-auto -rotate-[18deg]" src="/png/star-arrow.png" />
              <div className='relative w-full max-w-[50%]'>
                <img className='w-[15%] absolute -z-10 -top-5 -left-5' src='/png/pic_frame_1.png'/>
                <img className='w-[18%] absolute -bottom-10 -right-12 -rotate-180' src='/png/pic_frame_1.png'/>
                <img className="mx-4 rounded-[35px] max-w-full border-[5px] border-white/10" src="/png/community-collage.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/******* Introduction Section Ends *******/}

      {/******* Services Section *******/}

      <section ref={refToServices} id="intro" className="relative mx-auto max-w-2xl md:max-w-3xl lg:max-w-[1300px] py-36 md:py-24 lg:py-16">
        <div className="w-full flex flex-col justify-start">
          <div className="flex flex-row justify-start ">
            <div className="text-left max-w-6xl px-5">
              <h1 className="text-4xl md:text-6xl lg:text-[7.7rem] text-yellow-300 font-normal">
                Grow With
              </h1>
              <div className="relative w-full flex flex-row justify-end ml-16 mt-3">
                <img className="absolute -left-7 -top-10 w-[19%]" src="/png/meteor.png" alt="icon"/>
                {/* <img className="ml-10 h-24 w-auto" src="/svg/main-logo.svg" altccccccccccccc="main-logo"/> */}
                <h2 className="ml-10 text-4xl md:text-6xl lg:text-[7.7rem] text-cyan-600 font-normal">
                  Our Services
                </h2>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-start items-start w-full mt-44">
            
            {/* -- Service 1 -- */} 
            <div className="flex flex-row justify-between w-full py-7">
              <div className="flex item-start max-w-40 w-full">
                <h1 className="text-[6.3rem] pl-8 opacity-20 text-zinc-300 font-normal">01</h1>
              </div>
              <div className="flex justify-start w-full pl-20 peer">
                <div className="flex flex-col justify-between">
                  <h4 className="max-w-max text-[3.5rem] ml-0 text-zinc-300 hover:text-pink-400 ease-in-out duration-500 cursor-pointer">
                    Career Growth Projects
                  </h4>
                  <p className="text-lg mt-5 text-zinc-400 font-normal max-w-2xl">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum sequi vel, pariatur recusandae expedita repudiandae consequatur eos temporibus amet dolorem
                  </p>
                </div>
              </div>
              <div className="h-full flex justify-center opacity-20 text-zinc-400 peer-has-[h4:hover]:text-pink-400  item-center max-w-40 peer-has-[h4:hover]:-rotate-45 peer-has-[h4:hover]:opacity-100 ease-in-out duration-500">
                <ArrowRightIcon className="m-auto h-16 w-auto" />
              </div>
            </div>
            {/* -- End of Service 1 -- */}

            {/* -- Service 2 -- */} 
            <div className="flex flex-row justify-between w-full py-7">
              <div className="flex item-start max-w-40 w-full">
                <h1 className="text-[6.3rem] pl-8 opacity-20 text-zinc-400 font-normal">02</h1>
              </div>
              <div className="flex justify-start w-full pl-20 peer">
                <div className="flex flex-col justify-between">
                  <h4 className="max-w-max text-[3.5rem] ml-0 text-zinc-300 hover:text-pink-400 ease-in-out duration-500 cursor-pointer">
                    Programs &<br/> Information Sessions
                  </h4>
                  <p className="text-lg mt-5 text-zinc-400 font-normal max-w-2xl">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum sequi vel, pariatur recusandae expedita repudiandae consequatur eos temporibus amet dolorem
                  </p>
                </div>
              </div>
              <div className="h-full flex justify-center opacity-20 text-zinc-400 item-center max-w-40 peer-has-[h4:hover]:text-pink-400 peer-has-[h4:hover]:-rotate-45 peer-has-[h4:hover]:opacity-100 ease duration-500 group">
                <ArrowRightIcon className="m-auto h-16 w-auto"/>
              </div>
            </div>
            {/* -- End of Service 2 -- */}

            {/* -- Service 3 -- */} 
            <div className="flex flex-row justify-between w-full py-7">
              <div className="flex item-start max-w-40 w-full">
                <h1 className="text-[6.3rem] pl-8 opacity-20 text-zinc-400 font-normal">03</h1>
              </div>
              <div className="flex justify-start w-full pl-20 peer">
                <div className="flex flex-col justify-between max-w-2xl">
                  <h4 className="max-w-max text-[3.5rem] ml-0 text-zinc-300 hover:text-pink-400 ease-in-out duration-500 cursor-pointer">
                    Blogs & Articles
                  </h4>
                  <p className="text-lg mt-5 text-zinc-400 font-normal">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum sequi vel, pariatur recusandae expedita repudiandae consequatur eos temporibus amet dolorem
                  </p>
                </div>
              </div>
              <div className="h-full flex justify-center opacity-20 text-zinc-400 peer-has-[h4:hover]:text-pink-400  item-center max-w-40 peer-has-[h4:hover]:-rotate-45 peer-has-[h4:hover]:opacity-100 ease duration-500">
                <ArrowRightIcon className="m-auto h-16 w-auto" />
              </div>
            </div>
            {/* End of Service 3 -- */}

          </div>
        </div>
      </section>

      {/******* Services Section Ends *******/}


      {/******* Getting Started *******/}

      <section ref={refToIntro} id="intro" className="relative mx-auto max-w-2xl md:max-w-3xl lg:max-w-[1300px] py-36 md:py-24 lg:py-24">
        <div className="w-full flex flex-col justify-start">
          <div className="flex flex-row justify-start ">
            <div className="text-left max-w-6xl px-5">
              <h1 className="text-4xl md:text-6xl lg:text-[7.7rem] text-yellow-300 font-normal">
                Getting
              </h1>
              <div className="relative w-full flex flex-row justify-end ml-16 mt-3">
                <img className="absolute -left-24 -top-10 w-[35%] -rotate-[40deg]" src="/png/checklist.png" alt="icon"/>
                {/* <img className="ml-10 h-24 w-auto" src="/svg/main-logo.svg" altccccccccccccc="main-logo"/> */}
                <h2 className="ml-10 text-4xl md:text-6xl lg:text-[7.7rem] text-cyan-600 font-normal">
                  Started
                </h2>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center w-full max-w-7xl mt-8">
            
            
            {/*  Item 1  */}

            <div className="my-10 h-full gap-x-6 flex flex-row justify-between items-center w-full lg:max-w-[77rem]">
              <div className="w-full max-w-[32rem] text-left mr-7">
                <div className="flex flex-col justify-start">
                  <div className="max-h-32 max-w-[125px] p-7 rounded-[50%] border-2 border-zinc-400">
                    <FaPeopleGroup className="p-2 h-16 w-auto text-zinc-400" />
                  </div>
                  <h2 className="text-3xl max-w-xs my-5 text-zinc-300 font-normal">
                    Join Our Community On Social Media
                  </h2>
                  <div className="flex flex-col max-w-3xl">
                    <div className="my-1 flex flex-row">
                      <PiStarFourFill className='h-7 p-1 w-auto text-cyan-600' />
                      <p className="text-zinc-400 ml-5 text-md font-normal">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                    <div className="my-1 flex flex-row">
                      <PiStarFourFill className='h-7 p-1 w-auto text-cyan-600' />
                      <p className="text-zinc-400 ml-5 text-md font-normal">Necessitatibus maiores temporibus error culpa rerum totam</p>
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
              <div className="w-full max-w-[32rem] text-left ml-7">
                <div className='flex justify-end'>
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
            
            <div className="my-10 h-full gap-x-6 flex flex-row-reverse justify-between items-center w-full lg:max-w-[77rem]">
              <div className="w-full flex justify-end max-w-[32rem] text-left ml-7">
                <div className="flex flex-col justify-center">
                <div className="max-h-32 max-w-[125px] p-7 rounded-[50%] border-2 border-zinc-400">
                    <VscGitPullRequestCreate className="p-2 h-16 w-auto text-zinc-400" />
                  </div>
                  <h2 className="text-3xl max-w-xs my-5 text-zinc-300 font-normal">
                    Sign Up For Upcoming Programs
                  </h2>
                  <div className="flex flex-col max-w-3xl">
                    <div className="my-1 flex flex-row">
                      <PiStarFourFill className='h-7 p-1 w-auto text-cyan-600' />
                      <p className="text-zinc-400 ml-5 text-md font-normal">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt</p>
                    </div>
                    <div className="my-1 flex flex-row">
                      <PiStarFourFill className='h-7 p-1 w-auto text-cyan-600' />
                      <p className="text-zinc-400 ml-5 text-md font-normal">Necessitatibus maiores temporibus error culpa rerum totam architecto facilis </p>
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
              <div className="w-full max-w-[32rem] text-left mr-7">
                <div className='flex justify-start '>
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

            <div className="my-10 h-full gap-x-6 flex flex-row justify-between items-center w-full lg:max-w-[77rem]">
              <div className="w-full max-w-[32rem] text-left mr-7">
                <div className="flex flex-col justify-start">
                  <div className="max-h-32 max-w-[125px] p-7 rounded-[50%] border-2 border-zinc-400">
                    <CgFilters className="p-2 h-16 w-auto text-zinc-400" />
                  </div>
                  <h2 className="text-3xl max-w-xs my-5 text-zinc-300 font-normal">
                    Collaborate With Us on Annual Projects
                  </h2>
                  <div className="flex flex-col max-w-3xl">
                    <div className="my-1 flex flex-row">
                      <PiStarFourFill className='h-7 p-1 w-auto text-cyan-600' />
                      <p className="text-zinc-400 ml-5 text-md font-normal">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                    <div className="my-1 flex flex-row">
                      <PiStarFourFill className='h-7 p-1 w-auto text-cyan-600' />
                      <p className="text-zinc-400 ml-5 text-md font-normal">Necessitatibus maiores temporibus error culpa rerum totam</p>
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
              <div className="w-full max-w-[32rem] text-left ml-7">
                <div className='flex justify-end'>
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
            
            <div className="my-10 h-full gap-x-6 flex flex-row-reverse justify-between items-center w-full lg:max-w-[77rem]">
              <div className="w-full flex justify-end max-w-[32rem] text-left ml-7">
                <div className="flex flex-col justify-center">
                  <div className="max-h-32 max-w-[125px] p-7 rounded-[50%] border-2 border-zinc-400">
                    <BsPersonRaisedHand className="p-2 h-16 w-auto text-zinc-400" />
                  </div>
                  <h2 className="text-3xl max-w-xs my-5 text-zinc-300 font-normal">
                    Volunteer With Us
                  </h2>
                  <div className="flex flex-col max-w-3xl">
                    <div className="my-1 flex flex-row">
                      <PiStarFourFill className='h-7 p-1 w-auto text-cyan-600' />
                      <p className="text-zinc-400 ml-5 text-md font-normal">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt</p>
                    </div>
                    <div className="my-1 flex flex-row">
                      <PiStarFourFill className='h-7 p-1 w-auto text-cyan-600' />
                      <p className="text-zinc-400 ml-5 text-md font-normal">Necessitatibus maiores temporibus error culpa rerum totam architecto facilis </p>
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
              <div className="w-full max-w-[35rem] text-left mr-7">
                <div className='flex justify-start '>
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

      <section ref={refToIntro} id="intro" className="relative mx-auto max-w-2xl md:max-w-3xl lg:max-w-[1300px] py-36 md:py-24 lg:py-24">
        <div className="w-full flex flex-col justify-start">
          <div className="flex flex-row justify-start ">
            <div className="text-left max-w-6xl px-5">
              <h1 className="text-4xl md:text-6xl lg:text-[7.7rem] text-yellow-300 font-normal">
                Hear From
              </h1>
              <div className="relative w-full flex flex-row justify-end ml-16 mt-3">
                <img className="absolute -left-4 -top-8 w-[15%]" src="/png/speaker.png" alt="icon"/>
                {/* <img className="ml-10 h-24 w-auto" src="/svg/main-logo.svg" altccccccccccccc="main-logo"/> */}
                <h2 className="ml-10 text-4xl md:text-6xl lg:text-[7.7rem] text-cyan-600 font-normal">
                  Our Community
                </h2>
              </div>
            </div>
          </div>
          <div className="w-full mt-16">
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
                    <SwiperSlide className="p-px w-full mt-20 bg-gradient-to-br from-yellow-400 from-10% via-cyan-600 via-30% to-zinc-950 to-45% rounded-[5rem]" key={index}>
                      <div className='bg-zinc-950 w-full rounded-[calc(5rem-1px)] p-20 pb-16 text-gray-300'>
                        <p className='text-2xl leading-10 text-zinc-300'>{p.info}</p>
                        <div className="flex justify-start w-full mt-14">
                          <div className="flex justify-center ">
                            <div>
                              <h3 className='mb-3 text-[1.65rem] text-cyan-400'>Agbo Felix</h3>
                              <h3 className='text-[1.7rem] text-zinc-300'>Twitter</h3>
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

      <section ref={refToIntro} id="intro" className="relative mx-auto max-w-2xl md:max-w-3xl lg:max-w-[1300px] py-36 md:py-24 lg:py-24">
        <div className="w-full flex flex-col justify-start">
          <div className="flex flex-row justify-start ">
            <div className="text-left max-w-6xl px-5">
              <h1 className="text-4xl md:text-6xl lg:text-[7.7rem] text-yellow-300 font-normal">
                Frequent
              </h1>
              <div className="relative w-full flex flex-row justify-end ml-16 mt-3">
                <img className="absolute -left-2 -top-14 w-[17%]" src="/png/question_mark.png" alt="icon"/>
                {/* <img className="ml-10 h-24 w-auto" src="/svg/main-logo.svg" altccccccccccccc="main-logo"/> */}
                <h2 className="ml-10 text-4xl md:text-6xl lg:text-[7.7rem] text-cyan-600 font-normal">
                  Questions
                </h2>
              </div>
            </div>
          </div>
          
          <div className="w-full mt-20 ">
            <Accordion.Root
              className="w-full max-w-7xl m-auto"
              type="single"
              defaultValue=""
              collapsible
            >
              {
                FAQs.map((faq) => (
                  <AccordionItem key={faq.id} value={`item-${faq.id}`} className={'w-full p-5 my-6'}>
                    <AccordionTrigger className={'w-full pr-5 text-2xl'}>
                      <p>
                        {faq.question}
                      </p>
                    </AccordionTrigger>
                    <AccordionContent className={"text-2xl"}>
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

      <section ref={refToIntro} id="intro" className="relative mx-auto max-w-2xl md:max-w-3xl lg:max-w-[1300px] py-36 md:py-24 lg:py-24">
        <div className="w-full flex flex-col justify-start">
          <div className="flex flex-row justify-between mb-8">
            <div className="text-left max-w-6xl px-5">
              <h1 className="text-4xl md:text-6xl lg:text-[7.7rem] text-yellow-300 font-normal">
                Our Blogs
              </h1>
              <div className="relative w-full flex flex-row justify-end ml-16 mt-3">
                <img className="absolute -left-0 -top-7 w-[25%]" src="/png/thought.png" alt="icon"/>
                {/* <img className="ml-10 h-24 w-auto" src="/svg/main-logo.svg" altccccccccccccc="main-logo"/> */}
                <h2 className="ml-10 text-4xl md:text-6xl lg:text-[7.7rem] text-cyan-600 font-normal">
                  For You
                </h2>
              </div>
            </div>
            <div className='text-black'>
              Button
            </div>
          </div>
          
          <div className="flex justify-center w-full max-w-7xl mt-8">
            <div className="grid grid-cols-2 grid-flow-row gap-16 w-full">

              {/* Grid Item 1 */}

              <div className="flex flex-col item-cente max-w-[43rem] peer">
                <div className='w-full max-w-[43rem] max-h-[23rem] rounded-[2rem] mb-3 overflow-hidden'>
                  <img className='w-full' src='/webp/blog-1.webp' alt=''/>
                </div>
                <div className="flex flex-row items-center w-full my-3">
                  <div className="flex justify-center mr-5 border-solid border-[1px] border-zinc-300 text-zinc-300 text-center h-12 px-5 rounded-[10px]">
                    <p className='w-full m-auto text-lg font-normal'>Technology</p>
                  </div>
                  <p className='text-md text-zinc-300 font-normal'>
                    12th February, 2024
                  </p>
                </div>
                <div className="flex flex-row justify-between w-full group my-4">
                  <h3 className='text-[2rem] text-zinc-400 max-w-max group-hover:text-pink-400 pr-3 ease-in-out duration-500 peer'>
                    {/* Title of this blog is the title */}
                    How cold email can scale a business
                  </h3>
                  <div className="h-12 w-auto max-w-max p-1 rounded-[50%] text-zinc-400 group-hover:text-pink-400 group-hover:-rotate-45 peer-has-[img:hover]:-rotate-45 ease-in-out duration-500">
                    <ArrowRightIcon className="m-auto p-1 h-10 w-auto" />
                  </div>
                </div>
              </div>

              {/* End of Grid Item 1 */}

              {/* Grid Item 2 */}

              <div className="flex flex-col item-cente max-w-[43rem]">
                <div className='w-full max-w-[43rem] max-h-[23rem] rounded-[2rem] mb-3 overflow-hidden'>
                  <img className='w-full' src='/webp/blog-3.webp' alt=''/>
                </div>
                <div className="flex flex-row items-center w-full my-3">
                  <div className="flex justify-center mr-5 border-solid border-[1px] border-zinc-300 text-zinc-300 text-center h-12 px-5 rounded-[10px]">
                    <p className='w-full m-auto text-lg font-normal'>Technology</p>
                  </div>
                  <p className='text-md text-zinc-300 font-normal'>
                    12th February, 2024
                  </p>
                </div>
                <div className="flex flex-row justify-between w-full group my-4">
                  <h3 className='text-[2rem] text-zinc-400 max-w-max group-hover:text-pink-400 pr-3 ease duration-300 peer'>
                    {/* Title of this blog is the title */}
                    How cold email can scale a business
                  </h3>
                  <div className="h-12 w-auto max-w-max p-1 rounded-[50%] text-zinc-400 group-hover:text-pink-400 group-hover:-rotate-45 peer-has-[img:hover]:-rotate-45 ease duration-300">
                    <ArrowRightIcon className="m-auto p-1 h-10 w-auto" />
                  </div>
                </div>
              </div>

              {/* End of Grid Item 2 */}              

              {/* Grid Item 3 */}

              <div className="flex flex-col item-cente max-w-[43rem]">
                <div className='w-full max-w-[43rem] max-h-[23rem] rounded-[2rem] mb-3 overflow-hidden'>
                  <img className='w-full' src='/webp/blog-3.webp' alt=''/>
                </div>
                <div className="flex flex-row items-center w-full my-3">
                  <div className="flex justify-center mr-5 border-solid border-[1px] border-zinc-300 text-zinc-300 text-center h-12 px-5 rounded-[10px]">
                    <p className='w-full m-auto text-lg font-normal'>Technology</p>
                  </div>
                  <p className='text-md text-zinc-300 font-normal'>
                    12th February, 2024
                  </p>
                </div>
                <div className="flex flex-row justify-between w-full group my-4">
                  <h3 className='text-[2rem] text-zinc-400 max-w-max group-hover:text-pink-400 pr-3 ease duration-300 peer'>
                    {/* Title of this blog is the title */}
                    How cold email can scale a business
                  </h3>
                  <div className="h-12 w-auto max-w-max p-1 rounded-[50%] text-zinc-400 group-hover:text-pink-400 group-hover:-rotate-45 peer-has-[img:hover]:-rotate-45 ease duration-300">
                    <ArrowRightIcon className="m-auto p-1 h-10 w-auto" />
                  </div>
                </div>
              </div>

              {/* End of Grid Item 3 */}

              {/* Grid Item 4 */}

              <div className="flex flex-col item-cente max-w-[43rem]">
                <div className='w-full max-w-[43rem] max-h-[23rem] rounded-[2rem] mb-3 overflow-hidden'>
                  <img className='w-full' src='/webp/blog-4.webp' alt=''/>
                </div>
                <div className="flex flex-row items-center w-full my-3">
                  <div className="flex justify-center mr-5 border-solid border-[1px] border-zinc-300 text-zinc-300 text-center h-12 px-5 rounded-[10px]">
                    <p className='w-full m-auto text-lg font-normal'>Technology</p>
                  </div>
                  <p className='text-md text-zinc-300 font-normal'>
                    12th February, 2024
                  </p>
                </div>
                <div className="flex flex-row justify-between w-full group my-4">
                  <h3 className='text-[2rem] text-zinc-400 max-w-max group-hover:text-pink-400 pr-3 ease duration-300 peer'>
                    {/* Title of this blog is the title */}
                    How cold email can scale a business
                  </h3>
                  <div className="h-12 w-auto max-w-max p-1 rounded-[50%] text-zinc-400 group-hover:text-pink-400 group-hover:-rotate-45 peer-has-[img:hover]:-rotate-45 ease duration-300">
                    <ArrowRightIcon className="m-auto p-1 h-10 w-auto" />
                  </div>
                </div>
              </div>

              {/* End of Grid Item 4 */}

            </div>
          </div>
        </div>
      </section>

      {/******* Blogs Section Ends *******/}

    </main>
  )
}
