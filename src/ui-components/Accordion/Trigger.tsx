import React from 'react';
// import classNames from 'classnames';
import * as Accordion from '@radix-ui/react-accordion';
import { ChevronDownIcon } from '@heroicons/react/16/solid';
import { IoIosArrowDown } from 'react-icons/io';



export default function AccordionTrigger ({children, className, ...props }: { children: React.ReactNode, className: string}) {
  return (<Accordion.Header className="">
    <Accordion.Trigger
      className={
        `
        shadow-gray-300 group py-4 cursor-default items-center outline-none flex justify-between text-zinc-400
        ${className}
        `
      }
      {...props}
    >
      {children}
      <IoIosArrowDown
        className="h-10 w-auto text-zinc-400 ease-[cubic-bezier(0.87,_0,_0.13,_1)] transition-transform duration-300 group-data-[state=open]:rotate-180 group-data-[state=open]:text-white"
        aria-hidden
      />
    </Accordion.Trigger>
  </Accordion.Header>)
};