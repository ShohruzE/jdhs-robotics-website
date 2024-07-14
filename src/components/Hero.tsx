import React from 'react'

import hero1 from '../../public/images/hero-1.png'
import hero2 from '../../public/images/hero-2.png'
import hero3 from '../../public/images/hero-3.png'
import logoWithText from '../../public/images/2024-frc-333-logo-with-text.png'
import hammerheadHeroLogo from '../../public/images/hammer-head-logo-transparent.png';
import sponsorHeroText from '../../public/images/sponsor-hero-text.png';
import roboReplayBanner from '../../public/images/robo-replay-banner.png';

import Carousel from './ui/Carousel'

const Hero = () => {

  const IMAGES = [
    {
      "imageSrc": roboReplayBanner,
      "styles": {
        "format": "w-full flex justify-center items-center",
        "imageHeaderWidth": 568,
        "imageHeaderHeight": 225,
        "captionStyles": "w-1/2 flex justify-center items-center text-center drop-shadow-2xl"
      },
      "content": {
          "buttonText": "Register",
          "buttonText2": "Volunteer",
          "buttonLink": "https://sites.google.com/view/roboreplay24/registration",
          "buttonLink2": "https://sites.google.com/view/roboreplay24/volunteer"
      }
    },
    {
        "imageSrc": hero1,
        "styles": {
          "format": "container mx-auto flex flex-col items-end gap-12",
          "imageHeaderWidth": 568,
          "imageHeaderHeight": 225,
          "captionStyles": "flex flex-col items-end gap-9"
        },
        "content": {
            "imageHeaderSrc": logoWithText,
            "title": "",
            "description": "Driven by passion. Powered by innovation.",
            "buttonText": "Learn More",
            "buttonLink": "/about"
        }
    },
    {
        "imageSrc": hero2,
        "styles": {
          "format": "container mx-auto flex flex-col items-start gap-12",
          "imageHeaderWidth": 480,
          "imageHeaderHeight": 272,
          "captionStyles": "flex flex-col items-start gap-9 max-w-[475px]"
        },
        "content": {
            "imageHeaderSrc": hammerheadHeroLogo,
            "description": "Meet the team's 2024 robot, the culmination of a season full of trials and triumphs. Hammerhead takes the stage, boasting a unique pivot-mounted trolley system.",
            "buttonText": "View Robot",
            "buttonLink": "/robots/crescendo2024"
        }
    },
    {
        "imageSrc": hero3,
        "styles": {
          "format": "container mx-auto flex flex-col items-start gap-6",
          "imageHeaderWidth": 1010,
          "imageHeaderHeight": 186,
          "captionStyles": "flex flex-col items-start gap-9 max-w-[650px]"
        },
        "content": {
            "imageHeaderSrc": sponsorHeroText,
            "description": "Become part of an inclusive community where passion, collaboration, and competitive excellence define the next generation of STEAM leaders.",
            "buttonText": "Connect With Us",
            "buttonLink": "/about"
        }
    }
  ]

  return (
    <div>
      <Carousel 
        images={IMAGES} 
        autoSlide={false}
        autoSlideInterval={10_000}
      />
    </div>
  )
}

export default Hero