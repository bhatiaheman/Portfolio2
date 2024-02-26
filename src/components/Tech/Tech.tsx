"use client";
 
import React from "react";

import { skills } from "@/constants/constant";

export const Tech = () => {
  return (
    <section className='max-container'>

      <h1 className='head-text'>
        Hello, I'm <span className='blue-gradient_text font-semibold drop-shadow'>Heman</span>
      </h1>

      <div className='mt-5 flex flex-col gap-3 text-slate-500'>
        <p>Software Engineer based in India. Currently in 3 year in K.R Mangalam University</p>
      </div>

      <div className='py-10 flex flex-col'>
        <h3 className='subhead-text'>My Skills</h3>

        <div className='mt-16 flex flex-wrap gap-12'>
          {skills.map((skill) => (
            <div className='block-container w-20 h-20'>
              <div className='btn-back rounded-full'/>
              <div className='btn-front rounded-full flex justify-center items-center'>
                <img src={skill.imageUrl} 
                  alt={skill.name}
                  className='w-1/2 h-1/2 object-contain'
                />
              </div>
            </div>
          ))}
        </div>

      </div>
      


    </section>
  )
}
