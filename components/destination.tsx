"use client";
import { useState } from "react";
import Image from "next/image";

const DestinationItem = ({ destinations }: DestinationList) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToSlide = (index: number) => {
        setCurrentIndex(index);
    };

    return (
        <div className=" flex flex-col lg:flex-row gap-[2rem] lg:gap-[7rem] mt-[5rem] ">
            <div>
                <Image
                    width={480}
                    height={480}
                    src={destinations[currentIndex].images.png}
                    alt={`Slide ${currentIndex}`}
                />
            </div>
            <div>
                <div className=" flex items-center gap-4 justify-center lg:justify-start ">
                    {destinations.map((item: Destination, index: number) => (
                        <span
                            key={index}
                            className={` font-barlowcondensed pb-1 cursor-pointer ${
                                index === currentIndex ? " border-b " : ""
                            }`}
                            onClick={() => goToSlide(index)}
                        >
                            {item.name}
                        </span>
                    ))}
                </div>
                <div>
                    <h1 className=" font-bellefair text-[56px] md:text-[80px] uppercase lg:text-[100px] my-4 ">
                        {destinations[currentIndex].name}
                    </h1>
                    <p className=" max-w-[50ch] ">
                        {destinations[currentIndex].description}
                    </p>
                    <div className=" border-t border-card mt-8 py-8 flex md:justify-between px-[2rem] md:items-center flex-col md:flex-row gap-8 lg:gap-[3rem] ">
                        <div>
                            <h3 className=" font-barlowcondensed text-[14px] ">
                                AVG. DISTANCE
                            </h3>
                            <p className=" font-bellefair text-[28px] uppercase ">
                                {destinations[currentIndex].distance}
                            </p>
                        </div>
                        <div>
                            <h3 className=" font-barlowcondensed text-[14px] ">
                                Est. travel time
                            </h3>
                            <p className=" font-bellefair text-[28px] uppercase ">
                                {destinations[currentIndex].travel}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DestinationItem;
