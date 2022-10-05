import React from "react";

export const Section = () => {
  return (
    <>
      <input
        type="number"
        className="section__input"
        id="sectionInput"
        placeholder="PLN value"
      />
      <select className="section__select" id="sectionSelect">
        <option>EUR</option>
        <option>USD</option>
        <option>CHF</option>
      </select>
      <button className="section__button" id="sectionBtn">
        Przelicz
      </button>
      <p className="section__p">TO</p>
      <span className="section__span" id="sectionSpan">
        0 PLN
      </span>
    </>
  );
};
