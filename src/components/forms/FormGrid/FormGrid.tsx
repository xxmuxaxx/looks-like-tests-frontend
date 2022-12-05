import React from "react";
import { useMediaQuery } from "utils/hooks";

import "./FormGrid.scss";

type FormGridProps = {
  id: string;
  columns: number;
  gap: number;
  items: React.ReactNode[];
};

const FormGrid = ({ id, columns, gap, items }: FormGridProps) => {
  const isDesktop = useMediaQuery("(min-width: 1000px)");

  const style = isDesktop
    ? { gridTemplateColumns: `repeat(${columns}, 1fr)`, gap }
    : { gridTemplateColumns: `1fr`, gap };

  return (
    <div className="form-grid" style={style}>
      {items.map((item, index) => (
        <div className="form-group" key={`${id}-${index}`}>
          {item}
        </div>
      ))}
    </div>
  );
};

export default FormGrid;
