import { useState } from "react";
import classNames from "classnames";

import { Bell, Personal, Tiles } from "components/icons";
import { Portal } from "components/shared";
import PanelInfo from "../PanelInfo/PanelInfo";
import Logo from "../Logo/Logo";
import Nav from "../Nav/Nav";
import PanelButton from "../PanelButton/PanelButton";
import PanelContact from "../PanelContact/PanelContact";

import "./SidePanel.scss";

const SidePanel = () => {
  const [isExpand, setIsExpand] = useState(false);

  const handleExpandToggle = () => {
    setIsExpand((current) => !current);
  };

  const handleExpandClose = () => {
    setIsExpand(false);
  };

  return (
    <aside className={classNames("panel", isExpand && "active")}>
      <Portal rootSelector="#root">
        <div
          className={classNames("panel-overlay", isExpand && "active")}
          onClick={handleExpandClose}
        />
      </Portal>

      <Logo />

      <PanelButton onClick={handleExpandToggle} />

      <PanelInfo name="Иванов Константин Игорьевич" rating={45} />

      <Nav
        items={[
          { name: "Личные данные", path: "profile", icon: <Personal /> },
          { name: "Новые тесты", path: "tests", icon: <Bell /> },
          { name: "История тестов", path: "history", icon: <Tiles /> },
        ]}
        onLogout={() => console.log("Logout")}
      />

      <PanelContact email="xxmuxaxx@mail.ru" />
    </aside>
  );
};

export default SidePanel;
