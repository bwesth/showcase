import { useState } from "react";

function MouseCoords(props) {
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  function handleMouseMove({ clientX, clientY }) {
    setCoords({ x: clientX, y: clientY });
  }

  return (
    <div className="container" onMouseMove={handleMouseMove}>
      <h1 className="content">
        Mouse position: ({coords.x}, {coords.y})
      </h1>
    </div>
  );
}

export default MouseCoords;
