import React from "react";
import "./index.scss";

function index({ className }) {
  return (
    <button className={`main_btn ${className !== undefined ? className : ""}`}>
      Ariza qoldirish
    </button>
  );
}

export default index;
