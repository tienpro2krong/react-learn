import React from 'react';
import './App.css';
import { useState } from 'react';


function App() {
  const [result, setResult] = useState("");
  const [phep_tinh, setPhep_tinh] = useState("");
  const duplicate = ['/', '*', '+', '-']
  const number = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']

  const handleClick = (e) => {
    if (result.length === 1 && result[0] === '0') {
      if (e > 0) {
        setResult(e)
        return
      }
    } else {
      if (duplicate.includes(result[result.length - 1])) {
        if (number.includes(e)) {

          setResult(result + e)
        }
      }
      else {
        setResult(result + e)
      }
    }
  }

  const clear = () => {
    setResult("");
    setPhep_tinh("");
  }
  const back = () => {
    setResult(result.slice(0, result.length - 1));
  }
  const calculate = () => {
    if (result.length && !duplicate.includes(result[result.length - 1] && result.length > 0)) {
      setResult(eval(result).toString())
    }

    setPhep_tinh(result + "=")

  }
  return (
    <>
      <div class="container">
        <div class="topBar">
          <div>Calculator</div>
          <div class="icons">
            <i class="far fa-window-minimize"></i>
            <i class="far fa-window-maximize"></i>
            <i class="fas fa-times"></i>
          </div>
        </div>

        <div class="secondaryBar">
          <div class="burgerAndHeading">
            <div class="burger">
              <div class="line"></div>
              <div class="line"></div>
              <div class="line"></div>

            </div>

            <h3>Scientific</h3>

          </div>
          <i class="fas fa-history"></i>
        </div>

        <div class="input-group">

          <input type="text" class="cacl1" value={phep_tinh}></input>
          <input type="text" class="cacl" value={result || 0}></input>

        </div>

        <div class="numberAndOptions">
          <div>CE</div>
          <div onClick={back}>C</div>
          <div onClick={clear}><i class="fas fa-backspace"></i>Del</div>
          <div onClick={() => handleClick("/")} name="/">/</div>

          <div onClick={() => handleClick("7")} class="number" name="7">7</div>
          <div onClick={() => handleClick("8")} class="number" name="8">8</div>
          <div onClick={() => handleClick("9")} class="number" name="9">9</div>
          <div onClick={() => handleClick("*")} name="*">*</div>

          <div onClick={() => handleClick("4")} class="number" name="4">4</div>
          <div onClick={() => handleClick("5")} class="number" name="5">5</div>
          <div onClick={() => handleClick("6")} class="number" name="6">6</div>
          <div onClick={() => handleClick("-")} class="number" name="-">-</div>

          <div onClick={() => handleClick("1")} class="number" name="1">1</div>
          <div onClick={() => handleClick("2")} class="number" name="2">2</div>
          <div onClick={() => handleClick("3")} class="number" name="3">3</div>
          <div onClick={() => handleClick("+")}>+</div>

          <div onClick={() => handleClick(",")} class="number" name=",">,</div>
          <div onClick={() => handleClick("0")} class="number" name="0">0</div>
          <div onClick={() => handleClick(".")} class="number" name=".">.</div>
          <div onClick={calculate} name="=">=</div>
        </div>

      </div>
    </>
  );
}

export default App;
