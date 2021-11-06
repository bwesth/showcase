import React from "react";
import { useState } from "react/cjs/react.development";

const context = React.createContext();

function ContextProvider({ children }) {
  // states and shizzle
  const state = useState(false);

  


const Provider = context.Provider
  return (
    <Provider
      value={{
        //values here
        state,
      }}
    >
      {children}
    </Provider>
  );
}

export { ContextProvider, context };
