// src/app/layout.tsx

import { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/NavBar";
import AuthProvider from "../components/AuthProvider";
import ThemeProvider from "../components/ThemeProvider"; // Import the ThemeProvider

export const metadata: Metadata = {
  title: "InstagramWeb",
  description: "Created by students of SPŠE Zochova 9, Bratislava",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sk">
      <body>
        <ThemeProvider> {/* Wrap the layout with ThemeProvider */}
          <AuthProvider> {/* Keep AuthProvider as it is */}
            <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
              <main style={{ flexGrow: 1 }}>{children}</main>
            </div>
            <Navbar /> {/* Place the Navbar here */}
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
