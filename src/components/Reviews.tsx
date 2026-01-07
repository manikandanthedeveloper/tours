import type { ReviewProps } from "../types/ReviewProps"
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa"

type ReviewComponentProp = {
    review: ReviewProps,
    previousPerson: () => void,
    nextPerson: () => void,
    randomPerson: () => void,
}
const Reviews: React.FC<ReviewComponentProp> = ({ review, previousPerson, nextPerson, randomPerson }) => {
    const { name, image, job, text } = review;


    return (
        <div className="flex flex-col items-center py-6 review-fade">
            <div className="relative inline-block">
                <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-blue-600">
                    <img src={image} alt={name} className="w-full h-full object-cover" />
                </div>
                <div className="w-10 h-10 rounded-full bg-blue-600 absolute -top-1 left-5 text-white z-20 flex items-center justify-center">
                    <FaQuoteRight />
                </div>
            </div>
            <h1 className="text-2xl text-center mt-4 mb-1">{name}</h1>
            <p className="text-gray-400 uppercase text-[12px] text-center">{job}</p>
            <p className="my-4 text-center text-gray-500 text-[15px]">{text}</p>
            <ul className="flex gap-4 mb-4">
                <li className="cursor-pointer" onClick={previousPerson}>
                    <FaChevronLeft size={30} />
                </li>
                <li className="cursor-pointer" onClick={nextPerson}>
                    <FaChevronRight size={30} />
                </li>
            </ul>
            <button
                className="px-4 py-2 bg-blue-500 text-white cursor-pointer"
                onClick={randomPerson}
            >
                Surprise me
            </button>
        </div>
    );
}

export default Reviews