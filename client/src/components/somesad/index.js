import React, { useState } from "react";
import "./style.css"
import Axios from "axios";

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
        <div className="col-3">
            <div className="input-group input-group-lg">
                <span className="input-group-text" id="inputGroup-sizing-lg"><i className="fas fa-user"></i></span>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Access Code"
                    name="accessCode"
                    value={accesscode}
                    onChange={e => setAccesscodeState(e.target.value)}
                />
            </div>
            <div className="card-body">
                <button onClick={e => setAccesscodeState(accesscode + "1")} className="btn btn-lg" value="1"><span>1</span></button>
                <button onClick={e => setAccesscodeState(accesscode + "2")} className="btn btn-lg" value="2"><span>2</span></button>
                <button onClick={e => setAccesscodeState(accesscode + "3")} className="btn btn-lg" value="3"><span>3</span></button>

                <br></br>
                <button onClick={e => setAccesscodeState(accesscode + "4")} className="btn btn-lg" value="4"><span>4</span></button>
                <button onClick={e => setAccesscodeState(accesscode + "5")} className="btn btn-lg" value="5"><span>5</span></button>
                <button onClick={e => setAccesscodeState(accesscode + "6")} className="btn btn-lg" value="6"><span>6</span></button>

                <br></br>
                <button onClick={e => setAccesscodeState(accesscode + "7")} className="btn btn-lg" value="7"><span>7</span></button>
                <button onClick={e => setAccesscodeState(accesscode + "8")} className="btn btn-lg" value="8"><span>8</span></button>
                <button onClick={e => setAccesscodeState(accesscode + "9")} className="btn btn-lg" value="9"><span>9</span></button>

                <br></br>
                <button onClick={e => setAccesscodeState("")} className="btn btn-lg delete"><span>Delete</span></button>
                <button onClick={e => setAccesscodeState(accesscode + "0")} className="btn btn-lg" value="0"><span>0</span></button>
                <button onClick={ login } className="btn btn-lg enter" type="submit"><span>Enter</span></button>
            </div>
        </div>
    )
}

export default Keypad;