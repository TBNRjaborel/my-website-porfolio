import Image from "next/image";
import LandingPage from "@/components/landing_page";
import AboutPage from "@/components/about";
import ProjectsPage from "@/components/projects";
import Certifications from "@/components/certifications";
import { SidebarProvider,SidebarTrigger } from "@/components/ui/sidebar";
import { AppSideBar } from "@/components/app-sidebar"



export default function Home() {
  
  return (
    <div className="relative" >
      <div className="absolute">
        <SidebarProvider >
          <AppSideBar />
          <SidebarTrigger className="m-10 fixed top-0 left-0 z-50 pointer-events-auto" />
        </SidebarProvider>
      </div>
      <div className="w-full">
        <LandingPage />
        <AboutPage />
        <ProjectsPage />
        <Certifications />
      </div>
    </div>
  );
}
