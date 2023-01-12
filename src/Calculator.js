import React from "react";
import { useState } from "react";
import { Space, Typography } from 'antd';
import { CloseOutlined } from '@ant-design/icons';
import 'antd/dist/antd';
import { Input } from 'antd'


function Calculator() {
    const { Text, Link } = Typography;
    const [result, setResult] = useState("");

    const handleClick = (e) => {
        setResult(result + e)
        // setResult(result.concat(e.target.name));
        // console.log(e);
    }
    const clear = () => {
        setResult("");
    }
    const back = () => {
        setResult(result.slice(0, result.length - 1));
    }
    const calculate = () => {
        setResult(eval(result).toString())
    }
    return (
        <>
            <div className="container">
                <div className="topBar">
                    <Text>Calculator</Text>
                    <div className="icons">
                        <i className="far fa-window-minimize"></i>
                        <i className="far fa-window-maximize"></i>
                        <i className="fas fa-times"></i>
                    </div>
                </div>

                <div className="secondaryBar">
                    <div className="burgerAndHeading">
                        <div className="burger">
                            <div className="line"></div>
                            <div className="line"></div>
                            <div className="line"></div>

                        </div>
                        <Text>Scientific</Text>

                    </div>
                    <i className="fas fa-history"></i>
                </div>

                <div className="input-group">
                    <input type="text" className="cacl" value={result || 0} />
                    <input type="text" className="cacl" value={result || 0} />
                    <input type="text" className="cacl" value={result || 0} />


                </div>

                <div className="numberAndOptions">
                    <div>CE</div>
                    <div onClick={back}>C</div>
                    <div onClick={clear}><CloseOutlined />Del</div>
                    <div onClick={() => handleClick("/")} name="/">/</div>

                    <div onClick={() => handleClick("7")} className="number" name="7">7</div>
                    <div onClick={() => handleClick("8")} className="number" name="8">8</div>
                    <div onClick={() => handleClick("9")} className="number" name="9">9</div>
                    <div onClick={() => handleClick("*")} name="*">*</div>

                    <div onClick={() => handleClick("4")} className="number" name="4">4</div>
                    <div onClick={() => handleClick("5")} className="number" name="5">5</div>
                    <div onClick={() => handleClick("6")} className="number" name="6">6</div>
                    <div onClick={() => handleClick("-")} className="number" name="-">-</div>

                    <div onClick={() => handleClick("1")} className="number" name="1">1</div>
                    <div onClick={() => handleClick("2")} className="number" name="2">2</div>
                    <div onClick={() => handleClick("3")} className="number" name="3">3</div>
                    <div onClick={() => handleClick("+")}>+</div>

                    <div onClick={() => handleClick(",")} className="number" name=",">,</div>
                    <div onClick={() => handleClick("0")} className="number" name="0">0</div>
                    <div onClick={() => handleClick(".")} className="number" name=".">.</div>
                    <div onClick={calculate} name="=">=</div>
                </div>

            </div>
        </>
    );
}

export default Calculator;