import ResponsiveNavbar from "../components/ResponsiveNavbar";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <div>
      <ResponsiveNavbar />
      <div className="min-h-screen flex flex-col text-2xl font-bold items-center justify-center">
        <Outlet />
      </div>
    </div>
  );
};

export default RootLayout;
