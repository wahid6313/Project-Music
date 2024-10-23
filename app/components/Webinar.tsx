"use client";
import Link from "next/link";
import { HoverEffect } from "./ui/card-hover-effect";

const featuredWebinars = [
  {
    title: "Aplle Music",
    description:
      "A technology company that builds economic infrastructure for the internet.",
    link: "https://applemusic.com",
  },
  {
    title: "Netflix",
    description:
      "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
    link: "https://netflix.com",
  },
  {
    title: "Spotify",
    description:
      "A multinational technology company that specializes in Internet-related services and products.",
    link: "https://spotify.com",
  },
  {
    title: "Wynk Music",
    description:
      "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
    link: "https://wynkmusic.com",
  },
  {
    title: "Jio Savan",
    description:
      "A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
    link: "https://jiosavan.com",
  },
  {
    title: "Google",
    description:
      "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
    link: "https://google.com",
  },
];

function Webinar() {
  return (
    <div className="flex flex-col justify-center items-center dark:bg-black w-full">
      <div className="text-center mt-20 dark:bg-black">
        <h2 className="text-gray-600 text-2xl font-bold">Featured Webinar</h2>
        <p className="text-4xl font-bold mt-4 mb-10">
          Enhance Your Musical Journey
        </p>
      </div>
      <div className="max-w-full mx-auto px-20 ">
        <HoverEffect
          items={featuredWebinars.map((Webinar) => ({
            title: Webinar.title,
            description: Webinar.description,
            link: Webinar.link,
          }))}
        />
      </div>
      <div className="flex  items-center justify-center">
        <Link href="https://www.youtube.com/channel/UCtFOW7jJXChfFNoucRFqRmw">
          <button className="px-6 py-4 font-semibold rounded-lg bg-black text-white border border-gray-700 hover:bg-gray-900 hover:text-gray-300  mt-6 ">
            View All Webinars
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Webinar;
