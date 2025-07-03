import type React from "react"
import type { Metadata } from "next"
import localFont from "next/font/local"
import "./globals.css"

const geistSans = localFont({
  src: "./fonts/GeistVF.woff2",
  variable: "--font-geist-sans",
  weight: "100 900",
})
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff2",
  variable: "--font-geist-mono",
  weight: "100 900",
})

export const metadata: Metadata = {
	title: 'Mohammed - Developer',
	description: '',
};
	
export default function RootLayout({ children }: { children: ReactNode }) {
	return ( 
		<html lang="en" className='scroll-smooth'>
			<body 
			className={'${geistSans.variable} ${geistMono.variable} antialiased leading-8 overflow-x-hidden dark:bg-darkTheme dark:text-white '}
			>
			{children}
			</body>
		</html>
	);
}
