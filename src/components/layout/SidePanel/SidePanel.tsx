import { useMemo, useState } from "react";
import classNames from "classnames";

import { useProtectedAuth } from "store/auth";
import { Bell, Personal, Tiles } from "components/icons";
import { Portal } from "components/shared";
import { Roles } from "services/authApi";
import PanelInfo from "../PanelInfo/PanelInfo";
import Logo from "../Logo/Logo";
import Nav, { NavItem } from "../Nav/Nav";
import PanelButton from "../PanelButton/PanelButton";
import PanelCopyright from "../PanelCopyright/PanelCopyright";
// import PanelContact from "../PanelContact/PanelContact";

import "./SidePanel.scss";

const SidePanel = () => {
  const { logout, fullName, userHasRole } = useProtectedAuth();
  const [isExpand, setIsExpand] = useState(false);

  const handleExpandToggle = () => {
    setIsExpand((current) => !current);
  };

  const handleExpandClose = () => {
    setIsExpand(false);
  };

  const navItems = useMemo(() => {
    const items: NavItem[] = [
      { name: "Личные данные", path: "profile", icon: <Personal /> },
      { name: "Новые тесты", path: "tests", icon: <Bell /> },
    ];

    if (userHasRole(Roles.student)) {
      items.push({ name: "История тестов", path: "history", icon: <Tiles /> });
    }

    if (userHasRole(Roles.teacher)) {
      items.push(
        { name: "Проверка тестов", path: "tests/check", icon: <Tiles /> },
        { name: "Назначение тестов", path: "tests/assign", icon: <Tiles /> }
      );
    }

    return items;
  }, [userHasRole]);

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

      <PanelInfo name={fullName} rating={45} />

      <Nav items={navItems} onLogout={() => logout()} />

      {/* <PanelContact email="xxmuxaxx@mail.ru" /> */}
      <PanelCopyright />
    </aside>
  );
};

export default SidePanel;
