"use client";
import React from "react";
import { SparklesCore } from "./ui/sparkles";
import { Spotlight } from "./ui/Spotlight";
import { MovingBorderDemo } from "./ButtonMoving";
import { Wavy } from "./Wavy";
function HeroSection() {
  return (
    <div className="h-[40rem] relative w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
        <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className="w-full absolute inset-0 h-screen">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>
      <h1 className="md:text-7xl text-3xl lg:text-6xl font-bold text-center text-white relative z-20">
        Build great products
      </h1>
      <div className="mt-9">

      <MovingBorderDemo/>
      </div>
      
    </div>
  )
}

export default HeroSection