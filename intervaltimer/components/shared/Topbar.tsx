'use client';

import React from 'react';
import HistoryButton from '@/components/topbar/HistoryButton';
import useHistory from '@/hooks/useHistory';

export default function Topbar() {
	const { pages, callback } = useHistory();
	const [previousPage, nextPage] = pages;

	return (
		<section>	
			<nav className="flex gap-4">
				<HistoryButton
					goTo={previousPage}
					className="text-base aspect-square w-8 rounded-full bg-black-90 flex items-center justify-center"
				>
					<i className="bi bi-chevron-left transform -translate-x-[2px]"></i>
				</HistoryButton>
				<HistoryButton
					goTo={nextPage}
					className="text-base aspect-square w-8 rounded-full bg-black-90 flex items-center justify-center"
				>
					<i className="bi bi-chevron-right transform translate-x-[2px]"></i>
				</HistoryButton>
			</nav>
		</section>
	);
}
