import React, { useState } from "react";
import MedicineForm from "./components/Form/MedicineForm";
import Stock from "./components/Stock/Stock";
import CartButton from "./components/Cart/CartButton";
import styles from "./App.module.css";
import { Medicines } from "./medicine-context/MedicineContext";
import Cart from "./components/Cart/Cart";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  return (
    <Medicines>
      {cartIsShown && <Cart setCartIsShown={setCartIsShown} />}
      <div className={styles.container}>
        <div className={styles.form}>
          <MedicineForm />
        </div>
        <div className={styles["cart-button"]}>
          <CartButton setCartIsShown={setCartIsShown} />
        </div>
      </div>
      <Stock />
    </Medicines>
  );
}

export default App;
