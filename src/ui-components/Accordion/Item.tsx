import React from 'react';
// import classNames from 'classnames';
import * as Accordion from '@radix-ui/react-accordion';

export default function AccordionItem ({ children, className, value, ...props } : { children: React.ReactNode, className: string, value: string }) {
  return (<Accordion.Item
    value={value}
    className={
      `focus-within:shadow-white mt-px overflow-hidden first:mt-0 focus-within:relative focus-within:z-10
        border-y-2 border-y-zinc-400 focus-within:border-y-white ease-in-out duration-1000
        ${className}
      `
  }
    {...props}
  >
    {children}
  </Accordion.Item>)
};