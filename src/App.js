import React from "react";
import { Routes, Route } from "react-router-dom";
import routes from "./routes";

const App = () => {
  return (
    <>
      <Routes>
        {routes.map(({ path, component: Component }) => (
          <Route key={path} element={<Component />} path={path} />
        ))}
      </Routes>
    </>
  );
};

export default App;
