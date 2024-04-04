import PropTypes from "prop-types";

export default function Button({ label = "Click", children }) {
  return (
    <button className="button heading-s">
      <div className="button__icon">{children}</div>
      <div className="button__label">{label}</div>
    </button>
  );
}

Button.propTypes = {
  label: PropTypes.string,
  children: PropTypes.node,
};
