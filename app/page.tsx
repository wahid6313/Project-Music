import FeaturedCourses from "./components/FeaturedCourses";
import HeroSection from "./components/HeroSection";
import Instructor from "./components/Instructor";
import SlidingCards from "./components/SlidingCards";
import ViewContent from "./components/ViewContent";
import Webinar from "./components/Webinar";

export default function Home() {
  return (
    <div className="flex  flex-col justify-center items-center w-screen m-auto">
      {/* <h1 className=" text-4xl text-center  text-white">Hii wahid</h1> */}
      <HeroSection />

      <FeaturedCourses />
      <ViewContent />
      <SlidingCards />
      <Webinar />
      <Instructor />
    </div>
  );
}
