import Link from "next/link";
import { Spotlight } from "./ui/Spotlight";

import { Button } from "./ui/moving-border";

function HeroSection() {
  return (
    <div className="  w-full  text-black overflow-hidden ">
      <Spotlight className="-top-40 md:left-60 md:top-70" fill="white" />
      {/* <div className="absolute inset-0 -z-10 h-full w-full dark:bg-black dark:bg-[radial-gradient(#000_1px,#000px)]  dark:bg-[size:20px_20px] bg-[radial-gradient(#444649_1px,transparent_1px)] [background-size:16px_16px]" /> */}
      <div className=" w-full text-center p-4   relative">
        <h1 className="mt-20 mb-6 text-6xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50">
          The Rhythm of Every Soul
        </h1>
        <p className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-xl mx-auto">
          The deep connection between music and human emotion. Every beat and
          melody resonates with the pulse of our inner selves, expressing
          feelings we can't always put into words.
        </p>
        <div className="mt-10 text-white  w-50 items-center mb-10">
          <Link href={"/music"}>
            <Button
              borderRadius="1.75rem"
              className="font-bold dark-bg-black text-white dark-text-white border-neutral-200 dark:border-slate-800 "
            >
              Explore Music
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
