'use client';

import React, { useState } from 'react'
import Link from 'next/link';

import robotLinks from '../../data/robots.json';

type DropdownMenuProps = {
  isDropdownOpen: boolean;
  setIsDropdownOpen: (isDropdownOpen: boolean) => void;
}

const DropdownMenu = ({ isDropdownOpen, setIsDropdownOpen }: DropdownMenuProps) => {

  const [isOffSeasonSelected, setIsOffSeasonSelected] = useState(false);

  return (
    <div 
      onMouseEnter={() => setIsDropdownOpen(true)}
      onMouseLeave={() => setIsDropdownOpen(false)}
      className="w-full bg-secondary text-primary border-b-2 border-primary py-16"
    >
      <div className="container mx-auto">
        <div className="flex justify-center items-center gap-12">
          <div className="flex flex-col text-2xl font-bold">
            <button onClick={() => setIsOffSeasonSelected(false)}>
              <h3 className={`text-accent py-10 pr-10 border-r-4 rounded hover:text-primary ${!isOffSeasonSelected ? "border-tertiary text-primary" : "border-inherit"}`}>COMPETITION</h3>
            </button>
            <button onClick={() => setIsOffSeasonSelected(true)} >
              <h3 className={`text-accent py-10 pr-10 border-r-4 rounded hover:text-primary ${isOffSeasonSelected ? "border-tertiary text-primary" : "border-inherit"}`}>OFF-SEASON</h3>
            </button>
          </div>
          <div className="grid grid-cols-3 gap-6 text-xl hover:text-primary">
              {!isOffSeasonSelected && robotLinks.seasons.map((season, index) => (
                <Link key={index} href={`robots/${season.route}`} className="group">
                  <span className="font-thin text-accentDark group-hover:text-primary">{season.year} </span> 
                  <span className="font-bold text-accentDark group-hover:text-primary">{season.name}</span>
                </Link>
              ))}
              {isOffSeasonSelected && robotLinks.offSeasons.map((offSeason, index) => (
                <Link key={index} href={`robots/${offSeason.route}`} className="group">
                  <span className="font-thin text-accentDark group-hover:text-primary">{offSeason.year} </span> 
                  <span className="font-bold text-accentDark group-hover:text-primary">{offSeason.name}</span>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default DropdownMenu