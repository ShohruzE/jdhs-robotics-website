import React from 'react'
import Image from 'next/image'

import sponsorBloomberg from '../../public/images/sponsor-bloomberg.png';
import sponsorNYCFirst from '../../public/images/sponsor-nycfirst.png';
import sponsorJDHS from '../../public/images/sponsor-jdhs.png';
import sponsorOptimum from '../../public/images/sponsor-optimum.png';

const SponsorBar = () => {

  const SPONSORS = [sponsorNYCFirst, sponsorBloomberg, sponsorJDHS, sponsorOptimum]

  return (
    <div className="sponsor-bar overflow-hidden border-primary border-b-2">
      <div className="flex gap-1 whitespace-nowrap animate-scroll2">
        {SPONSORS.concat(SPONSORS.concat(SPONSORS)).map((sponsor, index) => (
          <Image
            key={index} 
            src={sponsor}
            height={134}
            alt={`sponsor ${index + 1}`}
            className=""
          />
        ))}
        {SPONSORS.concat(SPONSORS.concat(SPONSORS)).map((sponsor, index) => (
          <Image
            key={index} 
            src={sponsor}
            height={134}
            alt={`sponsor ${index + 1}`}
            className=""
          />
        ))}
      </div>
    </div>
  )
}

export default SponsorBar