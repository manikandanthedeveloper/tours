import { memo, type ReactEventHandler, type ReactNode } from "react"

type ButtonProps = {
    children?: ReactNode;
    onClick: ReactEventHandler
}

const Button: React.FC<ButtonProps> = ({ children, onClick }) => {
    return (
        <button className="border border-green-500 px-4 py-2 text-green-500 font-normal cursor-pointer w-full" onClick={onClick}>{children}</button>
    )
}

export default memo(Button)