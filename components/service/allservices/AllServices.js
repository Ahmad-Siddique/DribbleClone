
import { Suspense } from "react";
import ServiceFilter from "../ServiceFilter";

import CarousalCategory from "../../useable/CarousalCategory";
import ServiceDesign from "../ServiceDesign";
const AllServices = ({services}) => {
  return (
    <div className="px-4 sm:px-8">
      <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-8 mt-6 text-center">
        All  Services
      </h1>
      <Suspense fallback={<div>Loading filters...</div>}>
        <ServiceFilter />
      </Suspense>
          <ServiceDesign services={services} />
      <CarousalCategory />
    </div>
  );
};

export default AllServices;
