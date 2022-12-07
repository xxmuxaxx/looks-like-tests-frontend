import { FC } from "react";

import { Empty } from "components/shared";

import "./TestList.scss";
import TestCard from "../TestCard/TestCard";

type TestListProps = {
  items: any[];
};

const TestList: FC<TestListProps> = ({ items }) => {
  return (
    <div className="tests-list">
      {items.length ? (
        items.map(({ id, ...item }) => <TestCard key={id} {...item} />)
      ) : (
        <Empty
          className="tests-empty"
          text="Здесь будет отображена информация о новых тестах"
          link={{ text: "История тестов", to: "/history" }}
        />
      )}
    </div>
  );
};

export default TestList;
