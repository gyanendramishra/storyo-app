import { ReactNode } from "react"

export type TChildren = {
    children: ReactNode
};

export type TType = {
    type: string;
};

export type TModal = {
    type: string;
    title: string | null;
    body: string | null;
};

export type TAction = {
    type: string,
    payload: Object
};