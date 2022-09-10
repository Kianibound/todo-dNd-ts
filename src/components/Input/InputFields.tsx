import React from "react";
import "./input.css";

const InputFields = () => {
  return (
    <form>
      <input type="input" placeholder="add a task" className="inputBox" />
      <button className="addBtn">Add</button>
    </form>
  );
};

export default InputFields;
