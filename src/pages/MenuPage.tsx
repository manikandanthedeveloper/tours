import { useState } from "react"
import MenuItems from "../components/MenuItems"
import { MENU_DATA } from "../data"
import type { MenuProps } from "../types/MenuProps";
import CategoryMenu from "../components/CategoryMenu";
const allCategories = ['all', ...new Set(MENU_DATA.map((item: MenuProps) => item.category))];

const MenuPage = () => {
    const [menus, setMenu] = useState<MenuProps[]>(MENU_DATA);
    const [categories] = useState<string[]>(allCategories)

    const onSelectCategory = (category: string) => {
        if (category === 'all') {
            setMenu(MENU_DATA);
            return;
        }

        const filterdProducts: MenuProps[] = MENU_DATA.filter((item) => item.category === category);
        setMenu(filterdProducts);
    }

    return <div className="container mx-auto">
        <div className="mt-8">
            <h1 className="text-center text-2xl">Out Menu</h1>
            <div className="w-20 h-1 mx-auto mt-4 bg-amber-500"></div>
        </div>
        <CategoryMenu categories={categories} onSelectCategory={onSelectCategory} />
        <MenuItems menus={menus} />
    </div>
}

export default MenuPage