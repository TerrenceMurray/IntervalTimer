import { Metadata } from 'next';
import { Inter } from 'next/font/google';
import React, { ReactNode } from 'react'

const metadata: Metadata = {
    title: "Interval Timer",
    description: "An interval timer web application.",
	authors: {
		name: "Terrence Murray",
		url: "https://github.com/TerrenceMurray"
	}
}

const inter = Inter({
	subsets: ['latin'],
});

interface Props
{
	children: ReactNode;
}

export default function RootLayout({children}: Props) {
  return (
	<html lang="en">
		<body className={inter.className}>	
			{children}	  
		</body>
	</html>
  )
}
