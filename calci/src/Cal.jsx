import { useState } from "react";
import "./App.css";

const Cal = () => {
  const [inputValue, setInput] = useState("");

  const Logic = () => {
    try {
      const evaluate = eval(inputValue);
      setInput(evaluate.toString());
    } catch (error) {
      setInput("Error");
    }
  };

  const Op = (char) => {
    setInput((data) => data + char);
  };

  return (
    <div id="main_div">
      <input
        id="display"
        value={inputValue}
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />
      <br />
      <br />
      <div id="btn_div">
        <button onClick={() => Op("1")}>1</button>
        <button onClick={() => Op("2")}>2</button>
        <button onClick={() => Op("3")}>3</button>
        <button onClick={() => Op("+")}>+</button>
        <button onClick={() => Op("4")}>4</button>
        <button onClick={() => Op("5")}>5</button>
        <button onClick={() => Op("6")}>6</button>
        <button onClick={() => Op("-")}>-</button>
        <button onClick={() => Op("7")}>7</button>
        <button onClick={() => Op("8")}>8</button>
        <button onClick={() => Op("9")}>9</button>
        <button onClick={() => Op("*")}>*</button>
        <button onClick={() => Op("0")}>0</button>

        <button onClick={Logic}>=</button>
        <button onClick={() => Op("/")}>/</button>

        <button
          onClick={() => {
            setInput("");
          }}
          style={{ backgroundColor: "rgb(208, 55, 55)" }}
        >
          AC
        </button>
      </div>
      <br />
    </div>
  );
};

export default Cal;
