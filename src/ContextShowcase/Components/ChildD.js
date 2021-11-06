import { useEffect, useState } from "react";
import StateBox from "./StateBox";

export default function ChildD(props) {
  const [state, setState] = useState(false);
  const renderCount = parseInt(localStorage.getItem("renderCountCD")) + 1;
  useEffect(() => {
    localStorage.setItem("renderCountCD", renderCount);
  });
  console.log("Child D rendered")

  return (
    <div className={`c ${state && "fade-in"}`}>
      <div className="header">
        <h3>Child D: <span className="count">{renderCount}</span></h3>
        <StateBox state={[state, setState]} name="Local state" />
        <StateBox state={props.inheritedState} name="Inherited state" />
        <StateBox state={props.sharedState} name="Shared state" />
      </div>
    </div>
  );
}
