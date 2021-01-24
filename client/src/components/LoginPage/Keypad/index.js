import React, { useState } from "react";
import Axios from "axios";
import InputWithIcon from "../../InputWithIcon";

function Keypad() {
    const [accesscode, setAccesscodeState] = useState("");

    const login =() => {
        Axios({
            method: "POST",
            data: {
                accessCode: accesscode
            },
            withCredentials: true,
            url: "/api/login/accesscode",
        })
        .then((res) => console.log(res))
    }

    return (
        <div>
            <div className="input-group input-group-lg">
                <InputWithIcon 
                    label={<i className="fas fa-user"></i>} 
                    inputProps={{
                        name:"accessCode",
                        placeholder:"Access Code",
                        value:accesscode,
                        type:"password",
                        onChange: e => setAccesscodeState(e.target.value)
                    }}
                />
            </div>
            <div className="row text-center p-1" style={{lineHeight:"4rem"}}>
                <div className="col-4 p-1">
                    <button className="btn btn-light w-100 h-100" onClick={e => setAccesscodeState(accesscode + e.target.innerText)}>1</button>
                </div>
                <div className="col-4 p-1">
                    <button className="btn btn-light w-100 h-100" onClick={e => setAccesscodeState(accesscode + e.target.innerText)}>2</button>
                </div>
                <div className="col-4 p-1">
                    <button className="btn btn-light w-100 h-100" onClick={e => setAccesscodeState(accesscode + e.target.innerText)}>3</button>
                </div>
                <div className="col-4 p-1">
                    <button className="btn btn-light w-100 h-100" onClick={e => setAccesscodeState(accesscode + e.target.innerText)}>4</button>
                </div>
                <div className="col-4 p-1">
                    <button className="btn btn-light w-100 h-100" onClick={e => setAccesscodeState(accesscode + e.target.innerText)}>5</button>
                </div>
                <div className="col-4 p-1">
                    <button className="btn btn-light w-100 h-100" onClick={e => setAccesscodeState(accesscode + e.target.innerText)}>6</button>
                </div>
                <div className="col-4 p-1">
                    <button className="btn btn-light w-100 h-100" onClick={e => setAccesscodeState(accesscode + e.target.innerText)}>7</button>
                </div>
                <div className="col-4 p-1">
                    <button className="btn btn-light w-100 h-100" onClick={e => setAccesscodeState(accesscode + e.target.innerText)}>8</button>
                </div>
                <div className="col-4 p-1">
                    <button className="btn btn-light w-100 h-100" onClick={e => setAccesscodeState(accesscode + e.target.innerText)}>9</button>
                </div>
                <div className="col-4 p-1">
                    <button className="btn btn-light w-100 h-100" onClick={e => setAccesscodeState("")}>Delete</button>
                </div>
                <div className="col-4 p-1">
                    <button className="btn btn-light w-100 h-100" onClick={e => setAccesscodeState(accesscode + e.target.innerText)}>0</button>
                </div>
                <div className="col-4 p-1">
                    <button className="btn btn-light w-100 h-100" onClick={login}>Enter</button>
                </div>
            </div>
        </div>
    )
}

export default Keypad;