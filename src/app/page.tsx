import HeroSection from "@/Components/HeroSection";
import { SignUpPage } from "@/Components/SignUpPage";

import { Wavy } from "@/Components/Wavy";
import {Card3D} from '@/Components/Card3D'
import Image from "next/image";
import { Card3DPin } from "@/Components/Card3DPin";
import { CardGrdi } from "@/Components/CardGrdi";
import Navbar from "@/Components/Navbar";



export default function Home() {
  return (
    <div >
      
        {/* <Wavy /> */}
        <Navbar/>
        <HeroSection />
<h1>Next react</h1>
<SignUpPage/>
<div className="flex gap-7 bg-slate-200 mt-7">

<Card3D/>
<Card3D/>
<Card3D/>
</div>
<div className="flex gap-3 bg-slate-200 ">

<Card3DPin/>
<Card3DPin/>
<Card3DPin/>
</div>
<div className="flex w-full justify-around bg-slate-200">

<CardGrdi/>
<CardGrdi/>
<CardGrdi/>
</div>

      
    </div>
  );
}
