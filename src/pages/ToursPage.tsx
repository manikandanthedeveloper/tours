import { useCallback, useEffect, useState } from 'react';
import Loader from '../components/Loader';
import MessageAlert from '../components/MessageAlert';
import Tours from '../components/Tours'
import type { TourProps } from '../types/TourProps';

const url = 'https://www.course-api.com/react-tours-project';

const ToursPage = () => {
    const [tours, setTours] = useState<TourProps[]>([]);
    const [isLoading, setisLoading] = useState<boolean>(false)
    const [isError, setIsError] = useState<boolean>(false)

    const fetchTours = useCallback(async () => {
        setisLoading(true);
        try {
            const response = await fetch(url);

            if (!response.ok) {
                throw new Error('Failed fetch tour');
            }

            setisLoading(false)
            setTours(await response.json());

        } catch (error) {
            console.log(error);
            setIsError(true);
        }
    }, []);

    useEffect(() => {
        fetchTours();
    }, [fetchTours])

    const onRemoveHandler = (id: string) => {
        setTours((prevState) => prevState.filter((t) => t.id !== id));
    };

    const handleRefresh = () => {
        fetchTours();
    };

    if (isLoading) return <Loader />;

    if (isError) return <MessageAlert type="danger" text="Unable to fetch data" />

    return <Tours tours={tours} onRemove={onRemoveHandler} onRefresh={handleRefresh} />
}

export default ToursPage