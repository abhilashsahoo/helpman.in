import Image from "next/image";
import HeroSection from "./components/Home/Hero";
import ConstructionSection from "./components/Home/ConstructionSection";
import HowItWorks from "./components/Home/How";
import TestimonialsSection from "./components/Home/Testimonial";

export default function Home() {
  return (
    <>
   <HeroSection/>
<ConstructionSection/>
<HowItWorks/>
<TestimonialsSection/>
</>
  );
}
