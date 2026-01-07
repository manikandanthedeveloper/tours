import type { TabProps } from "../types/TabProps"

const TabsSidebar: React.FC<{ items: TabProps[] | undefined, active: string | undefined, setActive: (id: string) => void }> = ({ items, active, setActive }) => {
    return (
        <ul className="flex flex-col mt-4">
            {items?.map((item) => (
                <li key={item.id} className={`text-center px-4 py-3 cursor-pointer ${active === item.id && "border-l-4 border-green-600 text-green-600 font-semibold"}`} onClick={() => setActive(item.id)}>{item.company}</li>))}
        </ul>
    )
}

export default TabsSidebar