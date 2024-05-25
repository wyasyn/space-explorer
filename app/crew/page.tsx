import Image from "next/image";
import crew from "@/components/data.json";

const images = {
    mobile: "/assets/crew/background-crew-mobile.jpg",
    tablet: "/assets/crew/background-crew-tablet.jpg",
    desktop: "/assets/crew/background-crew-desktop.jpg",
};

export default function Home() {
    return (
        <section className="relative min-h-dvh">
            <Image
                src={images.mobile}
                alt="background"
                className=" object-cover w-full h-full md:hidden"
                fill
            />
            <Image
                src={images.tablet}
                alt="background"
                className=" object-cover w-full h-full hidden md:block lg:hidden"
                fill
            />
            <Image
                src={images.desktop}
                alt="background"
                className=" object-cover w-full h-full hidden lg:block"
                fill
            />
            <div className="container z-50 relative min-h-dvh grid place-items-center">
                <div className=" flex flex-col gap-[5rem] lg:gap-[15rem] text-center lg:text-left items-center lg:flex-row lg:items-end ">
                    <div>
                        <h3
                            className={` font-normal text-sm font-barlowcondensed `}
                        >
                            crew
                        </h3>
                        <h1
                            className={`text-7xl my-[2rem]  text-white font-normal font-bellefair `}
                        >
                            SPACE
                        </h1>
                        <p className=" max-w-[50ch] ">text</p>
                    </div>
                    <div>part two</div>
                </div>
            </div>
        </section>
    );
}
