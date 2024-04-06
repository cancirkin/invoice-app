import { useState } from "react";
import PropTypes from "prop-types";
import IconArrowDown from "@/assets/icons/icon-arrow-down.svg";
export default function Dropdown({ options, selectedValue }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="dropdown-wrapper">
      <button
        onClick={() => {
          setIsOpen(!isOpen);
        }}
        className="dropdown heading-s"
      >
        {selectedValue ? selectedValue : "Select"}
        <img src={IconArrowDown} alt="" />
      </button>
      <div>
        <ul className={"dropdown__list" + (isOpen ? "--open" : "")}>
          {options.map((option, index) => (
            <li
              key={index}
              onClick={() => {
                setIsOpen(false);
              }}
              className="dropdown__item heading-s"
            >
              {option.label}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

Dropdown.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string,
      label: PropTypes.string,
    })
  ).isRequired,
  selectedValue: PropTypes.string,
  onChange: PropTypes.func,
};
