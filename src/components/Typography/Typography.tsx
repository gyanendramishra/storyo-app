import { FC, ReactNode } from "react";

type TTypography = {
    as: string;
    className?: string;
    children?: ReactNode;
    text?: string;
}

const Typography: FC<TTypography> = (props) => {
    switch(props.as){
        case "h6":
            return <h6 className={`${props.className}`}>{props.text || props.children}</h6>
        case "h5":
            return <h5 className={`${props.className}`}>{props.text || props.children}</h5>
        case "h4":
            return <h4 className={`${props.className}`}>{props.text || props.children}</h4>
        case "h3":
            return <h3 className={`${props.className}`}>{props.text || props.children}</h3>
        case "h2":
            return <h2 className={`${props.className}`}>{props.text || props.children}</h2>
        default:
            return <h1 className={`${props.className}`}>{props.text || props.children}</h1>
    }
}

export default Typography;