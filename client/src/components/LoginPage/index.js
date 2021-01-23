import React, { Component } from "react";
import Keypad from "./Keypad";
// import UserName from "../UserName";
// import Password from "../Password";


class LoginPage extends Component {
    render() {
        return (
            <>
                <div className="container">

                    <div className="d-flex flex-column justify-content-center vh-100">
                        <div>
                            <div className="card mx-auto" style={{width: "350px"}}>
                                <div className="card-header">
                                    <ul className="nav nav-tabs text-center card-header-tabs">
                                        <li className="nav-item w-50"><a className="nav-link active" data-toggle="tab" href="#accessCode">Access Code</a></li>
                                        <li className="nav-item w-50"><a className="nav-link" data-toggle="tab" href="#backOffice">Back Office</a></li>
                                    </ul>
                                </div>
                                <div className="card-body">
                                    <div className="tab-content">
                                        <div id="accessCode" className="tab-pane fade show active">
                                            <Keypad/>
                                        </div>
                                        <div id="backOffice" className="tab-pane fade">
                                            Back Office
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>



                {/* <div className="container-fluid">
                    <button style={{ position: "relative", right: "25px" }} className="btn btn-primary" onClick={() => this.setState({ currentView: "Keypad" })}>Login</button>
                    <button style={{ position: "relative", left: "25px" }} className="btn btn-primary" onClick={() => this.setState({ currentView: "Login" })}>Back Office</button>
                    {this.state.currentView === "Keypad" ? <Keypad /> : <><UserName /> <Password /></>}
                </div> */}
            </>
        )
    }




}

export default LoginPage;