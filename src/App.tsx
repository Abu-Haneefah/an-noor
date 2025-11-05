import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { appRoutes } from "./routes/router";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* 2. All Other Routes via Mapping */}
        {appRoutes
          .filter((item) => !item.path.startsWith("/dashboard"))
          .map((item, index) => {
            const Component = item.component;

            // Handle strictAuth
            if (item.strictAuth) {
              return <Route key={index} path={item.path} />;
            }

            // Handle general isProtected
            if (item.isProtected) {
              return <Route key={index} path={item.path} />;
            }

            return (
              <Route key={index} path={item.path} element={<Component />} />
            );
          })}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
