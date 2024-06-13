"use client"; // This is a client component 👈🏽
import Image from "next/image";
import { FaPlus } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";
import { FaRegCirclePlay } from "react-icons/fa6";
import Body from "../Body/Body";

import React, { useEffect, useState } from "react";

interface Props {}
const HomePage: React.FC<Props> = ({}) => {
  return (
    <div>
      <div className="ms-[32px] xl:ms-[175px] me-[32px] xl:me-[175px]">
        {/* Navbar */}
        <div className="mt-[40px]">
          <div className="flex w-full h-auto justify-between">
            <div className="flex items-center">
              <Image
                width={117}
                height={34.41}
                src="/img/Group.png"
                alt="group"
              />
              <div className="hidden ms-[40px] xl:flex  gap-x-6">
                <a
                  href="#home"
                  className="hover:text-[#FF5555] font-bold font-[ClashDisplay] text-[20px] leading-[26px]"
                >
                  Home
                </a>
                <a
                  href="#about"
                  className="hover:text-[#FF5555] font-bold font-[ClashDisplay] text-[20px] leading-[26px]"
                >
                  About Us
                </a>
                <a
                  href="#pricing"
                  className="hover:text-[#FF5555] font-bold font-[ClashDisplay] text-[20px] leading-[26px]"
                >
                  Pricing
                </a>
                <a
                  href="#features"
                  className="hover:text-[#FF5555] font-bold font-[ClashDisplay] text-[20px] leading-[26px]"
                >
                  Features
                </a>
              </div>
            </div>
            <button className="w-[90px] xl:w-[180px] h-[40px] xl:h-[60px] bg-black text-white">
              Download
            </button>
          </div>
        </div>
        {/* Top Component */}
        <div
          id="home"
          className="flex flex-col-reverse xl:flex-row w-full relative"
        >
          <div className="w-full xl:w-1/2 mt-[115px]">
            <div className="relative">
              <Image
                width={427}
                height={337}
                className="absolute left-[30px] top-[-147px]"
                src="/img/gradient-frames.png"
                alt="gradient-frames"
              />
              <p className="slide-up-fade-in text-bold relative z-10 text-black leading-[64px] text-[64px] font-[ClashDisplay]">
                Make The Best Financial Decisions
              </p>
              <p className="slide-up-fade-in font-medium font-[ClashDisplay] opacity-50 text-[18px] leading-[28px] text-[#000000] mt-[24px]">
                Cum Et Convallis Risus Placerat Aliquam, Nunc. Scelerisque
                Aliquet Faucibus Tincidunt Eu Adipiscing Sociis Arcu Lorem
                Porttitor.
              </p>
              <Image
                width={48}
                height={48}
                className="invisible xl:visible absolute left-[-102px] top-[-93px]"
                src="/img/top-star-1.png"
                alt="top-star-1"
              />
              <Image
                width={48}
                height={48}
                className="absolute invisible xl:visible right-[-646px] top-[-144px]"
                src="/img/top-star-2.png"
                alt="top-star-2"
              />
              <Image
                width={48}
                height={48}
                className="absolute invisible xl:visible left-[122px] bottom-[-179px]"
                src="/img/top-star-3.png"
                alt="top-star-3"
              />
            </div>

            <div className="flex items-center gap-x-10 w-auto h-auto mt-[24px]">
              <div className="flex items-center px-[23px] py-[16px] justify-between w-[180px] h-[60px] border-1  bg-black">
                <p className="text-white text-[18px] leading-[28px] font-medium font-[ClashDisplay]">
                  Get Started
                </p>
                <FaLongArrowAltRight color="white" size={26} />
              </div>
              <div className="w-auto h-auto flex items-center gap-x-3.5">
                <FaRegCirclePlay color="black" size={24} />
                <p className="text-[18px] leading-[28px] font-medium">
                  Watch Video
                </p>
              </div>
            </div>
            <Image
              src="/img/Group-zig-zag.png"
              alt="Group-zig-zag"
              width={569}
              height={357}
            />
          </div>
          <div className="w-full xl:w-auto flex xl:block justify-center xl:justify-start relative xl:absolute xl:right-[-200px] xl:bottom-0">
            <Image
              src="/img/mobile-phone.png"
              alt="phone"
              width={725}
              height={725}
            />
          </div>
        </div>
      </div>
      <Body />
    </div>
  );
};
export default HomePage;
