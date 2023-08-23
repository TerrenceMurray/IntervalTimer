import { Metadata } from 'next';
import React, { ReactNode } from 'react'
import { Inter } from "next/font/google";
import SidebarNavigation from '@/components/shared/SidebarNavigation';
import '@/app/globals.css';
import 'bootstrap-icons/font/bootstrap-icons.min.css';
import Topbar from '@/components/shared/Topbar';

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
	  <html lang='en'>
		  <body className={`${inter.className} w-full h-screen flex p-6 bg-black-100 text-white-100`}>
			  	<SidebarNavigation />
			  <main className='px-6 py-4 flex flex-col gap-10'>
				  <Topbar />
				  {children}
				</main>
		  </body>
	</html>
  )
}
