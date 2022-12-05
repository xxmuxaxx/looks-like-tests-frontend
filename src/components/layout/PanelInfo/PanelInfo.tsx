import "./PanelInfo.scss";

type PanelInfoProps = {
  name: string;
  rating: number;
};

const PanelInfo = ({ name, rating }: PanelInfoProps) => (
  <ul className="panel-info">
    <li className="panel-info__item">
      <p className="panel-info__label">ФИО</p>
      <p className="panel-info__value">{name}</p>
    </li>

    <li className="panel-info__item">
      <p className="panel-info__label">Рейтинг опыта</p>
      <p className="panel-info__value show-mobile">
        <span>{rating}</span> из 100
      </p>
    </li>
  </ul>
);

export default PanelInfo;
