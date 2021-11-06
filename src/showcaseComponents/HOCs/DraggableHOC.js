import { useEffect, useRef, useState } from "react";
import withMouse from "./withMouse";

function Draggable(props) {
  const mouse = props.mouse
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [oldCoords, setOldCoords] = useState({ x: 0, y: 0 });
  const [mouseDown, setMouseDown] = useState(false);
  const dragRef = useRef();

  useEffect(() => {
    
  },[]);

  function handleMouseMove({ clientX, clientY }) {
    setOldCoords(mouse.coords);
    mouse.handleMouseMove({ clientX, clientY })
    if (mouseDown) {
      setPosition(({ x, y }) => {
        return {
          x: x + (mouse.coords.x - oldCoords.x),
          y: y + (mouse.coords.y - oldCoords.y),
        };
      });
      dragRef.current.style.transform = `translate(${position.x}px, ${position.y}px)`;
    }
  }

  return (
    <div
      className="container"
      onMouseMove={handleMouseMove}
      onClick={mouse.handleMouseClick}
    >
      <h1 className="content">
        Mouse position: ({mouse.coords.x}, {mouse.coords.y})
      </h1>
      <ul>
        {mouse.clicksLog.map(({key,  x, y }, i) => (
          <li key={key} className="list">
            Click #{i}: ({x}, {y})
          </li>
        ))}
      </ul>
      <div
        ref={dragRef}
        className="draggable"
        onMouseDown={() => setMouseDown(true)}
        onMouseUp={() => setMouseDown(false)}
      >
        Drag Me!
      </div>
    </div>
  );
}

const withMouseDraggable = withMouse(Draggable);
export default withMouseDraggable;
