import { useState } from "react";

function MouseClickLog(props) {
  const [clicksLog, setClicksLog] = useState([]);
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  function handleMouseMove({ clientX, clientY }) {
    setCoords({ x: clientX, y: clientY });
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
        {clicksLog.map(({key, x, y }, i) => (
          <li key={key} className="list">
            Click #{i}: ({x}, {y})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MouseClickLog;
