import PropTypes from "prop-types";
import "./Button.css";

const Button = ({
  text = "Button",
  onClick = () => {},
  type = "button",
  variant = "primary",
  disabled = false,
  className = "",
}) => {
  const buttonClass = `button ${variant ? `button-${variant}` : ""} ${
    disabled ? "button-disabled" : ""
  } ${className}`;

  return (
    <button
      type={type}
      className={buttonClass}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  type: PropTypes.oneOf(["button", "submit", "reset"]),
  variant: PropTypes.oneOf(["primary", "secondary"]),
  disabled: PropTypes.bool,
  className: PropTypes.string,
};

export default Button;
