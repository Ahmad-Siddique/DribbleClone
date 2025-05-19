import React from 'react'
import DribbbleFilterBar from '../../../components/Filters';
import TrendingDesigns from '../../../components/featured-shots';
import LastSection from '../../../components/LastSection';
import ShotsFilter from '../../../components/shots/ShotsFilter';
import ShotsFeaturedShots from '../../../components/shots/shots-featured-shots';

const page = () => {
  return (
    <div>
          <ShotsFilter />
          <ShotsFeaturedShots />
          <LastSection />
    </div>
  );
}

export default page