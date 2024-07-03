import MainLayout from "@/layouts/main-layout";
import HomePage from "@/page-components/home";
import Image from "next/image";

export default function Home() {
  return (
    <MainLayout>
      <HomePage/>
    </MainLayout>
  );
}
