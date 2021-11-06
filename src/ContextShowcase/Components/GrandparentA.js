import { useContext, useEffect, useState } from "react";
import { context } from "../Context";
import ParentA from "./ParentA";
import ParentB from "./ParentB";
import StateBox from "./StateBox";

export default function GrandparentA(props) {
  const [state, setState] = useState(false);
  const contextState = useContext(context).state
  const renderCount = parseInt(localStorage.getItem("renderCountGPA")) + 1;
  useEffect(() => {
    localStorage.setItem("renderCountGPA", renderCount);
  });
  console.log("Grandparent A rendered")

  return (
    <div className={`gp ${state ? "fade-in" : ""}`}>
      <div className="header">
        <h3>Grandparent A: <span className="count">{renderCount}</span></h3>
        <StateBox state={[state, setState]} name="Local state" />
        <StateBox state={props.state} name="Shared state" />
        <StateBox state={contextState} name="Context state" />
      </div>
      <ParentA inheritedState={[state, setState]} sharedState={props.state} />
      <ParentB inheritedState={[state, setState]} sharedState={props.state} />
    </div>
  );
}
