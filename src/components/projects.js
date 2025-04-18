import { poppins } from "@/utils/fonts";
import { FaGithub, FaLinkedin, FaExternalLinkAlt } from "react-icons/fa";
function ProjectsPage(){
    return(
        <div>
            <div className={`${poppins.className} flex flex-col justify-center items-center min-h-screen`}>
                <h1 className="text-6xl">
                    Projects
                </h1>
                <div className="m-20 flex flex-wrap gap-10">
                    <div className="shadow-xl bg-gray-900 text-white rounded-lg p-5 w-[400px] relative">
                        <div className="bg-gray-950 rounded-2xl p-30"> {/*placeholder for image of app/web app*/} 

                        </div>
                        <h2 className="text-2xl my-10">
                            Personal Website 
                        </h2>
                        <p>
                            My Personal Website Portfolio, showcasing my projects and skills as a software developer.
                        </p>
                        <a href="https://github.com/TBNRjaborel/my-website-porfolio" target="_blank" rel="noopener noreferrer " className="absolute bottom-5 right-5">
                            <FaGithub className="w-6 h-6"/>
                        </a>
                        {/* <div className="flex justify-end mt-5">
                            <a
                                href="https://github.com/TBNRjaborel/PawHuway"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaGithub className="w-6 h-6 text-white cursor-pointer hover:scale-110 transition-transform duration-200" />
                            </a>
                        </div> */}
                    </div>
                    <div className="shadow-xl bg-gray-900 text-white rounded-lg p-5 w-[400px] relative">
                        <div className="bg-gray-950 rounded-2xl p-30"> {/*placeholder for image of app/web app*/} 

                        </div>
                        <h2 className="text-2xl my-10">
                            PawHuway 
                        </h2>
                        <p>
                            A comprehensive mobile web application currently in development designed to bridge the gap between pet
                            owners, veterinarians, and veterinary clinics.
                        </p>
                        <div className="flex justify-end mt-5">
                            <a
                                href="https://github.com/TBNRjaborel/PawHuway"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaGithub className="w-6 h-6 text-white cursor-pointer hover:scale-110 transition-transform duration-200" />
                            </a>
                        </div>
                    </div>
                    <div className="shadow-xl bg-gray-900 text-white rounded-lg p-5 w-[400px] relative">
                        <div className="bg-gray-950 rounded-2xl p-30"> {/*placeholder for image of app/web app*/} 

                        </div>
                        <h2 className="text-2xl my-10">
                            Kapyot
                        </h2>
                        <p>
                            A jeepney booking web application that allows users to book a ride and pay for it online.
                        </p>
                        <a href="https://github.com/mon-ok/kapyot" target="_blank" rel="noopener noreferrer" className="absolute bottom-5 right-5 ">
                            <FaGithub className="w-6 h-6"/>
                        </a>
                    </div>
                    
                    

                </div>

            </div>
            
        </div>
    )
}

export default ProjectsPage