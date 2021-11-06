import { useEffect, useRef, useState } from "react";

function withDraggable(component) {
  return function (props) {
    const Component = component;
    const [coords, setCoords] = useState({ x: 0, y: 0 });
    const [oldCoords, setOldCoords] = useState({ x: 0, y: 0 });
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [mouseDown, setMouseDown] = useState(false);

    function handleMouseMove({clientX, clientY, target}) {
        setOldCoords(coords);
        setCoords({ x: clientX, y: clientY })
        if (mouseDown) {
          setPosition(({ x, y }) => {
            return {
              x: x + (coords.x - oldCoords.x),
              y: y + (coords.y - oldCoords.y),
            };
          });
          target.style.transform = `translate(${position.x}px, ${position.y}px)`;
        }
      }

    return (
      <Component
        {...props}
        onMouseDown={() => setMouseDown(true)}
        onMouseUp={() => setMouseDown(false)}
        handleMouseMove={handleMouseMove}
      />
    );
  };
}

export default withDraggable;
