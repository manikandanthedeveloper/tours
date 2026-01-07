import type { GhubUserProps } from "../types/GhubUserProps"

const GhubUser: React.FC<GhubUserProps> = ({ id, login, avatar_url, html_url }) => {
    return (
        <li className="flex items-center content-between gap-4 mb-4 bg-white p-4 border border-gray-200" key={id}>
            <div className="w-18 h-18 rounded-full overflow-hidden border-4 border-pink-400">
                <img src={avatar_url} alt={'test'} className="w-full h-full object-cover" />
            </div>
            <div>
                <h2 className="text-[24px]">{login}</h2>
                <span className="text-[16px] text-[#64748B]"><a href={html_url} target="_blank">Profile</a></span>
            </div>
        </li>
    )
}

export default GhubUser