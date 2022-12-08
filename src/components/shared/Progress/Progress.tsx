import classNames from "classnames";

import "./Progress.scss";

type ProgressProps = {
  className?: string;
  percent: number;
};

const Progress = ({ className, percent }: ProgressProps) => (
  <div className={classNames(className, "progress")}>
    <p style={{ width: `${percent}%` }} />
  </div>
);

export default Progress;
