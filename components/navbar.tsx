import Image from "next/image";
import Link from "next/link";
import NavLink from "./navLink";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { Button } from "./ui/button";
import NavLinkMobile from "./navLinkMobile";

const navLinks = [
    {
        name: "home",
        url: "/",
    },
    {
        name: "destination",
        url: "/destination",
    },
    {
        name: "crew",
        url: "/crew",
    },
    {
        name: "technology",
        url: "/technology",
    },
];

export default function Navbar() {
    return (
        <header
            className={`fixed z-30 top-8 lg:left-auto max-w-[1400px] lg:w-[95%] left-8 right-8 md:right-0 text-lg font-barlowcondensed `}
        >
            <nav className="flex items-center justify-between w-full ">
                <div className=" flex items-center justify-between gap-12 w-full ">
                    <Link href="/">
                        <Image
                            width={24}
                            height={24}
                            src="/assets/shared/logo.svg"
                            alt="logo"
                            className=" block "
                        />
                        <span className=" sr-only ">logo</span>
                    </Link>
                    <div className=" hidden lg:block w-full h-[1px] bg-card -mr-5 z-40 relative " />
                </div>

                <div className=" md:hidden ">
                    <Sheet>
                        <SheetTrigger>
                            <Button
                                variant="ghost"
                                size="icon"
                                className=" hover:bg-background text-foreground hover:text-white "
                            >
                                <Menu className="h-5 w-5" />{" "}
                                <span className=" sr-only ">menu</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent className=" bg-foreground/15 backdrop-blur-sm text-white ">
                            <ul className=" flex flex-col gap-8 mt-[3rem] ">
                                {navLinks.map(({ name, url }, index) => (
                                    <NavLinkMobile
                                        name={name}
                                        url={url}
                                        index={index}
                                        key={name}
                                    />
                                ))}
                            </ul>
                        </SheetContent>
                    </Sheet>
                </div>

                <ul className=" hidden md:flex bg-white/5 gap-6 pl-[7rem] backdrop-blur-sm ">
                    {navLinks.map(({ name, url }, index) => (
                        <NavLink
                            key={name}
                            name={name}
                            url={url}
                            index={index}
                        />
                    ))}
                </ul>
            </nav>
        </header>
    );
}
