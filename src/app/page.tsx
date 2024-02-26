"use client";

import { Meteors } from "@/components/ui/meteors";
import { TypewriterEffect, TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import { WavyBackground } from "@/components/ui/wavy-background";
import { words } from "@/constants/constant";
import Link from "next/link";
import { Card } from "../components/Card/Card";
;
export default function Home() {
 
  return (

    <main className="h-screen relative">

      <div className="flex flex-col items-center justify-center h-[50rem] ">
        <WavyBackground className="max-w-4xl mx-auto pb-40">
        <p className="text-neutral-600 dark:text-neutral-200 text-2xl sm:text-base pt-24  ">
          Hey I' am Heman Bhatia
        </p>
        
        <TypewriterEffect words={words} />
        </WavyBackground>
        <Meteors number={40}/>

        <div className="flex flex-row relative items-center justify-center gap-28  pb-20 ">
          <button className="inline-flex h-12 animate-shimmer items-center justify-center  rounded-full border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
            <Link href="/Projects">
              Projects
            </Link>
          </button>


          <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-full border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
            <Link href="/Contact">
              Contact
            </Link>
          </button>
        </div>
 
      </div>

      <Card />
 
    </main>

    
    
  );
}
