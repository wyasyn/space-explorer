import type { Metadata } from "next";
import { Barlow, Barlow_Condensed, Bellefair } from "next/font/google";
import "./globals.css";

import { cn } from "@/lib/utils";
import Navbar from "@/components/navbar";

export const barlow = Barlow({
    weight: ["400", "500", "600", "700", "800"],
    subsets: ["latin"],
    variable: "--font-barlow",
});

export const barlowCondensed = Barlow_Condensed({
    weight: ["400", "500", "600", "700", "800"],
    subsets: ["latin"],
    variable: "--font-barlow-condensed",
});

export const belleFair = Bellefair({
    weight: ["400"],
    subsets: ["latin"],
    variable: "--font-belle-fair",
});

export const metadata: Metadata = {
    title: "Galactic Frontier: Exploring the Cosmos",
    description:
        "Dive into the vast expanse of the universe with Galactic Frontier. Your ultimate destination for the latest news, in-depth articles, and stunning visuals of space exploration. From groundbreaking missions and astronomical discoveries to expert analyses and interactive resources, we bring the wonders of the cosmos closer to home. Join us on a journey beyond our planet and into the unknown, where every visit sparks curiosity and fuels the imagination.",
    icons: {
        icon: "/assets/fav.png",
        apple: "/assets/fav.png",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body
                className={cn(
                    "min-h-screen font-barlow antialiased",
                    barlow.variable,
                    barlowCondensed.variable,
                    belleFair.variable
                )}
            >
                <Navbar />
                {children}
            </body>
        </html>
    );
}
