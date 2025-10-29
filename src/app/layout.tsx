import Footer from "@/components/layout/Footer";
import PageHeader from "@/components/layout/PageHeader";
import Sidebar from "@/components/layout/Sidebar";
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
            className={`bg-white text-black ${libreBaskerville.className}`}
        >
            <body className="p-6 flex min-h-screen flex-col items-center bg-white text-black gap-y-6">
                <div className="flex flex-row h-full justify-center gap-4 w-5/8 ">
                    <Sidebar />
                    <div className="flex flex-col space-y-3 text-sm h-full bg-white w-4/5">
                        <PageHeader />
                        {children}
                    </div>
                </div>
                <Footer />
            </body>
        </html>
    );
}
