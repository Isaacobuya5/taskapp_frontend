import React from "react";
import { Button } from "reactstrap";

const ButtonComponent = props => {
  const { color, displayName, click, taskObject } = props;
  return (
    <div className="action_buttons">
      {color === "success" ? (
        <Button color={color} onClick={click} taskObject={taskObject}>
          {displayName}
        </Button>
      ) : (
        <Button color={color} onClick={() => click(taskObject)}>
          {displayName}
        </Button>
      )}
    </div>
  );
};

export default ButtonComponent;
