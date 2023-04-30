import Card from "../../components/Card/Card";
import Button from "../../components/Button/Button";
import InputField from "../../components/InputField/InputField";

export default function Register() {
  return (
    <Card>
      <form onSubmit={() => ""}>
        <InputField
          id="email"
          name="email"
          type="email"
          label="E-mail"
          value={""}
          onChange={() => ""}
        />
        <InputField
          id="password"
          name="password"
          type="password"
          label="Password"
          value={""}
          onChange={() => ""}
        />
        <div>
          <Button type="submit" label="Login" />
        </div>
      </form>
    </Card>
  );
}
