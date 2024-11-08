'use client'

import SingleProgramPage from "@/page-components/programs/single/page";
import Footer from "@/ui-components/footer";
import Header from "@/ui-components/header";
import ScreenLoader from "@/ui-components/ScreenLoader";
import ScrollUpButton from "@/ui-components/ScrollUpButton";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Programs() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const programPath = useParams();

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
        <SingleProgramPage path={programPath?.id as string} />
        <ScrollUpButton />
        <Footer />
      </div>
    </>
  );
}