import { FaAngleDoubleRight } from "react-icons/fa"

const TabItem: React.FC<{ title: string, company: string, dates: string, duties: string[] }> = ({ title, company, dates, duties }) => {
    return (
        <div className="p-6">
            <h2 className="text-3xl font-bold mb-2">{title}</h2>
            <div className="bg-gray-200 text-black py-2 px-4 inline-block mb-4">{company}</div>
            <div className="text-[15px] mb-4 text-gray-400">{dates}</div>
            <ul className="flex flex-col mt-6">
                {duties.map((duty, index) => (<li key={index} className="grid  grid-cols-[auto_1fr] items-center mb-4 text-gray-500"><FaAngleDoubleRight size={20} className="text-green-800" /><p className="ms-6 text-[18px]">{duty}</p></li>))}
            </ul>
        </div>
    )
}

export default TabItem