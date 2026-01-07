import type { MessageProps } from "../types/Message"

const MessageAlert: React.FC<MessageProps> = ({ type, text }) => {
    let classes = "flex w-full p-4 border border-gray-200 bg-white ";

    if (type === "success") {
        classes += "text-green-800";
    } else if (type === "warning") {
        classes += "text-orange-800"
    } else if (type === "danger") {
        classes += "text-red-800"
    }
    return (
        <div className={classes}>{text}</div>
    )
}

export default MessageAlert