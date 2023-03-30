import { useState } from "react";
import "./App.css";
import DigitButton from "./components/DigitButton";
import Screen from "./components/Screen";

function App() {
  const [value, setValue] = useState("0");
  const calculatorLayout = [
    ["AC", "/", "x", "+", "-"],
    ["7", "8", "9"],
    ["4", "5", "6"],
    ["1", "2", "3"],
    ["0", ".", "="],
  ];

  function enterButton(val: string) {
    setValue((currentValue) => {
      if (val === "AC") {
        return "0";
      } else if (val === "=") {
        return eval(currentValue.replace("x", "*"));
      } else if (val === "0" && currentValue === "0") {
        return "0";
      } else if (val !== "0" && currentValue === "0") {
        return val;
      } else if (
        calculatorLayout[0].includes(val) &&
        calculatorLayout[0].includes(currentValue.slice(-1))
      ) {
        const newValue = currentValue.split("");
        newValue[-1] = val;
        return newValue.join("");
      }
      return currentValue + val;
    });
  }

  return (
    <div className="App">
      <div className="container text-center align-items-center">
        <div className="row">
          <Screen value={value} />
        </div>
        {calculatorLayout.map((layoutArray) => (
          <div className="row">
            {layoutArray.map((val) => (
              <div className="col">
                <button
                  className="btn btn-large btn-block btn-warning w-100 h-100"
                  onClick={() => enterButton(val)}
                >
                  {val}
                </button>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
