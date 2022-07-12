import React from "react";
import styles from "./DropDown.module.css";
interface DropDownProps{
    label: string | undefined
    value: string | undefined
    options: any[]
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
}

const Dropdown = (props: DropDownProps) => {
   const { label, value, options, onChange } = props

  return (
    <label>
      {label}
      <select className={styles.dropdown} value={value} onChange={onChange}>
        {options.map((option, i) => (
          <option  className={styles.dropdownContent} value={option} key={i}>
            {option}
          </option>
        ))}
      </select>
    </label>
  );
};

export default Dropdown;


