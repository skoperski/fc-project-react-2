import { fetchApi } from "../services/NBPapi";
import React, { useEffect, useState } from "react";

export const Currencies = () => {
  const [list, setList] = useState();
  const [currency, setCurrency] = useState();
  const [filtered, setFiltered] = useState();
  const [input, setInput] = useState();
  const [calc, setCalc] = useState();

  useEffect(() => {
    fetchApi().then((response) => {
      const currencyList = response.data[0].rates;
      console.log(currencyList);
      setList(currencyList);
    });
  }, []);

  const handleClick = () => {
    const filteredList = list.filter((el) => {
      el.code === currency;
      setFiltered(filteredList);
    });
    const calcResult = filtered * input;
    setCalc(calcResult);
    console.log(list);
  };

  const onInputChange = (e) => {
    setInput(e.target.value);
  };

  const onSelectChange = (e) => {
    setCurrency(e.target.value);
    console.log("TARGET VALUE", e.target.value);
  };

  // const calculation = () => {
  //   list.filter((el) => {
  //     el.code === currency;
  //   });
  //   console.log(el.code);
  // };

  return (
    <>
      <input
        type="number"
        className="section__input"
        placeholder="PLN value"
        onChange={onInputChange}
      />
      <select className="section__select" onChange={onSelectChange}>
        <option value="EUR">EUR</option>
        <option value="USD">USD</option>
        <option value="CHF">CHF</option>
      </select>
      <button className="section__button" onClick={handleClick}>
        Przelicz
      </button>
      <p className="section__p">TO</p>
      <span className="section__span">{calc}</span>
    </>
  );
};
