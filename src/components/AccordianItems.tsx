import type { AccordianProps } from "../types/AccordianProps"
import AccordianItem from "./AccordianItem"

type AccordianComponentProps = {
    accordian: AccordianProps[];
    toggleAccordianHandler: (id: number) => void;
    activeAccordian: number | null;
}

const AccordianItems: React.FC<AccordianComponentProps> = ({ accordian, toggleAccordianHandler, activeAccordian }) => {

    return (
        <ul className="flex items-center justify-between gap-4 flex-col">
            {accordian.map((item) => (
                <AccordianItem key={item.id} accordian={item} toggleAccordianHandler={toggleAccordianHandler} activeAccordian={activeAccordian} />
            ))}
        </ul>
    );
}

export default AccordianItems