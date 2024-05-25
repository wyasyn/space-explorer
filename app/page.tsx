import Image from "next/image";
import Link from "next/link";

const images = {
    mobile: "/assets/home/background-home-mobile.jpg",
    tablet: "/assets/home/background-home-tablet.jpg",
    desktop: "/assets/home/background-home-desktop.jpg",
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
                            className={` font-normal text-md lg:text-[1.8rem] font-barlowcondensed `}
                        >
                            SO, YOU WANT TO TRAVEL TO
                        </h3>
                        <h1 className=" leading-none scroll-m-20 text-5xl lg:text-[9.375rem] my-[1.5rem]  text-white  font-bellefair ">
                            SPACE
                        </h1>
                        <p className=" max-w-[50ch] ">
                            Let’s face it; if you want to go to space, you might
                            as well genuinely go to outer space and not hover
                            kind of on the edge of it. Well sit back, and relax
                            because we’ll give you a truly out of this world
                            experience!
                        </p>
                    </div>
                    <Link
                        href="/destination"
                        className=" relative cursor-pointer group "
                    >
                        <div
                            className={` grid place-items-center aspect-square bg-white w-fit text-background p-[3rem] rounded-full text-[20px] font-bellefair lg:text-[32px] tracking-wider  `}
                        >
                            EXPLORE
                        </div>
                        <div className=" opacity-0 group-hover:opacity-100 transition-all duration-300 absolute w-[150%] bg-white/15 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 aspect-square rounded-full " />
                    </Link>
                </div>
            </div>
        </section>
    );
}
