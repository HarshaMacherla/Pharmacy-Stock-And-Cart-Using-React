import React, { useContext } from "react";
import Input from "./Input";
import styles from "./MedicineForm.module.css";
import MedicineContext from "../../medicine-context/MedicineContext";

const MedicineForm = (props) => {
  const { medicineStock } = useContext(MedicineContext);

  const nameRef = React.useRef();
  const descriptionRef = React.useRef();
  const priceRef = React.useRef();
  const stockRef = React.useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const name = nameRef.current.value;
    const description = descriptionRef.current.value;
    const price = parseInt(priceRef.current.value);
    const availability = parseInt(stockRef.current.value);

    medicineStock.addToStock({ name, description, price, availability });
    console.log(name, description, price, availability);

    nameRef.current.value = "";
    descriptionRef.current.value = "";
    priceRef.current.value = "";
    stockRef.current.value = "";
  };

  return (
    <form onSubmit={submitHandler} className={styles.form}>
      <Input
        type="text"
        label="Medicine Name"
        id="medicineName"
        name="MedicineName"
        ref={nameRef}
      />
      <Input
        type="text"
        label="Description"
        id="medicineDescription"
        name="MedicineDescription"
        ref={descriptionRef}
      />
      <Input
        type="number"
        label="Price"
        id="medicinePrice"
        name="MedicinePrice"
        ref={priceRef}
      />
      <Input
        type="number"
        label="Stock Available"
        id="medicineStock"
        name="MedicineStock"
        ref={stockRef}
      />
      <button type="submit">Add To Stock</button>
    </form>
  );
};

export default MedicineForm;
