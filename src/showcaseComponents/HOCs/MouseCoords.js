import withMouse from "./withMouse";

function MouseCoords({mouse}) {

  return (
    <div className="container" onMouseMove={mouse.handleMouseMove}>
      <h1 className="content">
        Mouse position: ({mouse.coords.x}, {mouse.coords.y})
      </h1>
    </div>
  );
}

const withMouseMouseCoords = withMouse(MouseCoords)
export default withMouseMouseCoords;
