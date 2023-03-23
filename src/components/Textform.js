import React, { useState } from "react";

export default function Textform(props) {
  const [text, setText] = useState("");
  const upClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleChangeText = (event) => {
    setText(event.target.value);
  };
  let totalWords = text.split(" ").length;
  let totalChar = text.length;
  if(totalChar==0){
    totalWords=0;
  }

  let readTime = 0.008 * totalWords;
  const lowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };

  return (
    <>
      <div className="container">
        <div className="mb-3">
          <h2>{props.title}</h2>
          <textarea
            className="form-control"
            id="textbox"
            rows="5"
            value={text}
            placeholder="Enter your text here"
            onChange={handleChangeText}
          ></textarea>
        </div>
        <button className="btn btn-primary" onClick={upClick}>
          UPPERCASE
        </button>
        <button className="btn btn-secondary mx-3" onClick={lowClick}>
          lowecase
        </button>
      </div>

      <div className="container my-3">
        <h2>Your text summary</h2>
        <p>{totalWords} words and {totalChar} characters</p>
        <p>{readTime} min read </p>
      </div>
      <div className="container">
        <h2>Preview</h2>
        <p>{text}</p>

      </div>
    </>
  );
}
