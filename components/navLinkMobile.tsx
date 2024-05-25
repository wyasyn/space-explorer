"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLinkMobile({
    name,
    url,
    index,
}: {
    url: string;
    name: string;
    index: number;
}) {
    const pathname = usePathname();
    const isActive = pathname === url;
    return (
        <li key={name}>
            <Link
                href={url}
                className={` ${
                    isActive ? "border-r-4 border-white" : ""
                }  hover:border-r-2 text-md flex items-center gap-3 uppercase transition-all duration-300 `}
            >
                <span className=" font-bold ">0{index}</span>
                <h3>{name}</h3>
            </Link>
        </li>
    );
}
