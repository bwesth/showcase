import { useEffect } from "react";
import withDraggable from "../withDraggable";
export default withDraggable((props) => (
  <div
    className="circle"
    onMouseDown={props.onMouseDown}
    onMouseMove={props.handleMouseMove}
    onMouseUp={props.onMouseUp}
  >
    Circle
  </div>
));
