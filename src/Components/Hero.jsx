import React from 'react'
import hero from "../assets/hero.png"
import { TypeAnimation } from "react-type-animation";


const Hero = () => {

  const oh = async()=>{
    fetch('https://dummyjson.com/products')
    .then(res => res.json())
    .then(console.log);
}

  return (
    <div className='min-h-screen flex lg:flex-row justify-between items-center px-10 bg-gradient-to-b from-slate-300 sm:flex-col sm:h-full sm:w-full pb-20'>
      <div className='left flex flex-col items-center pl-[180px] pb-[180px] gap-[20px] '>
      <h1 className="text-black mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold mt-44 pb-10">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-800 to-blue-400 pb-10">
            Newer And
            Better , {" "}
        </span>
        <br></br>
        <TypeAnimation className="pb-10"
        sequence={[
            'GrandLine!',
            1000,
            'Technology!',
            1000,
            'Service!',
            1000,
            'Oppurtunities!',
            1000,
        ]}
        wrapper="span"
        speed={60}
        repeat={Infinity}
        />
        </h1>
        <button
        onClick={oh}
         className='w-[580px] h-[40px] rounded-3xl bg-gradient-to-r from-black to-blue-600 text-white hover:bg-none hover:text-black outline transition opacity-80'>
            Explore!
        </button>
    </div>
      <div className='right pr-13'>
        <img src={hero} className=' h-50 mr-7 pr-36' alt="hero-img" />
      </div>
    </div>
  )
}

export default Hero
