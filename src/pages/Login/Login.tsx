import { useState, useContext, ChangeEvent, FormEvent, useEffect } from "react";
import Card from "../../components/Card/Card";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import ModalContext from "../../context/ModalContext";
import Message from "../../components/Message/Message";
import InputField from "../../components/InputField/InputField";
import { useAppSelector, useAppDispatch } from "../../store/hooks";
import { securityActions } from "../../store/slices/SecuritySlice";
import styles from "./Login.module.scss";

export default function Login() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const {
    loading: { loading },
    errorBag: { error },
    security: { token },
  } = useAppSelector((state: any) => state);
  const modalContext = useContext(ModalContext);
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");

  useEffect(() => {
    if (token) {
      navigate("/");
    }
  }, [token]);

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
      dispatch(
        securityActions.authenticate({
          email: enteredEmail,
          password: enteredPassword,
        })
      );
    }
  };

  return (
    <div className={styles.login}>
      <div className={styles["login-form"]}>
        <Message message={error.message} />
        <h2>Login Form</h2>
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
            onBlur={passwordChangeHandler}
            onChange={passwordChangeHandler}
          />
          <div className={styles.actions}>
            <span onClick={privacyClickHandler}>
              Agree with <strong>Privacy Policy</strong> ?
            </span>
            <Button
              id="login"
              type="submit"
              variant="primary"
              label="Login"
              loading={loading}
            />
          </div>
        </form>
      </div>
      <div className={styles["login-contents"]}>
        <h2>Login Contents</h2>
        <p>Some information about the login process could go here.</p>
      </div>
    </div>
  );
}
