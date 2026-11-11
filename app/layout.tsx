import { ThemeProvider } from "next-themes";
import { Libre_Baskerville } from "next/font/google";
import { Suspense } from "react";
import Footer from "../components/layout/Footer";
import SiteHeader from "../components/layout/SiteHeader";
import ThemeToggle from "../components/layout/ThemeToggle";
import "./globals.css";
import LoadingScreen from "./loading";

const libreBaskerville = Libre_Baskerville({
    subsets: ["latin"],
    weight: ["400", "700"],
});

const siteName = "nicosadia.me";
export const metadata = {
    title: { template: `%s | ${siteName}`, default: siteName },
    description: "Personal site of Nico Sadia",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html
            lang="en"
            className={`bg-neutral-50 dark:bg-neutral-900 dark:text-white text-black ${libreBaskerville.className} text-sm sm:text-base transition-all duration-300`}
            suppressHydrationWarning
        >
            <head>
                <meta name="apple-mobile-web-app-title" content="nico sadia" />
            </head>
            <body className="flex min-h-screen w-screen flex-col items-center gap-y-6 overflow-x-hidden px-4 py-6 sm:p-6">
                <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
                    <div className="flex flex-row h-full justify-center gap-4 w-full lg:w-4/7">
                        <div className="flex flex-col space-y-6 w-full h-full">
                            <SiteHeader />
                            <Suspense fallback={<LoadingScreen />}>
                                {children}
                            </Suspense>
                        </div>
                    </div>
                    <Footer />
                </ThemeProvider>
            </body>
        </html>
    );
}
