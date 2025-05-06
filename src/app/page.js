import Image from "next/image";
import LandingPage from "@/components/landing_page";
import AboutPage from "@/components/about";
import ProjectsPage from "@/components/projects";
import Certifications from "@/components/certifications";
import { SidebarProvider,SidebarTrigger } from "@/components/ui/sidebar";
import { AppSideBar } from "@/components/app-sidebar"

export default function Home() {
  return (
    <div>
      <SidebarProvider className="absolute" >
        <AppSideBar />
        <SidebarTrigger className="m-10 absolute z-10" />
      </SidebarProvider>
      <LandingPage/>
      <AboutPage/>
      <ProjectsPage/>
      <Certifications/>
    </div>
  );
}
