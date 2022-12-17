import React, { useEffect, memo } from "react";

const App = memo(() => {
  useEffect(() => {
    console.log(process.env);
  }, []);
  return <div>App</div>;
});

export default App;
