import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Error from "./components/error";

const App: React.FC = () => {
  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<Error />} />
      </Route>
    )
  );

  return (
    <div>
      <RouterProvider router={routes} />
      <main className="p-8">
        <h1 className="text-2xl font-bold">Page content goes here</h1>
      </main>
    </div>
  );
};

export default App;
