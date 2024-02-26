"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { Projects } from "@/constants/constant";
import Link from "next/link";

export default function Project() {
  return (


    <section className='max-container'>
    <h1 className='head-text'>
      My <span className='blue-gradient_text font-semibold drop-shadow'>Projects</span>
    </h1>

    <div className='mt-5 flex flex-col gap-3 text-slate-500'>
      <p>Made some projects based on some self learning purpose. Feel free to see codeBase and contribute to it</p>
    </div>




    <CardContainer className="inter-var flex flex-wrap">

      {Projects.map((project) => (


        <div key={project.id} className="flex flex-col md:flex-row gap-2 mb-4">

            <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full sm:w-[20rem] h-auto rounded-xl p-6 border mb-4 ">

                    
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-neutral-600 dark:text-white"
            >
              {project.title}
            </CardItem>


            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
            >
              {project.description}
            </CardItem>


            <CardItem translateZ="100" className="w-full mt-4">
              <Image
                src={project.image}
                height="200"
                width="200"
                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt="thumbnail"
              />
            </CardItem>

            <div className="flex justify-between items-center mt-20">
              <CardItem
                translateZ={20}
                as="button"
                className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
              >
                <Link href={project.code}>
                  Code
                </Link>
              </CardItem>


              <CardItem
                translateZ={20}
                as="button"
                className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
              >
                <Link href={project.linkUrl}>
                  LiveLink
                </Link>
              </CardItem>
            </div>
            </CardBody>
          </div>
          
    ))}

      
    </CardContainer>

    </section>
  );
}
