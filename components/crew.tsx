"use client";
import { useState } from "react";
import Image from "next/image";

const CrewItem = ({ crew }: CrewList) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToSlide = (index: number) => {
        setCurrentIndex(index);
    };

    return (
        <div className=" text-center lg:text-start flex flex-col lg:flex-row gap-[2rem] lg:gap-[7rem] mt-[5rem] ">
            <div>
                <div className=" flex flex-col items-center lg:items-start ">
                    <h3 className=" uppercase lg:text-[32px] md:text-[24px] text-[18px] text-card ">
                        {crew[currentIndex].role}
                    </h3>
                    <h1 className=" text-white font-bellefair text-[24px] md:text-[40px] uppercase lg:text-[56px] my-4 max-w-[20ch] ">
                        {crew[currentIndex].name}
                    </h1>
                    <p className=" max-w-[50ch] mb-8 text-pretty ">
                        {crew[currentIndex].bio}
                    </p>
                </div>
                <div className=" flex items-center gap-4 justify-center lg:justify-start ">
                    {crew.map((_, index: number) => (
                        <span
                            key={index}
                            className={` w-2 h-2 rounded-full cursor-pointer ${
                                index === currentIndex
                                    ? " bg-white "
                                    : "bg-card"
                            }`}
                            onClick={() => goToSlide(index)}
                        />
                    ))}
                </div>
            </div>
            <div className="relative">
                <Image
                    width={480}
                    height={480}
                    src={crew[currentIndex].images.png}
                    alt={`Slide ${currentIndex}`}
                />
                <div className=" absolute bg-gradient-to-t w-full left-0 bottom-0 from-background h-1/2 " />
            </div>
        </div>
    );
};

export default CrewItem;
