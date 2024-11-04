'use client'

import ProgramsPage from "@/page-components/programs/page";
import Footer from "@/ui-components/footer";
import Header from "@/ui-components/header";
import ScreenLoader from "@/ui-components/ScreenLoader";
import { useEffect, useState } from "react";

export default function Programs() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  
  const setDisplay = () => {
  setTimeout(() => setIsLoading(false), 1000);
  }
  
  useEffect(() => {
    setDisplay();
  }, [])


  return (
    <>
      <ScreenLoader loaded={!isLoading}/>
      <div className={`${isLoading && 'hidden'} w-full`}>
        <Header />
        <ProgramsPage />
        <Footer />
      </div>
    </>
  );
}