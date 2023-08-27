import { usePathname } from 'next/navigation';
import { useCallback, useEffect, useRef, useState } from 'react';
import Stack from '@/lib/stack';


interface HistoryResult {
	pages: [Progress, Progress];
	callback: ProgressCallback;
}

export type Progress = string | null;
export type ProgressCallback = () => void;
type UseHistory = (homePath?: string) => HistoryResult;

/**
 * useHistory tracks records each route the user has navigated to and returns the
 * previous route and next route (where applicable).
 * @param {string} homePath (optional) The home page route. Default value of "/"
 * @returns {[string, string]} [prev, next] previous page and next page in a tuple
 */

export default function useHistory(homePath: string = '/'): HistoryResult {
	// Store next and previous history
	const [nextPage, setNextPage] = useState<Progress>(null);
	const [previousPage, setPreviousPage] = useState<Progress>(null);

	// Get the current page pathname
	const pathname = usePathname();

	// Store the current index in the history
	const historyIndexRef = useRef<number>(0);

	// Store the history stack
	const historyRef = useRef<Stack<string>>(new Stack());

	// Store the hook initialization state
	const initialisedRef = useRef<boolean>(false);

	// Initialise the history stack
	const initialiseStack = useCallback((): void => {
		// Add the home path to the history if it is empty and not on the home page
		if (historyRef.current.isEmpty && pathname !== homePath) {
			// Add the home path to the history
			historyRef.current.push(homePath);
			// Set the current index to
			historyIndexRef.current = historyRef.current.size;
		}
	}, [historyIndexRef, historyRef, pathname, homePath]);

	// Detect a change in pathname
	useEffect(() => {
		// Check if the user is navigating through the history
		if (historyIndexRef.current < historyRef.current.size) {
			// Reset the history stack
			historyRef.current = new Stack();
			pathname !== '' && historyRef.current.push(homePath);
			historyIndexRef.current = 1;
		}

		// Add the current page to the history stack

		// Check if on initialization, the user is not on the home page
		// then add the home path to the history if the are not.

		if (!initialisedRef.current) {
			// Do something if this is the first iteration

			// Initialise stack
			initialiseStack();

			initialisedRef.current = true;
		}

		// Increment the current index and push the current page to the history

		// Check if the user is navigating through the history
		if (historyIndexRef.current < historyRef.current.size) {
			// Reset the history
			initialiseStack();
		} else {
			historyRef.current.push(pathname);
			historyIndexRef.current = historyIndexRef.current + 1;
		}

		console.log(historyRef.current, historyIndexRef.current);
	}, [pathname, homePath, initialiseStack]);

	return {
		pages: [previousPage, nextPage],
		callback: (): void => {
			historyIndexRef.current = historyIndexRef.current + 1;
		},
	};
}
