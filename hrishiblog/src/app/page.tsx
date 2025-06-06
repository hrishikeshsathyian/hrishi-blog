import Navbar from "@/components/Navbar";
import Image from "next/image";
import { MdEmail } from "react-icons/md";
import { FaGithub, FaLinkedin } from "react-icons/fa";



export default function Home() {
  return (
    <div>
      <Navbar />
      <main>
          <div className="w-full border-b border-dashed border-gray-700">
          <div className="mx-auto py-12 max-w-7xl border-l border-r border-dashed border-gray-700">
            <div className="lg:grid lg:grid-cols-12 items-stretch">
              
              {/* Profile Picture */}
              <div className="px-8 lg:col-span-4 flex justify-end">
                <Image
                  width={250}
                  height={250}
                  src="/profile_photo.jpeg"
                  alt="Profile"
                  className="rounded-full border-5 border-blue-300 object-cover"
                />
              </div>
              {/* Personal Introduction */}
              <div className="px-5 lg:col-span-7 mt-10 lg:mt-0 text-center lg:text-left ">
                <h1 className="text-3xl font-bold text-white my-2">hi im hrishi <span className="ml-1 waving-hand">👋</span></h1>
                <p className="text-md text-gray-300 text-justify">
                  I&apos;m a Third Year Computer Science undergraduate at the National University of Singapore. I mostly build full-stack applications, passionate about projects that make the world a better place. 
                  Recently, I&apos;ve developed a strong interest in Computer Vision, and I&apos;m excited about the things I could build with it. If I&apos;m not coding, you would probably find me playing TFT :D
                  <br />
                  <br />
                  I am acively looking for opportunities to challenge myself and grow! If you think I&apos;d be a good fit for your team or project, feel free to reach out! I&apos;d love to connect and chat :3


                </p>
                <div className="space-x-3 mt-5">
                  <a href="mailto:hrishikeshsathyian2002@gmail.com" target="_blank"> 
                    <MdEmail className="inline-block text-blue-300 hover:text-blue-500" size={30}/>
                  </a>
                  <a href="https://www.linkedin.com/in/hrishikesh-sathyian/" target="_blank"> 
                    <FaLinkedin className="inline-block text-blue-300 hover:text-blue-500" size={30}/>
                  </a>
                  <a href="https://github.com/hrishikeshsathyian" target="_blank"> 
                    <FaGithub className="inline-block text-blue-300 hover:text-blue-500" size={30}/>
                  </a>

                </div>
              
              </div>
            </div>
          </div>
          </div>
          <div className="w-full border-b border-dashed border-gray-700 flex justify-center">
            <div className="mx-auto pb-12 max-w-7xl">
                <h1 className="text-3xl font-bold text-white my-4">projects</h1>
            </div>
            
          </div>
   
      </main>
    </div>

  );
}
