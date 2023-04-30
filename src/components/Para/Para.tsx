import { FC, ReactNode } from "react";

type TPara = {
    className?: string;
    children?: ReactNode;
    text?: string;
}

const Para: FC<TPara> = (props) => <p className={`${props.className}`}>{props.text || props.children}</p>;

export default Para;