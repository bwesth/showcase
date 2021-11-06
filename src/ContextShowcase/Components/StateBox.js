export default function StateBox(props) {
  const [state, setState] = props.state;

  return (
    <button
      className={`${state ? "active" : "passive"} state-box`}
      onClick={() => setState(prevState => !prevState)}
    >
      {props.name}
    </button>
  );
}
