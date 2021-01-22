import React, { Component } from "react";

class MenuMainArea extends Component {
    render() {
        return (
            <div className="d-flex flex-wrap">
                {this.props.buttons.map(button => {
                    return (
                        <button onClick={() => {this.props.orderItem(button.item)}}>{button.item.itemName}</button>
                    );
                })}
            </div>
        );
    }
}

export default MenuMainArea;