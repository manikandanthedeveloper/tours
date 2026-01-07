import { FaMinus, FaPlus } from "react-icons/fa";
import type { AccordianProps } from "../types/AccordianProps"

type AccordianComponentProps = {
    accordian: AccordianProps;
    toggleAccordianHandler: (id: number) => void;
    activeAccordian: number | null;
}

const AccordianItem: React.FC<AccordianComponentProps> = ({ accordian, toggleAccordianHandler, activeAccordian }) => {
    const { id, title, info } = accordian;

    return (
        <li key={id} className="w-full border border-gray-300">
            <div className="flex items-center justify-between bg-white p-4 rounded-md cursor-pointer">
                <span className="font-medium text-gray-900">{title}</span>
                <span className="text-gray-500 w-6 h-6 flex items-center justify-center" onClick={() => toggleAccordianHandler(id)}>{activeAccordian === id ? <FaMinus /> : <FaPlus />}</span>
            </div>
            <div className={`p-4 bg-white border-t border-gray-300 accordian-slide-down ${activeAccordian === id ? "" : "hidden"}`}>
                <p>{info}</p>
            </div>
        </li>
    )
}

export default AccordianItem