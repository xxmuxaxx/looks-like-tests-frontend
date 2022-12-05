import { Outlet } from "react-router-dom";

import SidePanel from "../SidePanel/SidePanel";

import "./Layout.scss";

const Layout = () => (
  <main className="page">
    <SidePanel />
    <div className="content">
      <Outlet />
    </div>
  </main>
);

export default Layout;
