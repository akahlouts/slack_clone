import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { ConvexAuthNextjsServerProvider } from "@convex-dev/auth/nextjs/server";
import { ConvexClientProvider } from "@/components/convex-client-provider";
import { JotaiProvider } from "@/components/jotai-provider";

import { Modals } from "@/components/modals";
import { Toaster } from "@/components/ui/sonner";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Slack Clone",
  description:
    "A real-time messaging platform designed to enhance team communication and collaboration. Built with Next.js 14 and Convex, this app offers secure workspaces, organized channels, instant messaging, and emoji reactions, all tailored to facilitate seamless and efficient team interactions. Perfect for businesses and project teams seeking an open-source Slack alternative.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ConvexAuthNextjsServerProvider>
      <html lang="en">
        <body className={inter.className}>
          <ConvexClientProvider>
            <JotaiProvider>
              <Toaster />
              <Modals />
              {children}
            </JotaiProvider>
          </ConvexClientProvider>
        </body>
      </html>
    </ConvexAuthNextjsServerProvider>
  );
}
