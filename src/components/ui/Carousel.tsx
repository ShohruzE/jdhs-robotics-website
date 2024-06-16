'use client';

import React, { useState, useEffect } from 'react'
import Image, { StaticImageData } from 'next/image';
import { ArrowLeft, ArrowRight } from 'lucide-react';

type CarouselProps = {
  images: StaticImageData[]
  autoSlide?: boolean
  autoSlideInterval?: number
}

const Carousel = ({ images, autoSlide = false, autoSlideInterval = 5000 }: CarouselProps) => {

  const [imageIndex, setImageIndex] = useState(0);

  console.log(images);

  function previousImage() {
    setImageIndex((index) => {
      if (index === 0) {
        return images.length - 1
      }
      return index - 1
    });
  }

  function nextImage() {
    setImageIndex((index) => {
      if (index === images.length - 1) {
        return 0
      }
      return index + 1
    });
  }

  useEffect(() => {
    if (!autoSlide) return

    const slideInterval = setInterval(nextImage, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, [])

  return (
    <div className="w-full h-screen relative">
      <div className="w-full h-screen flex overflow-hidden">
        {images.map((image, index) => (
          <Image 
            key={index}
            src={image.src}
            width={image.width}
            height={image.height}
            alt={`carousel hero image ${index + 1}`}
            className={`w-full h-screen object-cover block shrink-0 grow-0 transition duration-1000 ease-in-out delay-200`}
            style={{ transform: `translateX(-${imageIndex * 100}%)`}}
          />
        ))}
      </div>
      <button 
        onClick={previousImage}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-secondary text-primary px-2 py-1 rounded-lg hover:bg-primary">
          <ArrowLeft size={24} />
      </button>
      <button 
        onClick={nextImage}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-secondary text-primary px-2 py-1 rounded-lg hover:bg-primary">
          <ArrowRight size={24} />
      </button>
      <div className="absolute bottom-[1px] left-1/2 -translate-x-1/2 flex gap-4">
        {images.map((_, index) => (
          <button 
            key={index}
            onClick={() => setImageIndex(index)}
            onMouseEnter={() => clearInterval(autoSlideInterval)}
            className={`w-40 h-3 bg-[rgb(255,255,255,0.5)] hover:bg-secondary transition-all ${imageIndex === index ? "bg-[rgb(255,255,255)]" : ""}`}
          />
        ))}
      </div>
    </div>
  )
}

export default Carousel