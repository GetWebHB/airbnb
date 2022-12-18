import React, { memo } from "react";
import { useRoutes } from "react-router-dom";
import routes from "./router";
const App = memo(() => {
  return (
    <>
      <div className="header">
        <h1>header</h1>
        {useRoutes(routes)}
        <h2>footer</h2>
      </div>
    </>
  );
});

export default App;
