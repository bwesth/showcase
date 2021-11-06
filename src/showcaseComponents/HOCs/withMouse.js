import { useState } from "react";

function withMouse(component) {
  return function (props) {
    const Component = component;
    const [clicksLog, setClicksLog] = useState([]);
    const [coords, setCoords] = useState({ x: 0, y: 0 });

    function handleMouseMove({ clientX, clientY }, callback) {
      setCoords({ x: clientX, y: clientY });
      callback && callback();
    }

    function handleMouseClick({ clientX, clientY }) {
      setClicksLog((prevState) => [...prevState, {key: prevState.length+1, x: clientX, y: clientY }]);
    }
    return (
      <Component
        {...props}
        mouse={{
          handleMouseMove: handleMouseMove,
          handleMouseClick: handleMouseClick,
          coords: coords,
          clicksLog: clicksLog,
        }}
      />
    );
  };
}

export default withMouse;
