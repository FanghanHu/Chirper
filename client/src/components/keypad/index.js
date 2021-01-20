import React from "react";
import "./style.css"

function Keypad() {
    return  ( 
        <div className="col-3">
            <div className="input-group input-group-lg">
                <span className="input-group-text" id="inputGroup-sizing-lg"></span>
                <input type="text" className="form-control" placeholder="Access Code" />
            </div>
            <div className="card-body">
                <button id="button-1" className="btn btn-lg number" value="1"><span>1</span></button>
                <button id="button-2" className="btn btn-lg number" value="2"><span>2</span></button>
                <button id="button-3" className="btn btn-lg number" value="3"><span>3</span></button>

                <br></br>
                <button id="button-4" className="btn btn-lg number" value="4"><span>4</span></button>
                <button id="button-5" className="btn btn-lg number" value="5"><span>5</span></button>
                <button id="button-6" className="btn btn-lg number" value="6"><span>6</span></button>

                <br></br>
                <button id="button-7" className="btn btn-lg number" value="7"><span>7</span></button>
                <button id="button-8" className="btn btn-lg number" value="8"><span>8</span></button>
                <button id="button-9" className="btn btn-lg number" value="9"><span>9</span></button>

                <br></br>
                <button id="button-7" className="btn btn-lg delete"><span>Delete</span></button>
                <button id="button-8" className="btn btn-lg number" value="0"><span>0</span></button>
                <button id="button-9" className="btn btn-lg enter"><span>Enter</span></button>
            </div>
        </div>
    )
}

export default Keypad;