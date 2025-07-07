import React, { Suspense } from "react";


import ShotsFilter from "../ShotsFilter";
import LastSection from "../../LastSection";
import ShotsDesign from "../ShotsDesign";
const AllShots = ({shots}) => {
  return (
    <div>
      <Suspense fallback={<div>Loading filters...</div>}>
        <ShotsFilter />

        <ShotsDesign shots={shots} />
        <LastSection />
      </Suspense>
    </div>
  );
};

export default AllShots;
