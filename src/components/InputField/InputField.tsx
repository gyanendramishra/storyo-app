import { FC, ChangeEvent } from "react";
import styles from "./InputField.module.scss";

type TInputField = {
  id?: string;
  name: string;
  label: string;
  error?: string;
  value?: string;
  className?: string;
  placeholder?: string;
  type: "text" | "email" | "password";
  onBlur?(event: ChangeEvent<HTMLInputElement>): void;
  onChange(event: ChangeEvent<HTMLInputElement>): void;
};

const InputField: FC<TInputField> = (props) => {
  return (
    <div className={`${styles["input-field"]} ${props.className}`}>
      {props.label && (
        <label htmlFor={`input-${props.id}`}>{props.label}</label>
      )}
      <input
        id={`input-${props.id}`}
        type={props.type}
        name={props.name}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
        onBlur={props.onBlur}
      />
      {props.error && <span>{props.error}</span>}
    </div>
  );
};

export default InputField;
