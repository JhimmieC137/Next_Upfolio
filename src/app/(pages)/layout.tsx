'use client'

import Footer from '@/ui-components/footer';
import Header from '@/ui-components/header';
import ScreenLoader from '@/ui-components/ScreenLoader';
import { Toaster } from '@/ui-components/Toast/toaster';
import TsParticles from '@/ui-components/TsParticles';
import React, { useEffect, useState } from 'react';

export default function MainLayout({ children } : { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const setDisplay = () => {
    setTimeout(() => setIsLoading(false), 2500);
  }

  useEffect(() => {
    setDisplay();
  }, [])

  return (
    <>
      <ScreenLoader loaded={!isLoading} />
      <div className={`${isLoading && 'hidden'} absolute w-full`}>
        <TsParticles />
        <div className='flex flex-col justify-between items-center w-full'>
          {children}
        </div>
        <Toaster />
      </div>
    </>
  );
};