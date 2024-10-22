"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import Image from "next/image";

const musicContent = [
  {
    title: "Melodic Collaborations with Arijit Singh",
    description:
      "Join the journey of creating soulful melodies alongside one of India's most cherished voices. Arijit Singh's collaborations with talented composers and lyricists have given birth to timeless tracks. Experience the magic of musical teamwork, just like Arijit's iconic collaborations with Pritam, Mithoon, and other maestros.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white font-semibold text-xl">
        Melodic Collaborations
        {/* <div>
          <img src="https://images.genius.com/7e253fddd5ee3b1c8fd534de1593d9db.1000x1000x1.png">
            music image
          </img>

        </div> */}
      </div>
    ),
  },
  {
    title: "Live Magic: The Arijit Singh Experience",
    description:
      "Feel the power of music as it comes alive on stage. Arijit Singh’s live performances capture the hearts of millions with raw emotion and energy. Whether it's a soulful ballad or an electrifying anthem, see how Arijit masterfully connects with audiences in real time, creating unforgettable moments.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white font-semibold text-xl">
        Live Magic
      </div>
    ),
  },
  {
    title: "Timeless Hits of Arijit Singh",
    description:
      "Arijit Singh’s voice has become synonymous with romance and heartbreak. With chart-topping hits like 'Tum Hi Ho,' 'Raabta,' and 'Channa Mereya,' he has delivered unforgettable songs that have defined a generation. Relive the magic of Arijit’s greatest hits and see how he continues to evolve as an artist.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white font-semibold text-xl">
        Timeless Hits
      </div>
    ),
  },
  {
    title: "Emotional Depth: Arijit Singh's Ballads",
    description:
      "Arijit Singh’s voice has the rare ability to tap into deep emotions, making listeners feel every word he sings. From love to heartbreak, his ballads evoke a profound sense of connection. Dive into the world of emotional storytelling through music, just like Arijit’s moving performances.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white font-semibold text-xl">
        Emotional Depth
      </div>
    ),
  },
];

function ViewContent() {
  return (
    <div className="w-full">
      <StickyScroll content={musicContent} />
    </div>
  );
}

export default ViewContent;
