import { useEffect, useState } from "react"
import type { TabProps } from "../types/TabProps"
import TabsSidebar from "../components/TabsSidebar";
import TabItems from "../components/TabItems";
import Loader from "../components/Loader";
import MessageAlert from "../components/MessageAlert";
const url = 'https://www.course-api.com/react-tabs-project';

const TabPage = () => {
    const [tabs, setTabs] = useState<TabProps[]>();
    const [errors, setErrors] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [activeIndex, setActiveIndex] = useState<string | undefined>(undefined)

    useEffect(() => {
        const fetchTabs = async () => {
            try {
                setIsLoading(true);
                const response = await fetch(url);

                if (!response.ok) {
                    setErrors(true);
                }

                const tabItems = await response.json();

                setTabs(tabItems);
                setErrors(false);
                setActiveIndex(tabItems[0].id);
                setIsLoading(false);
            } catch (error) {
                console.log(`Internal error: ${error}`);
                setErrors(true);
            } finally {
                setErrors(false);
                setIsLoading(false);
            }
        }

        fetchTabs()
    }, []);

    if (isLoading) return <Loader />

    if (errors) return <MessageAlert type="danger" text="Unable fetch data" />

    return (
        <section className="container mx-auto my-15">
            <main className="flex border border-gray-200 bg-white p-6">
                <aside className="flex-1/4">
                    <TabsSidebar items={tabs} active={activeIndex} setActive={setActiveIndex} />
                </aside>
                <div className="flex-3/4">
                    <TabItems items={tabs} active={activeIndex} />
                </div>
            </main>
        </section>
    )
}

export default TabPage