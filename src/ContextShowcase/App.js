import { useState } from "react";
import "../App.css";
import GrandparentA from "./Components/GrandparentA";
import GrandparentB from "./Components/GrandparentB";
import { ContextProvider } from "./Context";

function App() {
  const state = useState(false);

  return (
    <ContextProvider>
      <div className={`App ${state[0] && "fade-in"}`}>
        <GrandparentA state={state} />
        <GrandparentB state={state} />
      </div>
    </ContextProvider>
  );
}

export default App;
