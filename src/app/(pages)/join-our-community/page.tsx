'use client'

import JOCPage from "@/page-components/join-our-community/page";
import ScreenLoader from "@/ui-components/ScreenLoader";
import { useEffect, useState } from "react";

export default function JoinOurCommunity() {
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
      <JOCPage />
    </>
  );
}