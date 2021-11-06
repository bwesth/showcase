import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import AppHOC from './showcaseComponents/App';
import AppChildren from './showcaseComponents/ReactChildren/App';
import AppContext from "./ContextShowcase/App";

localStorage.clear();
localStorage.setItem("renderCountGPA", 0);
localStorage.setItem("renderCountGPB", 0);
localStorage.setItem("renderCountPA", 0);
localStorage.setItem("renderCountPB", 0);
localStorage.setItem("renderCountPC", 0);
localStorage.setItem("renderCountPD", 0);
localStorage.setItem("renderCountCA", 0);
localStorage.setItem("renderCountCB", 0);
localStorage.setItem("renderCountCC", 0);
localStorage.setItem("renderCountCD", 0);
localStorage.setItem("renderCountCE", 0);
localStorage.setItem("renderCountCF", 0);
localStorage.setItem("renderCountCG", 0);
localStorage.setItem("renderCountCH", 0);

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route path="/hoc" component={AppHOC} />
        <Route path="/children" component={AppChildren} />
        <Route path="/context" component={AppContext} />
        <Route path="/" component={AppHOC} />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
