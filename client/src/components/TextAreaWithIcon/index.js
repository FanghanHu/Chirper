import React, {Component}  from "react";

class TextAreaWithIcon extends Component {
    render() {
        return (
            <div className="card">
                <div className="card-header">
                    {this.props.label}
                </div>
                <div className="card-body p-0">
                    <textarea type="text" className="form-control border-0" {...this.props.inputProps}/>
                </div>
            </div>
        );
    }
}

export default TextAreaWithIcon;