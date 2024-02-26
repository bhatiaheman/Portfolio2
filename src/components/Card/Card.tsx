"use client";
import React from "react";
import { BackgroundGradient } from "../ui/background-gradient";

import Image from "next/image";
import { Cards } from "@/constants/constant";

export function Card() {
  return (
    <div>

      <h3 className="text-3xl p-8">What we make</h3>

    <div className="flex flex-col md:flex-row  gap-8 items-center justify-center ">
      {
        Cards.map((card) => (
            
                <div className="flex flex-col items-center justify-center  w-full md:w-1/2">
                    <BackgroundGradient className=" rounded-[22px] max-w-sm  p-4  sm:p-10 bg-white dark:bg-zinc-900 h-[25rem] md:h-96 w-full md:w-80">
                
                        <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
                            {card.title}
                        </p>

                        <p className="text-sm text-neutral-600 dark:text-neutral-400">
                            {card.content}
                        </p>
                    </BackgroundGradient>
                </div>
           
        ))
      }
    </div>
     
    </div>
  );
}
