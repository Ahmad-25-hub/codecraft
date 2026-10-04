import type { Metadata, Viewport } from "next";
import "@fontsource-variable/geist/wght.css";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(
    "https://codecraft-digital-studio.muhammad25-mhd.chatgpt.site",
  ),
  title: "CodeCraft — Crafting Digital Experiences",
  description:
    "CodeCraft is a digital studio focused on web development, UI/UX design, web applications, and modern digital experiences.",
  openGraph: {
    title: "CodeCraft — Crafting Digital Experiences",
    description:
      "A creative technology studio bringing design and development together. Websites, digital products, and experiences, thoughtfully crafted.",
    type: "website",
    siteName: "CodeCraft",
    locale: "en_US",
  },
  twitter: {
    card: "summary",
    title: "CodeCraft — Crafting Digital Experiences",
  },
  icons: { icon: "/favicon.svg" },
};
export const viewport: Viewport = { themeColor: "#0A0A0A" };

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
