import { fetchApi } from "../services/NBPapi";
import { useEffect, useRef, useState } from "react";

export const Currencies = () => {
  const [list, setList] = useState([]);
  const [input, setInput] = useState(0);
  const [fixed, setFixed] = useState();
  const [loader, setLoader] = useState();

  useEffect(() => {
    setLoader("loader");
    fetchApi().then((response) => {
      const currencyList = response.data[0].rates;
      setList(currencyList);
      setLoader("hide-loader");
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
      <div className="section__div">
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
      </div>
      <div className={loader}></div>
    </>
  );
};
