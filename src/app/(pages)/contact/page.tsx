'use client'

import ContactPage from "@/page-components/contact/page";
import ScreenLoader from "@/ui-components/ScreenLoader";
import { useEffect, useState } from "react";

export default function Contact() {
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
      <ContactPage />
    </>
  );
}