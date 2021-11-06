import { useRef, useState } from "react";

function Draggable(props) {
  const [clicksLog, setClicksLog] = useState([]);
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [oldCoords, setOldCoords] = useState({ x: 0, y: 0 })
  const [mouseDown, setMouseDown] = useState(false);
  const dragRef = useRef();

  function handleMouseMove({ clientX, clientY }) {
    setOldCoords(coords)
    setCoords({ x: clientX, y: clientY });
    if (mouseDown) {
      setPosition(({x,y}) => {return {x: x+(coords.x-oldCoords.x), y: y+(coords.y-oldCoords.y)}})
      dragRef.current.style.transform = `translate(${position.x}px, ${position.y}px)`
    }
  }

  function handleMouseClick({ clientX, clientY }) {
    setClicksLog((prevState) => [...prevState, { x: clientX, y: clientY }]);
  }

  return (
    <div
      className="container"
      onMouseMove={handleMouseMove}
      onClick={handleMouseClick}
    >
      <h1 className="content">
        Mouse position: ({coords.x}, {coords.y})
      </h1>
      <ul>
        {clicksLog.map(({ x, y }, i) => (
          <li className="list">
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

export default Draggable;
