import { Reducer } from "react";
import { EBOOLEAN } from "../utils/enums";

type TModalMeta = {
  buttonLable?: string;
};

type TState = {
  open: boolean;
  title: string | null;
  body: string | null;
  meta: TModalMeta;
};

type TAction = {
  type: string;
  title: string | null;
  body: string | null;
  meta: Object;
};

const modalReducer: Reducer<TState, TAction> = (state, action) => {
  switch (action.type) {
    case "OPEN_MODAL":
      return {
        ...state,
        open: EBOOLEAN.TRUE,
        title: action.title,
        body: action.body,
        meta: action.meta,
      };
    case "CLOSE_MODAL":
      return {
        ...state,
        open: EBOOLEAN.FALSE,
        title: "",
        body: "",
        meta: { buttonLable: "" },
      };
    default:
      return state;
  }
};
export default modalReducer;
