import React, { useContext } from "react";
import Modal from "../UI/Modal";
import MedicineContext from "../../medicine-context/MedicineContext";
import styles from "./Cart.module.css";

const Cart = (props) => {
  const { medicineCart } = useContext(MedicineContext);

  let totalCost = 0;

  const cartItems = medicineCart.cart.map((medicine) => {
    totalCost += medicine.price * medicine.quantity;
    return (
      <li key={medicine.name}>
        <span className={styles["medicine-name"]}>{medicine.name}</span>
        <span>
          {` X${medicine.quantity}`} = Rs. {medicine.price * medicine.quantity}
        </span>
      </li>
    );
  });

  return (
    <Modal>
      <div className={styles.cart}>
        <ul>{cartItems}</ul>
        <div className={styles.bill}>
          <h3>
            Total Cost: <span className={styles.amount}>Rs. {totalCost}</span>
          </h3>
          <button onClick={() => props.setCartIsShown(false)}>Close</button>
          <button>Order</button>
        </div>
      </div>
    </Modal>
  );
};

export default Cart;
