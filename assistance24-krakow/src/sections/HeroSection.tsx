import CallButton from "@/components/CallButton";
import Image from "next/image";
import React from "react";
import ScrollButton from "@/components/ScrollButton";
import NavBar from "@/components/NavBar";

type Props = {};

const HeroSection = (props: Props) => {
  return (
    <div className="flex-col w-full pb-28">
      <div className="flex-col items-center justify-center  min-h-[600px] bg-hero bg-no-repeat bg-cover bg-opacity-60">
        <div className="relative z-10 bg-black">
          <Image
            src="https://assistance24krakow.s3.eu-central-1.amazonaws.com/IMG-20230525-WA0002+(2).jpg"
            alt="Pomoc drogowa Kraków"
            fill
            className="z-10 backdrop-brightness-50"
          />
        </div>

        <NavBar />
        <h1 className="relative z-20 flex items-center justify-center p-24 mt-10 mb-6 text-3xl font-bold text-white md:p-16 whitespace-nowrap">
          Pomoc Drogowa Kraków
        </h1>
        <CallButton />
        <ScrollButton />
      </div>
      <div className="flex flex-col items-center justify-around max-w-full p-6 md:flex-row bg-primary-yellow ">
        <h3 className="mb-5 text-2xl font-bold md:mb-0">LAWETA KRAKÓW </h3>
        <h3 className="mb-5 text-2xl font-bold md:mb-0">HOLOWANIE</h3>
        <h3 className="mb-5 text-2xl font-bold md:mb-0">AUTO POMOC</h3>
        <h3 className="mb-5 text-2xl font-bold">ASSISTANCE</h3>
      </div>
    </div>
  );
};

export default HeroSection;
