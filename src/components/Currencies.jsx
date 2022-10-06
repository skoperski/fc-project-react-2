import { fetchApi } from "../services/NBPapi";
import React, { useEffect, useRef, useState } from "react";

export const Currencies = () => {
  const [list, setList] = useState();
  const [input, setInput] = useState();
  const [fixed, setFixed] = useState();

  useEffect(() => {
    fetchApi().then((response) => {
      const currencyList = response.data[0].rates;
      setList(currencyList);
      setFixed(0);
    });
  }, []);
  const selectRef = useRef("");

  const handleClick = () => {
    const filteredList = list.filter((el) => {
      return el.code === selectRef.current.value;
    });
    const calcResult = filteredList[0].mid * input;
    const fixedResult = calcResult.toFixed(2);
    setFixed(fixedResult);
  };

  const onInputChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <>
      <input
        type="number"
        className="section__input"
        placeholder="PLN value"
        onChange={onInputChange}
      />
      <select className="section__select" ref={selectRef}>
        <option value="EUR">EUR</option>
        <option value="USD">USD</option>
        <option value="CHF">CHF</option>
      </select>
      <button className="section__button" onClick={handleClick}>
        Przelicz
      </button>
      <p className="section__p">TO</p>
      <span className="section__span">{fixed} PLN</span>
    </>
  );
};
