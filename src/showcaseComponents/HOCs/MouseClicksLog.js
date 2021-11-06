import { useState } from "react";
import withMouse from "./withMouse";

function MouseClickLog({mouse}) {

  return (
    <div
      className="container"
      onMouseMove={mouse.handleMouseMove}
      onClick={mouse.handleMouseClick}
    >
      <h1 className="content">
        Mouse position: ({mouse.coords.x}, {mouse.coords.y})
      </h1>
      <ul>
        {mouse.clicksLog.map(({key, x, y }, i) => (
          <li key={key} className="list">
            Click #{i}: ({x}, {y})
          </li>
        ))}
      </ul>
    </div>
  );
}

const withMouseMouseClickLog = withMouse(MouseClickLog)
export default withMouseMouseClickLog;
