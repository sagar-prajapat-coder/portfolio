import { GoogleTagManager } from "@next/third-parties/google";
import { Inter } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/footer";
import ScrollToTop from "./components/helper/scroll-to-top";
import Navbar from "./components/navbar";
import "./css/card.scss";
import "./css/globals.scss";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Sagar Prajapati | Full Stack Developer",
  description: "Sagar Prajapati – Full Stack Developer skilled in Node.js, React, MongoDB, APIs, and Backend Systems.",
  keywords: [
    "Sagar Prajapati",
    "Full Stack Developer",
    "Node.js Developer",
    "React Developer",
    "Backend Developer India"
  ],
  openGraph: {
    title: "Sagar Prajapati | Full Stack Developer",
    description: "Professional portfolio of Sagar Prajapati",
    url: "https://sagar-portfolio-lilac.vercel.app/",
    siteName: "Sagar Portfolio",
    type: "website",
  }
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ToastContainer />
        <main className="min-h-screen relative mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] text-white sm:overflow-x-hidden">
          <Navbar />
          {children}
          <ScrollToTop />
        </main>
        <Footer />
      </body>
      <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM} />
    </html>
  );
}


