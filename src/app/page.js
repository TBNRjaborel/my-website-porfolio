import Image from "next/image";
import LandingPage from "@/components/landing_page";
import AboutPage from "@/components/about";

export default function Home() {
  return (
    <div>
      <LandingPage/>
      <AboutPage/>
    </div>
  );
}
