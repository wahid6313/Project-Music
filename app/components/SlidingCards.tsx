"use client";
import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const musicSlidingCards = [
  {
    quote:
      "Joining the music school revolutionized my entire approach to music. The instructors are not only skilled but incredibly passionate, helping me discover my unique sound and musical identity. Their world-class expertise has truly transformed my journey as a musician.",
    name: "Alex Johnson",
    title: "Guitar Student",
  },
  {
    quote:
      "Learning from these experienced musicians has expanded my musical horizons in ways I never thought possible. The lessons are not only challenging but incredibly rewarding, pushing me to grow beyond my limits.",
    name: "Samantha Green",
    title: "Vocal Student",
  },
  {
    quote:
      "The structured learning environment has allowed me to progress at a rapid pace. I feel more confident in my abilities as a pianist, and the encouragement I receive has been essential to my musical growth.",
    name: "David Lee",
    title: "Piano Student",
  },
  {
    quote:
      "The passion of the instructors is evident in every lesson. They’ve not only helped me improve technically but have guided me in finding my own musical expression. I have never felt more supported in my musical journey.",
    name: "Emily White",
    title: "Violin Student",
  },
  {
    quote:
      "One-on-one instruction here is invaluable. The detailed feedback and expert guidance have elevated my drumming skills to a whole new level. My technique and confidence as a performer have improved immensely.",
    name: "Michael Brown",
    title: "Drum Student",
  },
  {
    quote:
      "The encouragement I receive from the teachers is beyond what I expected. I’ve been able to master complex pieces faster than I imagined, thanks to the structured approach and expert guidance.",
    name: "Sophia Taylor",
    title: "Flute Student",
  },
  {
    quote:
      "Being a part of this music school feels like being part of a close-knit family. Everyone is dedicated to helping you succeed, and the level of personal support and attention I’ve received has made all the difference.",
    name: "Ryan Carter",
    title: "Bass Guitar Student",
  },
];

function SlidingCards() {
  return (
    <div className="h-[40rem] w-full dark:bg-black dark:bg-grid-white/[0.08] relative flex flex-col items-center justify-center overflow-hidden">
      <div className="font-semibold text-4xl my-14 text-center w-full">
        <h2>Hear Our Harmony: Voices Of Success</h2>
      </div>
      <div className="flex flex-col items-center justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
        <InfiniteMovingCards
          items={musicSlidingCards}
          direction="right"
          speed="slow"
        />
      </div>
    </div>
  );
}

export default SlidingCards;
