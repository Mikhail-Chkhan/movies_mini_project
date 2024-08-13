import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
    title: "Movies",
    description: "A selection of films for every taste",
};
type PropType = { children: React.ReactNode; }
export default function RootLayout({children}: Readonly<PropType>) {
    return (
        <html lang="en">
        <Header/>
        <body className={inter.className}>{children}</body>
        </html>
    );
}
