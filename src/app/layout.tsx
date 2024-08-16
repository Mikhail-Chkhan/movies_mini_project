import './globals.css';
import Providers from './providers';
import Header from "@/components/Header/Header";
import React from "react";
import {Metadata} from "next";
import {Inter} from "next/font/google";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
    title: "Movies",
    description: "A selection of films for every taste",
};

export default function RootLayout({children}: { children: React.ReactNode }) {
    return (
        <html lang="en">
        <body className={inter.className}>
        <Providers>

            <header>
                <Header/>
            </header>

            <main>
                {children}
            </main>

        </Providers>
        </body>
        </html>
    );
}