import React from "react";
import {Button} from "reactstrap";

const ButtonComponent = props => {
    const {color, displayName, click} = props;
    return (
        <div className="action_buttons">
<Button color={color} onClick={click}>{displayName}</Button>
        </div>
    )
}

export default ButtonComponent;