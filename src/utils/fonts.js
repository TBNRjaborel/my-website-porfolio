import { Geist, Geist_Mono, Poppins,Luckiest_Guy } from "next/font/google";


export const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});
  
export const geistMono = Geist_Mono({
variable: "--font-geist-mono",
subsets: ["latin"],
});

export const poppins = Poppins({
    variable: "--font-poppins",
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"], // adjust weights if needed
});

export const luckiestGuy = Luckiest_Guy({
    variable: "--font-luckiest-guy",
    subsets: ["latin"],
    weight: ["400"], // Luckiest Guy only has one weight
});