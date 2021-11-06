import { useContext, useEffect, useState } from "react";
import { context } from "../Context";
import StateBox from "./StateBox";

export default function ChildB(props) {
  const [state, setState] = useState(false);
  // const contextState = useContext(context).state
  const renderCount = parseInt(localStorage.getItem("renderCountCB")) + 1;
  useEffect(() => {
    localStorage.setItem("renderCountCB", renderCount);
  });
  console.log("Child B rendered")

  return (
    <div className={`c ${state && "fade-in"}`}>
      <div className="header">
        <h3>Child B: <span className="count">{renderCount}</span></h3>
        <StateBox state={[state, setState]} name="Local state" />
        <StateBox state={props.inheritedState} name="Inherited state" />
        <StateBox state={props.sharedState} name="Shared state" />
        {/* <StateBox state={contextState} name="Context state" /> */}
      </div>
    </div>
  );
}
