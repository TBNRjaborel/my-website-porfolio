import { poppins } from "@/utils/fonts";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Image from "next/image";

function LandingPage() {
    return (
        <div>
            <div className="absolute w-10 h-10 top-10 left-10 cursor-pointer flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="hover:scale-150 transition-transform duration-200 size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
                </svg>
            </div>
            <div className="absolute w-10 h-10 top-10 right-10 cursor-pointer flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-4 hover:scale-150 transition-transform duration-200 justify-end">
                    <path d="M14.438 10.148c.19-.425-.321-.787-.748-.601A5.5 5.5 0 0 1 6.453 2.31c.186-.427-.176-.938-.6-.748a6.501 6.501 0 1 0 8.585 8.586Z" />
                </svg>
            </div>
            <div className={`${poppins.className} flex flex-col justify-center items-center h-screen px-4`}>
                <div className="flex items-center justify-between w-full max-w-screen-lg mx-auto">
                    <div className="flex flex-col">
                        <h1>HELLO, MY NAME IS</h1>
                        <h1 className="text-6xl mt-2">GABRIEL MAGDUGO</h1>
                        <p className="mt-5">Software Developer</p>
                        <div className="flex gap-4 mt-4">
                            <a href="https://github.com/TBNRjaborel" target="_blank" rel="noopener noreferrer">
                            <FaGithub className="w-8 h-8" />
                            </a>
                            <a href="https://www.linkedin.com/in/gabriel-magdugo-762453215/" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin className="w-8 h-8" />
                            </a>
                        </div>
                        <a href="/MAGDUGO_RESUME_2025.pdf" target="_blank" rel="noopener noreferrer">
                            <button className="mt-10 bg-white text-black rounded-full px-4 py-3 hover:scale-105 transition-transform duration-200 cursor-pointer">
                            Download Resume
                            </button>
                        </a>
                    </div>
                    <div className="w-100 h-100 relative ml-10">
                        <Image
                            src="/images/my-photo.jpg"
                            alt="My photo"
                            layout="fill"
                            className="rounded-full object-cover hover:scale-105 transition-transform duration-200"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LandingPage;