import { ChangeEvent, FormEvent, useContext, useState } from "react";
import Card from "../Card/Card";
import Button from "../Button/Button";
import styles from "./Login.module.css";
import InputField from "../InputField/InputField";
import ModalContext from "../../context/ModalContext";
import { useAppSelector, useAppDispatch } from "../../store/hooks";
import { securityActions } from "../../store/slices/SecuritySlice";

const Login = () => {
  const dispatch = useAppDispatch();
  const { loading } = useAppSelector((security) => security.security);
  const modalContext = useContext(ModalContext);
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");

  const emailChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setEnteredEmail(event.target.value);
  };

  const passwordChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setEnteredPassword(event.target.value);
  };

  const privacyClickHandler = () => {
    modalContext.onOpen(
      "Please accept privacy policy",
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    );
  };

  const loginHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (enteredEmail.trim() && enteredPassword.trim()) {
      dispatch(securityActions.authenticate({ enteredEmail, enteredPassword }));
    }
  };

  return (
    <Card className={styles.login}>
      <form onSubmit={loginHandler}>
        <InputField
          id="email"
          name="email"
          type="email"
          label="E-mail"
          value={enteredEmail}
          onChange={emailChangeHandler}
        />
        <InputField
          id="password"
          name="password"
          type="password"
          label="Password"
          value={enteredPassword}
          onChange={passwordChangeHandler}
        />
        <div className={styles.actions}>
          <span onClick={privacyClickHandler}>
            Agree with <strong>Privacy Policy</strong> ?
          </span>
          <Button type="submit" label="Login" loading={loading} />
        </div>
      </form>
    </Card>
  );
};

export default Login;
