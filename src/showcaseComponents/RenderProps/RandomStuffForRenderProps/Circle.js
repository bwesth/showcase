export default function Circle({draggable}) {
  return <div
    cons
    className="circle"
    onMouseDown={draggable.onMouseDown}
    onMouseMove={draggable.handleMouseMove}
    onMouseUp={draggable.onMouseUp}
  >
    Circle
  </div>;
}
