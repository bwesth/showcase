import { useEffect, useState } from "react";
import ChildA from "./ChildA";
import ChildB from "./ChildB";
import StateBox from "./StateBox";

export default function ParentA(props) {
  const [state, setState] = useState(false);
  const renderCount = parseInt(localStorage.getItem("renderCountPA")) + 1;
  useEffect(() => {
    localStorage.setItem("renderCountPA", renderCount);
  });
  console.log("Parent A rendered")

  return (
    <div className={`p ${state && "fade-in"}`}>
      <div className="header">
        <h3>Parent A: <span className="count">{renderCount}</span></h3>
        <div className="states">
          <StateBox state={[state, setState]} name="Local state" />
          <StateBox state={props.inheritedState} name="Inherited state" />
          <StateBox state={props.sharedState} name="Shared state" />
        </div>
      </div>
      <div className="p-inner">
        <ChildA
          inheritedState={[state, setState]}
          sharedState={props.sharedState}
        />
        <ChildB
          inheritedState={[state, setState]}
          sharedState={props.sharedState}
        />
      </div>
    </div>
  );
}
