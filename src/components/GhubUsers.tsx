import type { GhubUserProps } from "../types/GhubUserProps";
import GhubUser from "./GhubUser";
import { useFetch } from "../hooks/useFetch";
import Loader from "./Loader";
import MessageAlert from "./MessageAlert";

const GhubUsers = () => {
    const url = 'https://api.github.com/users';
    const { data: users, isLoading, isError } = useFetch<GhubUserProps[]>(url);

    if (isLoading) return <Loader />;

    if (isError) return <MessageAlert type="danger" text="Unable to fetch data" />;

    return (
        <div className="max-w-sm mx-auto my-8 p-5">
            <h1 className="block text-start text-[32px] mb-4">Github Users</h1>
            <ul>
                {users && users.length > 0 && users.map((user: GhubUserProps) => {
                    return <GhubUser key={user.id} {...user} />
                })}
            </ul>
        </div >
    );
}

export default GhubUsers