import Image from "next/image";
import data from "@/components/data.json";
import Title from "@/components/title";
import CrewItem from "@/components/crew";

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
            <div className=" container z-50 relative min-h-dvh grid place-items-center text-center lg:text-start">
                <div className=" mt-[12rem] ">
                    <Title idx="02" title="Meet your crew" />
                    <CrewItem crew={data.crew} />
                </div>
            </div>
        </section>
    );
}
