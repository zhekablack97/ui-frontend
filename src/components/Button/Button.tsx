import { ButtonHTMLAttributes } from "react";
import cn from "classnames";
import styles from "./Button.module.scss";

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: "sm" | "md" | "xl";
  color?: "primary" | "secondary" | "tertiary" | "outline";
  state?: "default" | "hover" | "disabled" | "loading";
}

export const Button: React.FC<IButton> = ({
  children = "Button",
  state = "default",
  color = "primary",
  size = "md",
  type = "button",
  className,
  ...rest
}) => {
  return (
    <button
      type={type}
      disabled={state === "disabled"}
      className={cn(styles.button, styles[size], styles[color], styles[state], className)}
      {...rest}
    >
      {children}
    </button>
  );
};
