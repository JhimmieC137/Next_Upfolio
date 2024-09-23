import Footer from '@/ui-components/footer';
import Header from '@/ui-components/header';
import TsParticles from '@/ui-components/TsParticles';
import React from 'react';

export default function MainLayout({ children } : { children: React.ReactNode }) {
  return (
    <>
      <div className="min-h-screen w-full">
        <div className='relative h-screen flex flex-col justify-between items-center w-full'>
          <Header/>
          <div className='w-full'>
            {children}
          </div>
          <Footer/>
        </div>
      </div>
    </>
  );
};