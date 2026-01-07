import { useState } from "react";
import AccordianItems from "../components/AccordianItems";
import type { AccordianProps } from "../types/AccordianProps";
import { QUESTION_DATA } from "../data";

const AccordianPage = () => {
	const [accordian] = useState<AccordianProps[]>(QUESTION_DATA);
	const [activeAccordian, setActiveAccordian] = useState<number | null>(null);

	const toggleAccordianHandler = (id: number) => {
		if (activeAccordian === id) {
			setActiveAccordian(null);
		} else {
			setActiveAccordian(id);
		}
	}

	return (
		<div className="min-h-screen flex items-center justify-center max-w-2xl p-6 mx-auto">
			<div className="w-full p-6">
				<AccordianItems accordian={accordian} toggleAccordianHandler={toggleAccordianHandler} activeAccordian={activeAccordian} />
			</div>
		</div>
	);
};

export default AccordianPage;
