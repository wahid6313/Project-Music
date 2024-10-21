"use client";
import courseData from "../data/music_courses.json";
import { BackgroundGradient } from "./ui/background-gradient";
import Link from "next/link";
import { Button } from "./ui/moving-border";

interface Course {
  id: number;
  title: string;
  slug: string;
  description: string;
  price: number;
  instructor: string;
  isFeatured: boolean;
}

function FeaturedCourses() {
  const featuredCourses = courseData.courses.filter(
    (course: Course) => course.isFeatured
  );
  return (
    <div className=" bg-gray-900 w-full text-center ">
      <div>
        <h1 className="text-2xl text-green-700  mt-10"> Featured Music</h1>
        <p className="text-3xl mt-3 tracking-tight font-bold sm:text-4xl ">
          Listen with best Music
        </p>
      </div>
      <div className="mt-16 ">
        <div className="grid grid:col-1 lg:grid-cols-3 sm:grid-cols-2 gap-6 px-48 ">
          {featuredCourses.map((course: Course) => (
            <div key={course.id}>
              <BackgroundGradient className="rounded-lg bg-black overflow-hidden h-full">
                <div className="mt-6">
                  <p className="font-semibold py-2 ">{course.title}</p>
                  <p className="mb-6">{course.description}</p>
                  <div className="mb-4">
                    <Link
                      href={`/courses/${course.slug}`}
                      className="text-green-200"
                    >
                      More About Music{" "}
                    </Link>
                  </div>
                </div>
              </BackgroundGradient>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-16 mb-6 rounded-lg">
        <Link href="/viewMusic">
          <button className="px-6 py-4 font-semibold rounded-lg bg-black text-white border border-green-700 hover:bg-gray-900 hover:text-gray-300">
            View All Music
          </button>
        </Link>
      </div>
    </div>
  );
}

export default FeaturedCourses;
