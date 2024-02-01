import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { INCREMENT, DECREMENT, INCREMENTFIVE, DECREMENTFIVE, login } from "./actions";

function App() {
  const counter = useSelector((state) => state.counter);
  const isLogged = useSelector((state) => state.isLogged);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1 className="counter">Counter {counter}</h1>
      <div className="buttonContainer">
      <div className="buttonBoxPlus">
        <button className="increment" onClick={() => dispatch(INCREMENT())}>+ 1</button>
        <button className="increment" onClick={() => dispatch(INCREMENTFIVE(5))}>+ 5</button>
      </div>
      <div className="buttonBoxSubtract">
        <button className="decrement" onClick={() => dispatch(DECREMENT())}>- 1</button>
        <button className="decrement" onClick={() => dispatch(DECREMENTFIVE(5))}>- 5</button>
      </div>
      </div>

      {isLogged ? <h3>Valuble information I shouldnt see</h3> : ""}
    </div>
  );
}

export default App;
