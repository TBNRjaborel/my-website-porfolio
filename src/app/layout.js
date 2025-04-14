import {geistSans, geistMono} from '@/utils/fonts'
import "./globals.css";

export const metadata = {
  title: "Gabriel Magdugo",
  description: "A personal portfolio website showcasing my work and skills.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
