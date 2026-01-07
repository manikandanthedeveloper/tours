import type { MenuProps } from "../types/MenuProps"

const MenuItem: React.FC<{ menu: MenuProps }> = ({ menu }) => {
    const { title, price, img, desc } = menu;
    return (
        <div className="p-4 bg-white transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-xl product-fade-up">
            <img src={img} alt={title} className="w-full h-60 object-cover" />
            <div className="p-6">
                <header className="flex items-center justify-between mb-6">
                    <h3 className="text-2xl font-bold">{title}</h3>
                    <div className="bg-amber-500 px-2 py-1 text-white">${price}</div>
                </header>
                <div className="text-gray-600 leading-8">{desc}</div>
            </div>
        </div>
    )
}

export default MenuItem