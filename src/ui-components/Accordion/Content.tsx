import React from 'react';
// import classNames from 'classnames';
import * as Accordion from '@radix-ui/react-accordion';

export default function AccordionContent ({ children, className, ...props } : { children: React.ReactNode, className: string }) {
  return (<Accordion.Content
    className={
      `data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp overflow-hidden
      ${className}
      `
    }
    {...props}
    // ref={forwardedRef}
  >
    <div className="py-[10px] max-w-4xl text-white leading-10">{children}</div>
  </Accordion.Content>)
};
