import Image from "next/image";
import data from "@/components/data.json";
import Title from "@/components/title";
import DestinationItem from "@/components/destination";

const images = {
    mobile: "/assets/destination/background-destination-mobile.jpg",
    tablet: "/assets/destination/background-destination-tablet.jpg",
    desktop: "/assets/destination/background-destination-desktop.jpg",
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
            <div className="container z-50 relative min-h-dvh grid place-items-center text-center lg:text-start">
                <div className=" mt-[12rem] ">
                    <Title idx="01" title="pick you destination" />
                    <DestinationItem destinations={data.destinations} />
                </div>
            </div>
        </section>
    );
}
