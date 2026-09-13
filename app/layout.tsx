import type { Metadata } from "next";
import "./globals.css";
import { StoreProvider } from "@/components/StoreProvider";

export const metadata: Metadata = {
  title: "Duy Hảo | Điện máy - Nội thất",
  description: "Cửa hàng Điện Máy - Trang Trí Nội Thất Duy Hảo",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="vi">
      <body>
        <StoreProvider>{children}</StoreProvider>
      </body>
    </html>
  );
}