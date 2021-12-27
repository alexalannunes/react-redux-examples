import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addStock,
  fetchLS,
  selectPercentageStock,
  selectTotal,
} from "./stockSlice";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Item = ({ name, value }) => {
  const percentage = useSelector((state) =>
    selectPercentageStock(state, value)
  );
  return (
    <li
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 5,
      }}
    >
      <span>{name}</span>
      <span>R$ {value}</span>
      <div style={{ display: "flex", alignItems: "center" }}>
        <span>{percentage}%</span>
        <div style={{ height: 30, width: 30, marginLeft: 5 }}>
          <CircularProgressbar strokeWidth={14} value={percentage} />
        </div>
      </div>
    </li>
  );
};

function Stock() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [value, setValue] = useState("");
  const stocks = useSelector((state) => state.stock);
  const total = useSelector(selectTotal);
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addStock(name, value));
    setName("");
    setValue("");
  };

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("stock")) || [];
    dispatch(fetchLS(items));
  }, []);

  useEffect(() => {
    localStorage.setItem("stock", JSON.stringify(stocks));
  }, [stocks]);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="stock name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          placeholder="value"
          type="number"
          min={1}
          step={0.01}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button type="submit">save</button>
      </form>
      <h3>{total}</h3>
      <ul>
        {stocks.map((stock, index) => (
          <Item key={index} {...stock} />
        ))}
      </ul>
    </div>
  );
}

export { Stock };
