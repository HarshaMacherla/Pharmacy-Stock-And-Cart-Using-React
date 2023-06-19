import React from "react";
import styles from "./Input.module.css";

const Input = React.forwardRef((props, ref) => {
  return (
    <div className={styles.input}>
      <label htmlFor={props.id}>{props.label}</label>
      <input type={props.type} name={props.name} id={props.id} ref={ref} />
    </div>
  );
});

export default Input;
