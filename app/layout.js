import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { ConvexClientProvider } from "@/components/convex-client-provider";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({subsets: ["latin"]});

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata = {
  title: "SplitPe",
  description: "The smartest way to split expenses with friends",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <link></link>
      </head>
      <body
      // ${geistSans.variable} ${geistMono.variable} antialiased
        className={`
          
          ${inter.className}
          `}
      >
        <ClerkProvider>

          <ConvexClientProvider>
        <Header/> 
        <main className="min-h-screen">
        
        {children}
        </main>
        </ConvexClientProvider>
        </ClerkProvider>
      </body>
    </html>
  );
}
