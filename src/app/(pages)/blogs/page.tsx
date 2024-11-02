'use client'

import BlogsPage from "@/page-components/blogs/page";
import ScreenLoader from "@/ui-components/ScreenLoader";
import { useEffect, useState } from "react";

export default function Blogs() {
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
      <BlogsPage />
    </>
  );
}