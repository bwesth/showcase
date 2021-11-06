import { useEffect, useState } from "react";
import ChildE from "./ChildE";
import ChildF from "./ChildF";
import StateBox from "./StateBox";

export default function ParentC(props) {
  const [state, setState] = useState(false);
  const renderCount = parseInt(localStorage.getItem("renderCountPC")) + 1;
  useEffect(() => {
    localStorage.setItem("renderCountPC", renderCount);
  });
  console.log("Parent C rendered")

  return (
    <div className={`p ${state && "fade-in"}`}>
      <div className="header">
        <h3>Parent C: <span className="count">{renderCount}</span></h3>
        <div className="states">
          <StateBox state={[state, setState]} name="Local state" />
          <StateBox state={props.inheritedState} name="Inherited state" />
          <StateBox state={props.sharedState} name="Shared state" />
        </div>
      </div>
      <div className="p-inner">
        <ChildE
          inheritedState={[state, setState]}
          sharedState={props.sharedState}
        />
        <ChildF
          inheritedState={[state, setState]}
          sharedState={props.sharedState}
        />
      </div>
    </div>
  );
}
