"use client";

import { motion } from "framer-motion";
import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";

const services = [
  {
    num: "01",
    title: "Software Engineering",
    desc: "Crafting robust, scalable solutions through full-cycle software development. I specialize in building maintainable systems using modern architectures, clean code practices, and CI/CD pipelines.",
    href: "",
  },
  {
    num: "02",
    title: "Web Development",
    desc: "Building fast, responsive web applications with cutting-edge technologies like Next.js. I develop full-stack solutions featuring SSR optimization, REST APIs, and interactive frontends.",
    href: "",
  },
  {
    num: "03",
    title: "UI/UX Design",
    desc: "Interface design combines aesthetics and intuition. I create user-centric experiences through wireframing, prototyping, and usability testing. ",
    href: "",
  },
  {
    num: "04",
    title: "SEO",
    desc: "Driving organic growth through technical SEO audits and data-driven strategies. I optimize site structure, implement schema markup, and craft content strategies aligned with search intent. ",
    href: "",
  },
];

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex flex-col justify-center gap-6 group"
              >
                <div className="flex items-center justify-between">
                  <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                    {service.num}
                  </div>
                  <div className="w-[50px] h-[50px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex items-center justify-center hover:-rotate-45">
                    <Link href={service.href}>
                      <BsArrowDownRight className="text-primary text-2xl" />
                    </Link>
                  </div>
                </div>

                <h2 className="text-[38px] font-bold leading-non text-white group-hover:text-accent transition-all duration-500">{service.title}</h2>
                <p className="text-sm/8 text-white/60">{service.desc}</p>
                <div className="border-b border-white/20 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
