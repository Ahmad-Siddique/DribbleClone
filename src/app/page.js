import Image from "next/image";
import HeroSection from "../../components/hero";
import FeaturedShotsSection from "../../components/featured-shots";
import DribbbleFilterBar from "../../components/Filters";
import Test from "../../components/test";
import Testimonial from "../../components/testimonial";
import FAQ from "../../components/FAQ";
import LastSection from "../../components/LastSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <div className="mt-48">
        <DribbbleFilterBar />
      </div>
      {/* <Test /> */}
      <FeaturedShotsSection />
      <Testimonial />
      <FAQ />
      <LastSection />
    </>
  );
}
