import { Angle } from "components/icons";

import "./PanelButton.scss";

type PanelButtonProps = {
  onClick: () => void;
};

const PanelButton = ({ onClick }: PanelButtonProps) => (
  <button className="panel-button" onClick={onClick}>
    <Angle />
    <p>Скрыть</p>
  </button>
);

export default PanelButton;
