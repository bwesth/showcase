export default function Button({draggable}) {
  return (
    <button
      className="button"
      onMouseDown={draggable.onMouseDown}
      onMouseMove={draggable.handleMouseMove}
      onMouseUp={draggable.onMouseUp}
    >
      Button
    </button>
  );
}
