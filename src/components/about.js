import { poppins } from "@/utils/fonts";


function AboutPage(){
    return(
        <div className ={`${poppins.className} flex flex-col items-center h-screen px-4`}>
            <h1 className="text-6xl">About Me</h1>
            <div className="shadow-lg mt-10 p-10 bg-gray-900 rounded-lg max-w-screen-lg">
                <p className="max-w-screen-lg text-justify">
                Previously focused on driving conversion strategies for e-commerce and driving traffic to websites, 
                I found myself venturing into the world of software development. With a unique blend of technical expertise 
                and marketing insight, I bridge the gap between functionality and user experience.
                </p>
                <p className="mt-10 text-justify max-w-screen-lg">Exposed in multiple frameworks and technologies, I am flexible in developing software solutions in web 
                applications or a mobile application setup. I have experience in various technologies pertaining Full Stack 
                Software Development (React Native, React, Supabase, Node). Whenever a new tech stack is introduced I believe 
                I am capable of learning and adjusting to it.
                </p>
            </div>
            
        </div>

    )

}

export default AboutPage;