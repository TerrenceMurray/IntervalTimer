import { Metadata } from 'next';
import React, { ReactNode } from 'react'
import { Inter } from "next/font/google";

const inter = Inter({
	subsets: ["latin"]
});

export const metadata: Metadata = {
	title: "Interval Timer",
	description: "A simple interval timer",
}

interface Props
{
	children: ReactNode;
}

export default function RootLayout({ children } : Props) {
  return (
	  <html>
		  <body className={inter.className}>
			  	<main>
				  {children}
				</main>
		  </body>
	</html>
  )
}
