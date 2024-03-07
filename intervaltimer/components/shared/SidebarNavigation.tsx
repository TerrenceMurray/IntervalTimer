'use client';

import React from 'react';
import Link from 'next/link';
import { pages } from '@/lib/constants/pages';
import { usePathname } from 'next/navigation';
import LogoIcon from '@/public/assets/logo.svg';
import Image from 'next/image';

export default function SidebarNavigation() {
	const pathname = usePathname();

	const activeButtonStyles = 'text-black-100 bg-blue-100 hover:bg-blue-80';

	return (
		<aside className="h-full px-6 py-5 w-68">
			<nav className="flex flex-col gap-10">
				<h1 className="font-semibold text-lg">
					<Link href="/" className="flex gap-4">
						<Image
							width={15.36}
							height={18}
							src={LogoIcon}
							alt="logo icon"
						/>
						<h1>Interval Timer</h1>
					</Link>
				</h1>
				<ul className="flex flex-col gap-4 text-white-80">
					{pages.map((page, index) => {
						const isActive =
							(pathname.includes(page.href) &&
								page.href.length > 1) ||
							pathname === page.href;
						return (
							<li key={index}>
								<Link
									href={`${page.href}`}
									className={` ${
										isActive
											? activeButtonStyles
											: 'hover:text-blue-80'
									} flex gap-4 px-6 py-4 rounded-md hover:transition-all`}
								>
									<i className={page.icon}></i>
									<p>{page.title}</p>
								</Link>
							</li>
						);
					})}
				</ul>
			</nav>
		</aside>
	);
}
