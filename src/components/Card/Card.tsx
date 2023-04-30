import { FC, ReactNode } from "react";
import styles from "./Card.module.css";

type TCard = {
    className?: string;
    children: ReactNode;
};

const Card: FC<TCard> = ({ children, className}) => {
    return (
        <div className={`${styles.card} ${className}`}>
            {children}
        </div>
    );
};

export default Card;