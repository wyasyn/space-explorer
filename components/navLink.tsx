"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLink({
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
        <li
            className={` flex gap-2 py-5 mr-4 uppercase text-sm lg:text-md ${
                isActive && " border-b-2 "
            }`}
        >
            <span>0{index}</span> <Link href={url}>{name}</Link>
        </li>
    );
}
