import React, { Suspense } from 'react'
import DribbbleFilterBar from '../../../components/Filters';
import TrendingDesigns from '../../../components/featured-shots';
import LastSection from '../../../components/LastSection';
import ShotsFilter from '../../../components/shots/ShotsFilter';
import ShotsFeaturedShots from '../../../components/shots/shots-featured-shots';

const page = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading filters...</div>}>
        <ShotsFilter />

        <ShotsFeaturedShots />
        <LastSection />
      </Suspense>
    </div>
  );
}

export default page