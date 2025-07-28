"use client";

import Navbar from "@/components/Navbar";
import Image from "next/image";
import { MdEmail } from "react-icons/md";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useState, useEffect } from "react";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import ProjectCard from "@/components/ProjectCard";

enum Stage {
  TYPEWRITER = "TYPEWRITER",
  RENDER = "RENDER",
}

export default function Home() {

  const [stage, setStage] = useState<Stage>(Stage.TYPEWRITER); 

  useEffect(() => {
    if (stage === Stage.TYPEWRITER) {
      setTimeout(() => setStage(Stage.RENDER), 3000);
    }
  }, [stage]);

  return (
    <div>
<motion.h1
          initial={{ top: "50%", left: "50%", x: "-50%", y: "-50%", scale: 1 }}
          animate={
            stage === Stage.RENDER
              ? { top: "6.5rem", left: "4rem", x: 500, y: "0%", scale: 1 }
              : { top: "50%", left: "50%", x: "-50%", y: "-50%", scale: 1 }
          }
          transition={{ duration: 1 }}
          className={`text-4xl font-bold text-white z-50 ${
            stage === Stage.RENDER ? "absolute" : "fixed"
          }`}
        >

        {stage === Stage.TYPEWRITER ? (
          <Typewriter
            words={["hi im hrishi "]}
            loop={1}
            cursor
            cursorStyle="|"
            typeSpeed={200}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        ) : (
          <span>hi im hrishi <span className="ml-1 waving-hand">👋</span></span>
        )}
      </motion.h1>

      

      

      {stage == Stage.RENDER && (
      <div>
      <Navbar />
      <main>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2.0 }}
            className="w-full border-b border-dashed border-gray-700"
          >
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
                {/* Leave this space for the animated h1 to "land" visually */}
                <div className="h-12" />
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
          <div className="mx-auto max-w-7xl border-l border-r border-dashed border-gray-700">
            <div className="pb-2 justify-center text-center">
              <h1 className="text-3xl font-bold text-white mt-4">featured projects</h1>
              <p className="text-sm text-grey-200">some things i have been working on</p>
            </div>
            <div className="flex flex-row gap-4 pb-4 px-2">
                <div className="w-full md:w-1/2 lg:w-1/3">
                  <ProjectCard
                    title="Scratch Neural Network"
                    description="Built a Neural Network from scratch, with no external libraries, achieving 92% accuracy on the MNIST dataset"
                    tags={["Python", "Numpy"]}
                    link="https://github.com/hrishikeshsathyian/ScratchNN"
                  />
                </div>
                <div className="w-full md:w-1/2 lg:w-1/3">
                  <ProjectCard
                    title="TutorLink"
                    description="Built a website to connect students with tutors, allowing private tuition matching with 0 commission fees"
                    tags={["Python", "Django"]}
                    link="https://tutorlinksg.com"
                  />
                </div>
                <div className="w-full md:w-1/2 lg:w-1/3">
                  <ProjectCard
                    title="RouteJooz"
                    description="Designed and implemented a Multi Vehicle Route Optimisation platform for a local logistics company, minimising costs and improving delivery efficiency"
                    tags={["Python", "Google Maps API", "Numpy", "NextJS", "TailwindCSS"]}
                    link="https://route-jooz-frontend.vercel.app/"
                  />
                </div>
            </div>
          </div>
          <div className="mx-auto max-w-7xl border-l border-r border-dashed border-gray-700">
            <div className="pb-2 justify-center text-center">
              <h1 className="text-3xl font-bold text-white mt-4">blogs</h1>
              <p className="text-sm text-grey-200">trying to write my thoughts down on topics i care about!</p>
            </div>
            <div className="flex flex-row gap-4 pb-4 px-2">
                {/* TODO: Add blog cards here */}
            </div>
          </div>

        </motion.div>
      </main>
      </div>
      )}
    </div>

  );
}
