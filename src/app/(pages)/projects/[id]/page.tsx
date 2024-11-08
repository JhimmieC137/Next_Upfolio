'use client'

import Footer from "@/ui-components/footer";
import Header from "@/ui-components/header";
import SingleProjectPage from "@/page-components/projects/single/page";
import ScreenLoader from "@/ui-components/ScreenLoader";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import ScrollUpButton from "@/ui-components/ScrollUpButton";

export default function Projects() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const projectPath = useParams();

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
        <SingleProjectPage path={projectPath?.id as string}/>
        <ScrollUpButton />
        <Footer />
      </div>
    </>
  );
}