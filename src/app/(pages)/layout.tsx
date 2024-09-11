import Footer from '@/ui-components/footer';
import Header from '@/ui-components/header';
import React from 'react';

export default function MainLayout({ children } : { children: React.ReactNode }) {
  return (
    <>
      <div className="min-h-screen">
        <div className='h-screen flex flex-col justify-between'>
          <Header/>
            <div className='max-w-screen-2xl m-auto'>
              {children}
            </div>
          <Footer/>
        </div>
      </div>
    </>
  );
};