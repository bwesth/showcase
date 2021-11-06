import { useEffect, useState } from "react";
import ParentC from "./ParentC";
import ParentD from "./ParentD";
import StateBox from "./StateBox";

export default function Grandparent(props) {
  const [state, setState] = useState(false);
  const renderCount = parseInt(localStorage.getItem("renderCountGPB")) + 1;
  useEffect(() => {
    localStorage.setItem("renderCountGPB", renderCount);
  });
  console.log("Grandparent B rendered")

  return (
    <div className={`gp ${state && "fade-in"}`}>
      <div className="header">
        <h3>Grandparent B: <span className="count">{renderCount}</span></h3>
        <StateBox state={[state, setState]} name="Local state" />
        <StateBox state={props.state} name="Shared state" />
      </div>
      <ParentC inheritedState={[state, setState]} sharedState={props.state} />
      <ParentD inheritedState={[state, setState]} sharedState={props.state} />
    </div>
  );
}
