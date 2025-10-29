import Footer from "@/components/layout/Footer";
import PageHeader from "@/components/layout/PageHeader";
import Sidebar from "@/components/layout/Sidebar";
import ThemeToggle from "@/components/layout/ThemeToggle";
import { ThemeProvider } from "next-themes";
import { Libre_Baskerville } from "next/font/google";
import "./globals.css";

const libreBaskerville = Libre_Baskerville({
    subsets: ["latin"],
    weight: ["400", "700"],
});

export const metadata = {
    title: "nico.dev",
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
            className={`bg-neutral-50 dark:bg-neutral-900 dark:text-white text-black ${libreBaskerville.className} transition-all duration-300`}
            suppressHydrationWarning
        >
            <body className="p-6 flex min-h-screen flex-col items-center gap-y-6 overflow-hidden">
                <ThemeProvider attribute="class">
                    <div className="flex flex-row h-full justify-center gap-4 w-5/8 ">
                        <Sidebar />
                        <div className="flex flex-col space-y-3 text-sm h-full w-4/5">
                            <div className="flex flex-row justify-between items-center">
                                <PageHeader />
                                <ThemeToggle />
                            </div>
                            {children}
                        </div>
                    </div>
                    <Footer />
                </ThemeProvider>
            </body>
        </html>
    );
}
