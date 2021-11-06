import { useEffect, useState } from "react";
import ChildG from "./ChildG";
import ChildH from "./ChildH";
import StateBox from "./StateBox";

export default function ParentD(props) {
  const [state, setState] = useState(false);
  const renderCount = parseInt(localStorage.getItem("renderCountPD")) + 1;
  useEffect(() => {
    localStorage.setItem("renderCountPD", renderCount);
  });
  console.log("Parent D rendered")

  return (
    <div className={`p ${state && "fade-in"}`}>
      <div className="header">
        <h3>Parent D: <span className="count">{renderCount}</span></h3>
        <div className="states">
          <StateBox state={[state, setState]} name="Local state" />
          <StateBox state={props.inheritedState} name="Inherited state" />
          <StateBox state={props.sharedState} name="Shared state" />
        </div>
      </div>
      <div className="p-inner">
        <ChildG
          inheritedState={[state, setState]}
          sharedState={props.sharedState}
        />
        <ChildH
          inheritedState={[state, setState]}
          sharedState={props.sharedState}
        />
      </div>
    </div>
  );
}
