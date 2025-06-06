import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import Sidenav from "@portfolio/components/page-layout/sidenav";
import "@portfolio/globals.css";
import type { Metadata } from "next";
import { Inter, Noto_Sans } from "next/font/google";
config.autoAddCss = false;

const inter = Inter({
    variable: "--font-inter",
    subsets: ["latin"],
    weight: ["100", "300", "400", "600"],
});

const notoSans = Noto_Sans({
    variable: "--font-noto-sans",
    subsets: ["latin"],
    style: ["normal", "italic"],
    weight: ["100", "400", "900"],
});

export const metadata: Metadata = {
    title: "AndysThings",
    description: "Andrew Taylor's Portfolio, now in React!",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${inter.variable} ${notoSans.variable} antialiased`}
            >
                <Sidenav />
                <main className="md:ml-40">{children}</main>
            </body>
        </html>
    );
}
