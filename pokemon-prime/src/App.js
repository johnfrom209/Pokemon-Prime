import "./css/index.css";
import React from "react";

import LandingPage from "./components/pages/LandingPage";

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
    </div>
  );
}

export default App;
