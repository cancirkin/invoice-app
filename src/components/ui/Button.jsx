import PropTypes from "prop-types";
export default function Button({
  label = "Click",
  type = "",
  children,
  ...buttonProps
}) {
  return (
    <button
      {...buttonProps}
      className={
        `button heading-s` +
        (children ? " with-icon" : "") +
        (type ? ` ${type}` : "")
      }
    >
      {children && <div className="button__icon">{children}</div>}
      <div className="button__label">{label}</div>
    </button>
  );
}

Button.propTypes = {
  label: PropTypes.string,
  children: PropTypes.node,
  type: PropTypes.string,
};
