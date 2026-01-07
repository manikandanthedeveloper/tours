const CategoryMenu: React.FC<{ onSelectCategory: (category: string) => void, categories: string[] }> = ({ onSelectCategory, categories }) => {
    return (
        <ul className="flex items-center justify-center gap-4 mt-8 mb-6">
            {categories.map((category: string) => (
                <li><div className="block px-4 py-2 bg-amber-500 text-white cursor-pointer capitalize transition-all duration-300 ease-out
  hover:-translate-y-2 hover:shadow-xl" onClick={() => onSelectCategory(category)}>{category}</div></li>
            ))}
        </ul>
    )
}

export default CategoryMenu