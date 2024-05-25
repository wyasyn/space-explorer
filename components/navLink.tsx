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
        <li>
            <Link
                href={url}
                className={` flex items-center text-[1rem] tracking-wide gap-2 py-5 mr-4 uppercase lg:text-md ${
                    isActive && " border-b-2 border-white text-white "
                }`}
            >
                <span>0{index}</span> <h3>{name}</h3>
            </Link>
        </li>
    );
}
