import { FC, ReactNode, createContext, useReducer } from "react";
import modalReducer from "../reducers/ModalReducer";

type TModalContext = {
  onOpen: (title: string, body: string) => void;
  onClose(): void;
};

type TModalMeta = {
  buttonLable?: string;
};

type TInitialState = {
  open: boolean;
  title: string | null;
  body: string | null;
  meta: TModalMeta;
};

const initialState: TInitialState = {
  open: false,
  title: null,
  body: null,
  meta: {
    buttonLable: "",
  },
};

const ModalContext = createContext<TInitialState & TModalContext>({
  ...initialState,
  onOpen: (title: string, body: string) => {},
  onClose: () => {},
});

export const ModalContextProvider: FC<{
  children: ReactNode;
}> = (props) => {
  const [modalState, dispatch] = useReducer(modalReducer, initialState);

  const openModal = (title: string, body: string): void => {
    dispatch({ type: "OPEN_MODAL", title, body, meta: {} });
  };

  const closeModal = (): void => {
    dispatch({ type: "CLOSE_MODAL", title: null, body: null, meta: {} });
  };

  const contextValues = {
    open: modalState.open,
    title: modalState.title,
    body: modalState.body,
    meta: modalState.meta,
    onOpen: openModal,
    onClose: closeModal,
  };

  return (
    <ModalContext.Provider value={contextValues}>
      {props.children}
    </ModalContext.Provider>
  );
};

export default ModalContext;
