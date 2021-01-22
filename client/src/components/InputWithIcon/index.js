import React, {Component}  from "react";

class InputWithIcon extends Component {
    render() {
        return (
            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon1">{this.props.label}</span>
                </div>
                <input type="text" className="form-control" {...this.props.inputProps}/>
            </div>
        );
    }
}

export default InputWithIcon;