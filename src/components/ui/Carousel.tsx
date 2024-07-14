'use client';

import React, { useState, useEffect } from 'react'
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';

type CarouselProps = {
  images: ImageProps[]
  autoSlide?: boolean
  autoSlideInterval?: number
}

type ImageProps = {
  imageSrc: StaticImageData
  styles: {
    format: string
    imageHeaderWidth?: number | undefined
    imageHeaderHeight?: number | undefined
    titleStyles?: string | undefined
    captionStyles: string
  }
  content: {
    imageHeaderSrc?: StaticImageData | undefined
    title?: string
    description?: string
    buttonText?: string | undefined
    buttonText2?: string | undefined
    buttonLink?: string | undefined
    buttonLink2?: string | undefined
  }
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
          <div
            key={index} 
            className={`w-full h-screen object-cover block shrink-0 grow-0 transition duration-1000 ease-in-out delay-200`}
            style={{ transform: `translateX(-${imageIndex * 100}%)`}}
          >
            <Image 
              key={index}
              src={image.imageSrc}
              alt={`carousel hero image ${index + 1}`}
              className="w-full h-screen object-cover"
            />
            <div className="absolute inset-0 flex items-center">
              <div className={`${image.styles.format}`}>
                {image.content.imageHeaderSrc && (
                  <Image 
                    src={image.content.imageHeaderSrc}
                    width={image.styles.imageHeaderWidth || 568}
                    height={image.styles.imageHeaderHeight || 225}
                    alt="logo with text"
                  />
                )}
                {image.content.title && (
                  <h1 className={`${image.styles.titleStyles}`}>{image.content.title}</h1>
                )}
                {image.content.description && (
                  <div className={`${image.styles.captionStyles}`}>
                    <p className="font-light text-2xl text-secondary">{image.content.description}</p>
                    <button className="bg-secondary text-primary font-bold text-xl px-12 py-1 rounded-lg hover:bg-accent">
                      <Link href={`${image.content.buttonLink}`}>{image.content.buttonText}</Link>
                    </button>
                </div>
                )}
                {/* If on first slide, render special robo replay banner */}
                {image.content.buttonText2 && (
                  <div className={`${image.styles.captionStyles}`}>
                    <Link href="https://sites.google.com/view/roboreplay24/registration?authuser=0" target="_blank" className="w-full bg-secondary text-primary font-black text-2xl uppercase drop-shadow-2xl py-[2px] hover:bg-primary hover:text-secondary">Register</Link>
                    <Link href="https://sites.google.com/view/roboreplay24/volunteer?authuser=0" target="_blank" className="w-full bg-[rgb(200,166,77)] text-secondary font-black text-2xl uppercase drop-shadow-2xl py-[2px] hover:bg-primary hover:text-secondary">Volunteer</Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
        <button 
          onClick={previousImage}
          className="group overflow-hidden absolute top-1/2 left-0 transform -translate-y-1/2 bg-secondaryOpaque text-tertiary h-44 w-7 rounded-tr-lg rounded-br-lg transition-all duration-300 hover:bg-secondary hover:w-14">
            <div className="relative left-0 transition-all duration-300 group-hover:left-5">
              <ChevronLeft size={35} strokeWidth={3} />
            </div>
        </button>
        <button 
          onClick={nextImage}
          className="overflow-hidden absolute top-1/2 right-0 transform -translate-y-1/2 bg-secondaryOpaque text-tertiary h-44 w-7 rounded-tl-lg rounded-bl-lg transition-all duration-300 hover:bg-secondary hover:w-14">
            <div>
              <ChevronRight size={35} strokeWidth={3} />
            </div>
        </button>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex gap-4">
          {images.map((_, index) => (
            <button 
              key={index}
              onClick={() => setImageIndex(index)}
              onMouseEnter={() => clearInterval(autoSlideInterval)}
              className={`w-40 h-3 ${imageIndex == index ? "bg-secondary" : "bg-secondaryOpaque"} hover:bg-secondary transition duration-1000 ease-in-out`}
            />
          ))}
        </div>
    </div>
  )
}

export default Carousel