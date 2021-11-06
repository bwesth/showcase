import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import "../App.css";


import MouseCoords from "./MouseCoords";
import MouseClickLog from "./MouseClicksLog";
import Draggable from "./Draggable";

// import MouseCoords from "./HOCs/MouseCoords";
// import MouseClickLog from "./HOCs/MouseClicksLog";
// import Draggable from "./HOCs/DraggableHOC";


import Humlebuks from "./HOCs/Humlebuks"
// import Humlebuks from "./RenderProps/HumlebuksWithRenderProps";

function App() {
  const routes = [
    { path: "/hoc", text: "Mouse Coords", component: MouseCoords },
    { path: "/hoc/clickLog", text: "Mouse Click Log", component: MouseClickLog },
    { path: "/hoc/draggable", text: "draggable", component: Draggable },
    { path: "/hoc/humlebuks", text: "Humlebuks", component: Humlebuks },
  ];

  return (
    <Router>
      <div className="App">
        <nav className="nav">
          <ul className="list">
            {routes.map(({ path, text }) => (
              <li key={path} className="nav-item">
                <Link to={path}>{text}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <Switch>
          {routes.map(({ path, component }) => (
            <Route key={path} exact path={path} component={component} />
          ))}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
