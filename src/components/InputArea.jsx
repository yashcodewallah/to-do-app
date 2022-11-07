import React from "react";

function InputArea(props) {

  return (
    <div className="form">
      <input onChange={props.handleChange} type="text" name="enter your work!!" value={props.inputText} />
      <button onClick={props.addItem}>
        <span>Add</span>
      </button>
    </div>
  );
}

export default InputArea;
