import { poppins } from "@/utils/fonts";
import { FaGithub, FaLinkedin, FaExternalLinkAlt } from "react-icons/fa";
import Image from "next/image";
function ProjectsPage(){
    return(
        <div>
            <div className={`${poppins.className} flex flex-col items-center min-h-screen`}>
                <h1 className="text-6xl">
                    Projects
                </h1>
                <div className="m-20 flex flex-wrap gap-10">
                    <div className="shadow-xl bg-gray-900 text-white rounded-lg p-5 w-[400px] relative">
                        <div className="flex justify-center items-center">
                            <Image
                                src="/images/profile_logo.svg"
                                alt="Website Screenshot"
                                width={200}
                                height={100}
                                className="hover:scale-105 transition-transform duration-200 filter brightness-50 invert"
                            />
                        </div>
                        <h2 className="text-2xl text-center font-bold my-10">
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
                        <div className="flex justify-center items-center"> 
                            <Image
                                src="/images/dog.svg"
                                alt="Dog Image"
                                width={200}
                                height={100}
                                className="hover:scale-105 transition-transform duration-200 filter brightness-50 invert"
                            />
                        </div>
                        <h2 className="text-2xl text-center font-bold my-10">
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
                        <div className="flex flex-col items-center"> 
                            <Image
                                src="/images/jeep.svg"
                                alt="Jeepney Image"
                                width={200}
                                height={100}
                                className="hover:scale-105 transition-transform duration-200 filter brightness-50 invert"
                            />
                        </div>
                        <h2 className="text-2xl text-center font-bold my-10">
                            Kapyot
                        </h2>
                        <p>
                            A jeepney booking web application concept that allows users to book a ride and pay for it online.
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