'use client'

import AboutPage from "@/page-components/about/page";
import ScreenLoader from "@/ui-components/ScreenLoader";
import { useEffect, useState } from "react";

export default function About() {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const setDisplay = () => {
    setTimeout(() => setIsLoading(false), 2500);
  }

  useEffect(() => {
    setDisplay();
  }, [])
  return (
    <>
      <ScreenLoader loaded={!isLoading}/>
      <AboutPage />
    </>
  );
}

