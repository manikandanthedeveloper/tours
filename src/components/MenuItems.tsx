import type { MenuProps } from "../types/MenuProps"
import MenuItem from "./MenuItem"

type MenuItemsComponent = { menus: MenuProps[] }

const MenuItems: React.FC<MenuItemsComponent> = ({ menus }) => {

    return (
        <div className="grid grid-cols-3 gap-4">
            {menus.map((menu: MenuProps) => (<MenuItem menu={menu} key={menu.id} />))}
        </div>
    )
}

export default MenuItems