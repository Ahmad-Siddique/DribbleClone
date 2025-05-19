import React from 'react'
import MainContent from '../../../../../components/shots/shotsid/MainContent'
import LastSection from '../../../../../components/LastSection'
import GetInTouch from '../../../../../components/shots/shotsid/GetInTouch';

const page = () => {
  return (
    <div>
      <MainContent />
      <h2 className="text-gray-900 text-4xl md:text-6xl font-semibold font-['Source_Serif_4'] mb-8 text-center">
        More By Zajno
      </h2>
          <LastSection />
          <GetInTouch />
    </div>
  );
}

export default page