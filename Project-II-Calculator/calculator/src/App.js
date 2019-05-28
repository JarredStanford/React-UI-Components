import React from "react";
import "./App.css";
import Display from "./components/DisplayComponents/CalculatorDisplay";
import NumberButton from "./components/ButtonComponents/NumberButton";
import ActionButton from "./components/ButtonComponents/ActionButton";
const App = () => {
  return (
    <section>
      <Display />
      <div>
        <ActionButton actionButtonStyle={"action"} text={"clear"} />
        <NumberButton buttonStyle={"sign"} text={"÷"} />
        <NumberButton buttonStyle={"number"} text={"7"} />
        <NumberButton buttonStyle={"number"} text={"8"} />
        <NumberButton buttonStyle={"number"} text={"9"} />
        <NumberButton buttonStyle={"sign"} text={"x"} />
        <NumberButton buttonStyle={"number"} text={"4"} />
        <NumberButton buttonStyle={"number"} text={"5"} />
        <NumberButton buttonStyle={"number"} text={"6"} />
        <NumberButton buttonStyle={"sign"} text={"-"} />
        <NumberButton buttonStyle={"number"} text={"1"} />
        <NumberButton buttonStyle={"number"} text={"2"} />
        <NumberButton buttonStyle={"number"} text={"3"} />
        <NumberButton buttonStyle={"sign"} text={"+"} />
        <ActionButton actionButtonStyle={"action"} text={"0"} />
        <NumberButton buttonStyle={"sign"} text={"="} />
      </div>
    </section>
  );
};

export default App;
