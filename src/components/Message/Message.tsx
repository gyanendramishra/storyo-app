import { FC, useMemo } from "react";

type TMessage = {
  id?: "message";
  variant?: string;
  message: string;
  className?: string;
};

const getVarientClasses = (variant?: string) => {
  switch (variant) {
    case "primary":
      return "bg-blue-100 dark:text-blue-400";
    case "secondary":
      return "bg-gray-100 dark:text-gray-400";
    case "danger":
      return "bg-red-100 dark:text-red-400";
    case "warning":
      return "bg-yellow-100 dark:text-yellow-400";
    case "info":
      return "bg-white-100 dark:text-white-400";
    default:
      return "bg-green-100 dark:text-green-400";
  }
};

const Message: FC<TMessage> = (props) => {
  const computedClasses = useMemo(
    () => getVarientClasses(props.variant),
    [props.variant]
  );
  if (props.message) {
    return (
      <div
        className={`mb-4 rounded-lg py-5 px-6 text-base ${computedClasses} ${
          props.className ? props.className : ""
        }`}
        role="alert"
        id={`alert-${props.id}`}
      >
        {props.message}
      </div>
    );
  }

  return <></>;
};

export default Message;
