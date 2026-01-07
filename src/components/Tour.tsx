import { useState, useCallback, memo } from "react";
import type { TourProps } from "../types/TourProps"
import Button from "./Button"
import Card from "./Card"

type TourComponentProps = {
    tour: TourProps;
    onClickHandler: (id: string) => void;
}

const Tour: React.FC<TourComponentProps> = ({ tour, onClickHandler }) => {
    const { id, name, info, image, price } = tour;
    const [readMore, setReadmore] = useState<boolean>(false)
    const shortText = info.slice(0, 150);

    const setReadMoreHandler = useCallback(() => {
        setReadmore((prev) => !prev);
    }, []);

    return (
        <Card>
            <span className="absolute right-0 top-0 bg-green-500 text-white py-2 px-4">{price}</span>
            <div className="h-100 w-full overflow-hidden">
                <img src={image} alt={name} className="w-full h-full object-cover" />
            </div>
            <div className="p-4">
                <h2 className="text-[20px] mb-4">{name}</h2>
                <p className="text-[18px] mb-4">
                    {readMore ? info : shortText + "..."}
                </p>
                <span className="text-green-600 text[16px] block mb-4 cursor-pointer" onClick={setReadMoreHandler}>{readMore ? "Show less" : "Show more"}</span>
                <Button onClick={() => onClickHandler(id)}>Not interested</Button>
            </div>
        </Card>
    )
}

export default memo(Tour)