export default function Box({ draggable }) {
  return (
    <div
      className="box"
      onMouseDown={draggable.onMouseDown}
      onMouseMove={draggable.handleMouseMove}
      onMouseUp={draggable.onMouseUp}
    >
      Box
    </div>
  );
}
