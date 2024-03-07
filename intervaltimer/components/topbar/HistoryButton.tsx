'use client';
import React, { ReactNode } from 'react';
import { useRouter } from 'next/navigation';
import { Progress } from '@/hooks/useHistory';

interface Props {
	className?: string;
	children: ReactNode;
	goTo: Progress;
}

/**
 * @param {string} className
 * @param {string} direction Select the direction through which you want to navigate through the history
 */

export default function HistoryButton({
	goTo,
	className,
	children,
}: Props) {
	const disabledStyles = 'opacity-50 cursor-not-allowed';
	const router = useRouter();

	const onClickHandler = (): void => {
		if (goTo !== null) router.push(goTo);
		console.log(goTo);
	};

	return (
		<button
			type="button"
			onClick={onClickHandler}
			className={`${className ?? ''} ${
				goTo === null && disabledStyles
			}`}
		>
			{children}
		</button>
	);
}
