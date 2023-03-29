import { useState } from "react";
import "./App.css";
import DigitButton from "./components/DigitButton";
import OperaterButton from "./components/OperaterButton";
import Screen from "./components/Screen";

function App() {
  const [count, setCount] = useState("test");

  return (
    <div className="App">
      <div className="container text-center align-items-center">
        <div className="row">
          <Screen value={count} />
        </div>
        <div className="row">
          <OperaterButton operater="AC" />
          <OperaterButton operater="/" />
          <OperaterButton operater="x" />
          <OperaterButton operater="+" />
          <OperaterButton operater="-" />
        </div>
        <div className="row">
          <DigitButton digit="7" />
          <DigitButton digit="8" />
          <DigitButton digit="9" />
        </div>
        <div className="row">
          <DigitButton digit="4" />
          <DigitButton digit="5" />
          <DigitButton digit="6" />
        </div>
        <div className="row">
          <DigitButton digit="1" />
          <DigitButton digit="2" />
          <DigitButton digit="3" />
        </div>
        <div className="row">
          <DigitButton digit="0" />
          <DigitButton digit="." />
          <OperaterButton operater="=" />
        </div>
      </div>
    </div>
  );
}

export default App;
