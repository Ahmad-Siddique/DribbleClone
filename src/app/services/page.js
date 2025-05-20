

import ServiceFilter from "../../../components/service/ServiceFilter";
import TrendingDesigns from "../../../components/featured-shots";
import CarousalCategory from "../../../components/useable/CarousalCategory";
import { Suspense } from "react";
const Services = () => {
  return (
    <div className="px-4 sm:px-8">
      <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-8 mt-6 text-center">
        All Services
      </h1>
      <Suspense fallback={<div>Loading filters...</div>}>
        <ServiceFilter />
      </Suspense>
      <TrendingDesigns />
      <CarousalCategory />
    </div>
  );
};

export default Services;
