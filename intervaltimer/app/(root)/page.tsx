import Carousel from '@/components/pages/discover/Carousel';
import React from 'react';

export default function DiscoverPage() {
	return (
		<section className="flex flex-col gap-10">
			<section>
				<h1 className="font-semibold text-2xl mb-2">
					Featured Interval Timers
				</h1>
				<h2 className="text-white-80">
					Most recently added interval timers by our team.
				</h2>
			</section>
			<section>
				<Carousel />
			</section>
		</section>
	);
}
