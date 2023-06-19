import React, { useContext } from "react";
import styles from "./StockTable.module.css";
import MedicineContext from "../../medicine-context/MedicineContext";

const StockTable = (props) => {
  const { medicineStock } = useContext(MedicineContext);

  const medicineList = medicineStock.stock.map((medicine) => (
    <tr key={medicine.name}>
      <td>{medicine.name}</td>
      <td>{medicine.description}</td>
      <td>{medicine.price}</td>
      <td>{medicine.availability}</td>
      <td>
        <button
          onClick={() => medicineStock.removeFromStock(medicine)}
          disabled={medicine.availability === 0}
        >
          Add Medicine to the Cart
        </button>
      </td>
    </tr>
  ));

  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th>Medicine Name</th>
          <th>Description</th>
          <th>Price</th>
          <th>Stock Available</th>
          <th></th>
        </tr>
      </thead>
      <tbody>{medicineList}</tbody>
    </table>
  );
};

export default StockTable;
