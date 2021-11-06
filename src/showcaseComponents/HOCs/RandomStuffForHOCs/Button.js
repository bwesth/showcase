import withDraggable from "../withDraggable";
export default withDraggable((props) => (
  <button
    className="button"
    onMouseDown={props.onMouseDown}
    onMouseMove={props.handleMouseMove}
    onMouseUp={props.onMouseUp}
  >
    Button
  </button>
));
