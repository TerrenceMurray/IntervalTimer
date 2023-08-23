'use client';
import React, { ReactNode } from 'react';
import { useRouter } from 'next/navigation';

interface Props {
	className?: string;
	children: ReactNode;
	direction: 'forward' | 'reverse';
}

/**
 * @param {string} className
 * @param {string} direction Select the direction through which you want to navigate through the history
 */

export default function HistoryButton({
	direction,
	className,
	children,
}: Props) {
	const router = useRouter();

	const onClickHandler = (): void => {
		direction === 'forward' ? router.forward() : router.back();
	};

	return (
		<button type="button" onClick={onClickHandler} className={className ?? ''}>
			{children}
		</button>
	);
}
