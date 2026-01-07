import { useState } from "react"
import type { ReviewProps } from "../types/ReviewProps";

import { REVIEW_DATA } from '../data';
import Reviews from "../components/Reviews";

const ReviewPage = () => {
    const [index, setIndex] = useState<number>(0);
    const review: ReviewProps = REVIEW_DATA[index]

    const checkNumber: (num: number) => number = (num: number) => {
        if (num > REVIEW_DATA.length - 1) return 0;

        if (num < 0) return REVIEW_DATA.length - 1;

        return num;
    }

    const previousPerson: () => void = () => {
        setIndex((index) => {
            const newIndex = index - 1;

            return checkNumber(newIndex);
        })
    }

    const nextPerson: () => void = () => {
        setIndex((index) => {
            const newIndex = index + 1;
            return checkNumber(newIndex);
        });
    }

    const randomPerson: () => void = () => {
        let randomNumber = Math.floor(Math.random() * REVIEW_DATA.length);
        if (randomNumber === index) {
            randomNumber = index + 1;
        }
        setIndex(checkNumber(randomNumber));
    };

    return (
        <div className="min-h-screen flex items-center justify-center max-w-2xl p-6 mx-auto">
            <div className="bg-white shadow-2xl w-full p-6 border border-gray-300">
                <Reviews key={index} review={review} previousPerson={previousPerson} nextPerson={nextPerson} randomPerson={randomPerson} />
            </div>
        </div>
    )
}

export default ReviewPage
