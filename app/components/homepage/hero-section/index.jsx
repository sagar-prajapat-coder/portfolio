// @flow strict
"use client";

import { personalData } from "@/utils/data/personal-data";
import Image from "next/image";
import Link from "next/link";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { FaFacebook, FaInstagramSquare } from "react-icons/fa";
import { MdDownload } from "react-icons/md";
import { RiContactsFill } from "react-icons/ri";
import { Typewriter } from "react-simple-typewriter";

function HeroSection() {
  return (
    <section className="relative flex flex-col items-center justify-between py-4 lg:py-12">
      <Image
        src="/hero.svg"
        alt="Hero"
        width={1572}
        height={795}
        className="absolute -top-[98px] -z-10"
        priority
      />

      <div className="grid grid-cols-1 items-start lg:grid-cols-2 lg:gap-12 gap-y-8">
        <div className="order-2 lg:order-1 flex flex-col items-start justify-center p-2 pb-20 md:pb-10 lg:pt-10">
          <h1 className="text-3xl font-bold leading-10 text-white md:font-extrabold lg:text-[2.6rem] lg:leading-[3.5rem]">
            Hello, <br />
            This is{" "}
            <span className="text-pink-500">{personalData.name}</span>
            {`, I'm a Professional `}
            <span className="text-green-500 font-semibold">
              <Typewriter
                words={personalData.roles}
                loop={0}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </span>
            .
          </h1>

          <div className="my-12 flex items-center gap-5">
            <Link href={personalData.github} target="_blank" className="text-pink-500 transition-all hover:scale-125 duration-300">
              <BsGithub size={30} />
            </Link>
            <Link href={personalData.linkedIn} target="_blank" className="text-pink-500 transition-all hover:scale-125 duration-300">
              <BsLinkedin size={30} />
            </Link>
            <Link href={personalData.facebook} target="_blank" className="text-pink-500 transition-all hover:scale-125 duration-300">
              <FaFacebook size={30} />
            </Link>
            <Link href={personalData.twitter} target="_blank" className="text-pink-500 transition-all hover:scale-125 duration-300">
              <FaInstagramSquare size={30} />
            </Link>
          </div>

          <div className="flex items-center gap-3">
            <Link href="#contact" className="bg-gradient-to-r from-violet-600 to-pink-500 p-[1px] rounded-full">
              <button className="px-3 md:px-8 py-3 md:py-4 bg-[#0d1224] rounded-full text-xs md:text-sm font-semibold uppercase tracking-wider text-white flex items-center gap-1 hover:gap-3 transition-all">
                <span>Contact me</span>
                <RiContactsFill size={16} />
              </button>
            </Link>

            <Link
              href={personalData.resume}
              target="_blank"
              className="flex items-center gap-1 hover:gap-3 rounded-full bg-gradient-to-r from-pink-500 to-violet-600 px-3 md:px-8 py-3 md:py-4 text-xs md:text-sm font-semibold uppercase tracking-wider text-white transition-all"
            >
              <span>Get Resume</span>
              <MdDownload size={16} />
            </Link>
          </div>
        </div>

        {/* Right code block stays unchanged */}
      </div>
    </section>
  );
}

export default HeroSection;
