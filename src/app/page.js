import Image from "next/image";
import LandingPage from "@/components/landing_page";
import AboutPage from "@/components/about";
import ProjectsPage from "@/components/projects";

export default function Home() {
  return (
    <div>
      <LandingPage/>
      <AboutPage/>
      <ProjectsPage/>
    </div>
  );
}
