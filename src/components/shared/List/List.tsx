import { ReactNode } from "react";

type ListProps<T extends {}> = {
  className?: string;
  items: T[];
  renderItem: (item: T, index: number) => ReactNode;
};

const List = <T extends {}>({ className, items, renderItem }: ListProps<T>) => (
  <ul className={className}>{items.map(renderItem)}</ul>
);

export default List;
