import { ThemeProvider } from "next-themes";
import { Libre_Baskerville } from "next/font/google";
import { Suspense } from "react";
import Footer from "../components/layout/Footer";
import PageHeader from "../components/layout/PageHeader";
import Sidebar from "../components/layout/Sidebar";
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
            className={`bg-neutral-50 dark:bg-neutral-900 dark:text-white text-black ${libreBaskerville.className} sm:text-sm md:text-md text-xs transition-all duration-300`}
            suppressHydrationWarning
        >
            <head>
                <meta name="apple-mobile-web-app-title" content="nico sadia" />
            </head>
            <body className="p-6 flex min-h-screen w-screen flex-col items-center gap-y-6 overflow-x-hidden">
                <ThemeProvider attribute="class">
                    <div className="flex flex-row h-full justify-center gap-4 w-5/6 lg:w-4/7">
                        <Sidebar />
                        <div className="flex flex-col space-y-6 w-full h-full">
                            <PageHeader />
                            <span className="absolute top-0 right-0 md:m-6 m-2">
                                <ThemeToggle />
                            </span>
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
