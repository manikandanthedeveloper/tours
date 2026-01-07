import type { TabProps } from "../types/TabProps"
import TabItem from "./TabItem"

const TabItems: React.FC<{ items: TabProps[] | undefined, active: string | undefined }> = ({ items, active }) => {
    const item: TabProps | undefined = items?.find((item) => item.id === active);
    if (!item) return null;
    const { company, dates, duties, title } = item;

    return (
        <div className="flex flex-col">
            <TabItem company={company} dates={dates} duties={duties} title={title} />
        </div>
    )
}

export default TabItems