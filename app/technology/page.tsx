import Image from "next/image";
import data from "@/components/data.json";
import Title from "@/components/title";
import TechnologyItem from "@/components/technology";

const images = {
    mobile: "/assets/technology/background-technology-mobile.jpg",
    tablet: "/assets/technology/background-technology-tablet.jpg",
    desktop: "/assets/technology/background-technology-desktop.jpg",
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
            <div className="z-50 relative min-h-dvh ">
                <div className="w-[90%] max-w-[1400px] ml-auto mt-[10rem]">
                    <Title idx="03" title="space launch 101" />
                </div>
                <TechnologyItem technologies={data.technology} />
            </div>
        </section>
    );
}
