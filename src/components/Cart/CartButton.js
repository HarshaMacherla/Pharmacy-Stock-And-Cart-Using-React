import React from "react";
import styles from "./CartButton.module.css";

const CartButton = (props) => {
  return (
    <div className={styles.button}>
      <button onClick={() => props.setCartIsShown(true)}>Cart</button>
    </div>
  );
};

export default CartButton;
