import { Caveat, Poppins } from "next/font/google";
import "./globals.css";
import EventProvider from "@/contexts/EventContext";




export const metadata = {
  title: "Meu Evento",
  description: "",
};

const poppins = Poppins({
  weight: ["100", "200", "300","400","500","600","700","800","900"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

const caveat = Caveat({
  weight: ["400", "500", "600", "700"], 
  subsets: ["latin"],
  variable: "--font-caveat",
});

export default function RootLayout({ children }) {
  return (
    <EventProvider>
    <html lang="pt-br">
      <body
        className={`${poppins.variable} ${caveat.variable}antialiased`}> {children}</body>
    </html>
    </EventProvider>
  );
}
