import { useEffect, useState } from "react";

interface UseFetchResult<T> {
	data: T | null;
	isLoading: boolean;
	isError: boolean;
	error: Error | null;
}

export const useFetch = <T>(url: string): UseFetchResult<T> => {
	const [data, setData] = useState<T | null>(null);
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [isError, setIsError] = useState<boolean>(false);
	const [error, setError] = useState<Error | null>(null);

	useEffect(() => {
		const fetchData = async () => {
			setIsLoading(true);
			setIsError(false);
			setError(null);

			try {
				const response = await fetch(url);

				if (!response.ok) {
					throw new Error(`HTTP error! status: ${response.status}`);
				}

				const result = await response.json();
				setData(result);
			} catch (err) {
				console.error("Fetch error:", err);
				setIsError(true);
				setError(
					err instanceof Error ? err : new Error("Unknown error")
				);
			} finally {
				setIsLoading(false);
			}
		};

		fetchData();
	}, [url]);

	return { data, isLoading, isError, error };
};
