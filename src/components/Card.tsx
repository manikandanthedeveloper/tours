import { memo, type ReactNode } from "react"

type CardProps = {
    children?: ReactNode;
};

const Card: React.FC<CardProps> = ({ children }) => {
    return (
        <div className="rounded-xl border border-slate-200 bg-white shadow-sm relative">{children}</div>
    )
}

export default memo(Card)