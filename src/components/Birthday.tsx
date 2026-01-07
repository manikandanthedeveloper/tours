import type { BirthdayProps } from "../types/BirthdayProps"

const Birthday: React.FC<BirthdayProps> = ({ id, name, image, age }) => {
    return (
        <li className="flex items-center content-between gap-4 mb-4" key={id}>
            <div className="w-18 h-18 rounded-full overflow-hidden border-4 border-pink-400">
                <img src={image} alt={name} className="w-full h-full object-cover" />
            </div>
            <div>
                <h2 className="text-[18px]">{name}</h2>
                <span className="text-[14px] text-[#64748B]">{age} years</span>
            </div>
        </li>
    )
}

export default Birthday