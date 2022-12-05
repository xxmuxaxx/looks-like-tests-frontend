import { Content } from "components/shared";
import { Outlet } from "react-router-dom";

import SidePanel from "../SidePanel/SidePanel";

import "./Layout.scss";

const Layout = () => (
  <main className="page">
    <SidePanel />
    <Content>
      <Outlet />
    </Content>
  </main>
);

export default Layout;
