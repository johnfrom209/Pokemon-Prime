import "./css/index.css";
import React from "react";

import LandingPage from "./components/LandingPage";

// import Challenge from "./components/challenge/Challenge";

// drap and drop imports
// import { DndProvider } from "react-dnd";
// import { HTML5Backend } from "react-dnd-html5-backend";

function App() {
  // this calls on the components
  return (
    <div className="App">
      {/* <DndProvider backend={HTML5Backend}> */}
      <LandingPage />
      {/* <Challenge /> */}
      {/* </DndProvider> */}
      <h1>hello</h1>
    </div>
  );
}

export default App;
