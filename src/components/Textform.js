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
  if (totalChar === 0) {
    totalWords = 0;
  }

  let readTime = 0.008 * totalWords;
  const lowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };
  const clearTextClick = () => {
    setText("");
  };

  const copyTextClick = () => {
    var copyText = document.getElementById("textbox");
    if (copyText.value.length > 0) {
      // Select the text field
      copyText.select();
      // Copy the text inside the text field
      navigator.clipboard.writeText(copyText.value);
      // Alert the copied text
      alert("Copied the text: " + copyText.value);
    }
  };
  const removeSpacesClick = () => {
    const newString = document
      .getElementById("textbox")
      .value.replace(/\s{2,}/g, " ")
      .trim();
    setText(newString);
  };

  return (
    <>
      <div className={`container text-${props.modeColors}`}>
        <div className="mb-3">
          <h2>{props.title}</h2>
          <textarea
            className={`form-control text-${props.modeColors} bg-${props.theme}`}
            id="textbox"
            rows="6"
            value={text}
            placeholder="Enter your text here"
            onChange={handleChangeText}
          ></textarea>
        </div>
        <button className="btn btn-primary" onClick={upClick}>
          UPPERCASE
        </button>
        <button className="btn btn-secondary mx-3 my-2" onClick={lowClick}>
          lowecase
        </button>

        <button className="btn btn-primary" onClick={copyTextClick}>
          Copy Text
        </button>
        <button className="btn btn-success mx-3" onClick={removeSpacesClick}>
          Remove Extra Spaces
        </button>
        <button className="btn btn-danger" onClick={clearTextClick}>
          Clear Text
        </button>
      </div>

      <div className={`container my-3 text-${props.modeColors}`}>
        <h2>Your text summary</h2>
        <p>
          {totalWords} words and {totalChar} characters
        </p>
        <p>{readTime} min read </p>
      </div>
      <div className={`container my-3 text-${props.modeColors}`}>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
