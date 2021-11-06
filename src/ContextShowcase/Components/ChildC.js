import { useEffect, useState, useContext } from "react";
import StateBox from "./StateBox";
import { context } from "../Context";


export default function ChildC(props) {
  const [state, setState] = useState(false);
  const contextState = useContext(context).state;

  const renderCount = parseInt(localStorage.getItem("renderCountCC")) + 1;
  useEffect(() => {
    localStorage.setItem("renderCountCC", renderCount);
  });
  console.log("Child C rendered")

  return (
    <div className={`c ${state && "fade-in"}`}>
      <div className="header">
        <h3>Child C: <span className="count">{renderCount}</span></h3>
        <StateBox state={[state, setState]} name="Local state" />
        <StateBox state={props.inheritedState} name="Inherited state" />
        <StateBox state={props.sharedState} name="Shared state" />
        <StateBox state={contextState} name="Context state" />
      </div>
    </div>
  );
}
