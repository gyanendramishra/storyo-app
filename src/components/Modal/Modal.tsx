import { FC } from "react";
import ReactDOM from "react-dom";
import Card from "../Card/Card";
import Button from "../Button/Button";
import styles from "./Modal.module.css";

type TBackdrop = {
  onClose?(): void;
};

type TModalMeta = {
  buttonLable?: string;
};

type TOverlay = {
  title: string | null;
  body: string | null;
  className?: string;
  onClose?(): void;
  meta: TModalMeta;
};

type TModal = {
  title: string | null;
  body: string | null;
  onClose?(): void;
  meta: TModalMeta;
};

const Backdrop: FC<TBackdrop> = ({ onClose }) => {
  return <div className={styles.backdrop} onClick={() => onClose} />;
};

const Overlay: FC<TOverlay> = ({ title, body, meta, onClose }) => {
  return (
    <Card className={styles.modal}>
      <header className={styles.header}>
        <h2>{title}</h2>
      </header>
      <div className={styles.content}>
        <p>{body}</p>
      </div>
      {meta.buttonLable && onClose && (
        <footer className={styles.actions}>
          <Button id="modal" label={meta.buttonLable} onClick={() => onClose} />
        </footer>
      )}
    </Card>
  );
};

const Modal: FC<TModal> = ({ title, body, meta, onClose }) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onClose={onClose} />,
        document.getElementById("backdrop-root")!
      )}
      {ReactDOM.createPortal(
        <Overlay title={title} body={body} onClose={onClose} meta={meta} />,
        document.getElementById("overlay-root")!
      )}
    </>
  );
};

export default Modal;
