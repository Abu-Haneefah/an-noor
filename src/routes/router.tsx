import React from "react";
import HomePage from "../pages/Landing/HomePage";
import Error from "../pages/Error";

// Define the interface for a route object
export interface AppRoute {
  path: string;
  component: React.ComponentType;
  isProtected?: boolean;
  strictAuth?: boolean;
  children?: AppRoute[];
}

export const appRoutes: AppRoute[] = [
  // Public/Unprotected Routes
  { path: "/", component: HomePage },
  //   { path: "/contact", component: Conatact },
  //   { path: "/calculator", component: Calculator },
  //   { path: "/bmi", component: BMICalculatorForm },

  // ... more unprotected routes

  // Dashboard Parent Route (Used mainly for config, actual Routes are below)
  //   {
  //     path: "/dashboard",
  //     component: Layout,
  //     isProtected: true,
  //     children: [
  //       // ...
  //     ],
  //   },

  // Catch-all route
  { path: "*", component: Error },
];
