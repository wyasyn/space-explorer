"use client";
import { useState } from "react";
import Image from "next/image";

const TechnologyItem = ({ technologies }: TechnologyList) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToSlide = (index: number) => {
        setCurrentIndex(index);
    };

    return (
        <div className=" mt-[5rem] lg:mt-[10rem] flex flex-col gap-[3rem]  lg:flex-row-reverse lg:gap-[5rem] lg:items-end ">
            <div>
                <Image
                    width={480}
                    height={480}
                    src={technologies[currentIndex].images.landscape}
                    alt={`Slide ${currentIndex}`}
                    className=" w-full lg:hidden "
                />
                <Image
                    width={480}
                    height={480}
                    src={technologies[currentIndex].images.portrait}
                    alt={`Slide ${currentIndex}`}
                    className=" hidden lg:block "
                />
            </div>
            <div className=" lg:flex lg:gap-10 lg:items-center ">
                <div className=" flex items-center gap-12 justify-center lg:justify-start lg:flex-col lg:items-start ">
                    {technologies.map((item: Technology, index: number) => (
                        <span
                            key={index}
                            className={` grid w-[40px] aspect-square md:w-[56px] lg:w-[70px] text-[18px] md:text-[32px] rounded-full cursor-pointer place-items-center ${
                                index === currentIndex
                                    ? " bg-white text-background  "
                                    : " bg-background text-white border border-card"
                            }`}
                            onClick={() => goToSlide(index)}
                        >
                            {index + 1}
                        </span>
                    ))}
                </div>

                <div className=" flex flex-col items-center lg:items-start ">
                    <h3 className=" mt-5 lg:mt-0 uppercase lg:text-[32px] md:text-[24px] text-[18px] text-card ">
                        the terminology ...
                    </h3>
                    <h1 className=" text-white font-bellefair text-[24px] md:text-[40px] uppercase lg:text-[56px] my-8 max-w-[20ch] ">
                        {technologies[currentIndex].name}
                    </h1>
                    <p className=" max-w-[50ch] mb-8 text-pretty text-center lg:text-start ">
                        {technologies[currentIndex].description}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default TechnologyItem;
