import React from "react";
import ResponsiveNavbar from "./components/ResponsiveNavbar";

const App: React.FC = () => {
  return (
    <div>
      <ResponsiveNavbar />
      <main className="p-8">
        <h1 className="text-2xl font-bold">Page content goes here</h1>
      </main>
    </div>
  );
};

export default App;
