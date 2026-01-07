import Loader from "./Loader";
import type { GhubUserProps } from "../types/GhubUserProps";
import MessageAlert from "./MessageAlert";
import { useFetch } from "../hooks/useFetch";

const MultipleReturns = () => {
    const url = "https://api.github.com/users/quincylarson";
    const { data: user, isLoading, isError } = useFetch<GhubUserProps>(url);

    if (isLoading) {
        return <Loader />
    }

    if (isError || !user) {
        return <MessageAlert type="danger" text="Unable fetch data!!!" />
    }

    const { avatar_url, name, company, bio } = user;

    return (
        <div className="max-w-sm mx-auto mt-6 text-center">
            <div className="flex flex-col">
                <h1 className="text-2xl mb-4 text-center">Fetch Data</h1>
                <img src={avatar_url} alt={name} className="rounded-4xl border border-gray-300 w-sm mb-2" />
                <h2 className="text-[20px] mb-2">{name}</h2>
                <h3 className="text-[18px] mb-2">Works At @{company}</h3>
                <p className="text-[15px] mb-2">{bio}</p>
            </div>
        </div>
    )
}

export default MultipleReturns