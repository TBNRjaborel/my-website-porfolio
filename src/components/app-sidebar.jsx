import { Sidebar, SidebarContent,SidebarGroup,SidebarGroupContent,SidebarGroupLabel,SidebarMenu,SidebarMenuButton,SidebarMenuItem,SidebarTrigger} from "@/components/ui/sidebar"
import { Info, User, Component, BookOpenText} from "lucide-react"
import { poppins } from "@/utils/fonts";


export function AppSideBar() {
    const items =[
        {
            title: "Home",
            url: "/#home",
            icon: User
        },
        {
            title: "About",
            url: "/#about",
            icon: Info
        },
        {
            title: "Projects",
            url: "/#projects",
            icon: Component
        },
        {
            title: "Certifications",
            url: "/#certifications",
            icon: BookOpenText
        }
    ]
    return (
        
        <Sidebar className="flex ">
            {/* <SidebarTrigger className="m-10 absolute z-10" /> */}
            <SidebarContent className= "mt-20 ml-6 ">
                <SidebarGroup className="mt-10">
                    <SidebarContent>
                        <SidebarMenu className={`${poppins.className} gap-10`}>
                            {items.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton asChild>
                                        <a href={item.url}>
                                            <item.icon style={{ width: "20px", height: "20px" }}/>
                                            <span className="text-2xl">{item.title}</span>
                                        </a>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarContent>
                </SidebarGroup>
            </SidebarContent>
        </Sidebar>
    )
}   