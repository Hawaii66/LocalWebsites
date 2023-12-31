import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavigationBar from "@/components/NavigationBar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavigationBar /> {children}
        <Footer />
      </body>
    </html>
  );
}

//https://scontent-arn2-1.xx.fbcdn.net/v/t39.30808-6/386594507_643769294608054_5000521029222073685_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=3635dc&_nc_ohc=X0JXVo-XfjUAX-hg7Zm&_nc_ht=scontent-arn2-1.xx&oh=00_AfCqMunkpMAlXdvh6-HUJS4vHVCuny5hE3SmDw2ZGYPhag&oe=657C4DA8
//https://scontent-arn2-1.xx.fbcdn.net/v/t1.6435-9/92212574_3522695104467733_3918268891427504128_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=7f8c78&_nc_ohc=NjRpndBzZhUAX9-ach0&_nc_ht=scontent-arn2-1.xx&oh=00_AfDKzibB6Q4xu86yJ8mhqYpGQj6brIGYNlUGYPmYB-3IMg&oe=659EE73B
//https://dms-api.ntm.eu/api/v1/images/r2mzqwpj/smart/width/980/height/551/as/jpeg/redirect
//https://dms-api.ntm.eu/api/v1/images/r0302w9r/smart/width/980/height/551/as/webp
