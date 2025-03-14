"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import React, { useState } from "react";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import {
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
  {
    num: "01",
    category: "fullstack",
    title: "SensAi",
    description:
      "A full-stack AI Career Coach that provides personalized advice, resume optimization, interview prep, etc.",
    stack: [
      { name: "Next.js" },
      { name: "Tailwind CSS" },
      { name: "PostgreSQL" },
    ],
    image: "/assets/work/thumb1.png",
    github: "https://github.com/TienNguyen2210/sensai",
  },
  {
    num: "02",
    category: "fullstack",
    title: "EPManange",
    description:
      "A full-stack project management web application for teams to plan, track, and collaborate on projects seamlessly.",
    stack: [{ name: "Next.js" }, { name: "Node.js" }, { name: "AWS" }],
    image: "/assets/work/thumb2.png",
    github: "https://github.com/TienNguyen2210/project-management",
  },
  {
    num: "03",
    category: "fullstack",
    title: "EVFinder",
    description:
      "A mobile app that is developed to help users find EV charging stations near their location by using the Google Maps API.",
    stack: [{ name: "React Native" }, { name: "CSS3" }, { name: "Firebase" }],
    image: "/assets/work/thumb3.png",
    github: "https://github.com/TienNguyen2210/EV-Charging-Station-App",
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    setProject(projects[swiper.activeIndex]);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto rounded-[30px] bg-black/40 p-12 xl:p-24">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[27px]">
              <div className="text-8xl leading-none font-extrabold text-transparent  text-yellow-300">
                {project.num}
              </div>
              <h2 className="text-[30px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category} project —
              </h2>
              <h3 className="text-[30px] font-bold leading-non text-red-400 group-hover:text-accent transition-all duration-500">
                {project.title}
              </h3>
              <p className="text-white/60">{project.description}</p>
              <ul className="flex flex-wrap gap-4">
                {project.stack.map((item, index) => (
                  <li key={index} className="text-xl text-accent">
                    {item.name}
                    {index !== project.stack.length - 1 && ","}
                  </li>
                ))}
              </ul>

              <div className="border border-white/20"></div>

              <div className="flex items-center gap-4">
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[60px] h-[60px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-4xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github Repo</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>

          <div className="w-full xl:w-[50%]">
            <Swiper
              slidesPerView={1}
              spaceBetween={30}
              onSlideChange={handleSlideChange}
              className="xl:h-[520px] mb-12"
            >
              {projects.map((project, index) => (
                <SwiperSlide key={index} className="w-full">
                  <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                    {/* image */}
                    <div className="w-full h-full">
                      <Image
                        src={project.image}
                        alt=""
                        fill
                        objectFit="cover"
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[cal(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex items-center justify-center transition-all duration-300"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
