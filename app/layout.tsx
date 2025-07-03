import type React from "react"
import type { Metadata } from "next"
import "./globals.css"


export const metadata: Metadata = {
	title: 'Mohammed - Developer',
	description: '',
};
	
export default function RootLayout({ children }: { children: ReactNode }) {
	return ( 
		<html lang="en" className='scroll-smooth'>
			<body 
			className= "antialiased leading-8 overflow-x-hidden dark:bg-darkTheme dark:text-white "
			>
			{children}
			</body>
		</html>
	);
}
