import FeaturedCourses from "./components/FeaturedCourses";
import HeroSection from "./components/HeroSection";
import SlidingCards from "./components/SlidingCards";
import ViewContent from "./components/ViewContent";

export default function Home() {
  return (
    <div className="flex  flex-col justify-center items-center w-screen m-auto">
      {/* <h1 className=" text-4xl text-center  text-white">Hii wahid</h1> */}
      <HeroSection />

      <FeaturedCourses />
      <ViewContent />
      <SlidingCards />
    </div>
  );
}
