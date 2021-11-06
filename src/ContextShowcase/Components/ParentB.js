import { useEffect, useState } from "react";
import ChildC from "./ChildC";
import ChildD from "./ChildD";
import StateBox from "./StateBox";

export default function ParentB(props) {
  const [state, setState] = useState(false);
  const renderCount = parseInt(localStorage.getItem("renderCountPB")) + 1;
  useEffect(() => {
    localStorage.setItem("renderCountPB", renderCount);
  });
  console.log("Parent B rendered")

  return (
    <div className={`p ${state && "fade-in"}`}>
      <div className="header">
        <h3>Parent B: <span className="count">{renderCount}</span></h3>
        <div className="states">
          <StateBox state={[state, setState]} name="Local state" />
          <StateBox state={props.inheritedState} name="Inherited state" />
          <StateBox state={props.sharedState} name="Shared state" />
        </div>
      </div>
      <div className="p-inner">
        <ChildC
          inheritedState={[state, setState]}
          sharedState={props.sharedState}
        />
        <ChildD
          inheritedState={[state, setState]}
          sharedState={props.sharedState}
        />
      </div>
    </div>
  );
}
