'use client'

import SingleProgramPage from "@/page-components/programs/single/page";
import ScreenLoader from "@/ui-components/ScreenLoader";
import { useEffect, useState } from "react";

export default function Programs() {
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
      <SingleProgramPage />
    </>
  );
}