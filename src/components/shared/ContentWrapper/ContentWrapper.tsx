import React from "react";

import "./ContentWrapper.scss";

type ContentWrapperType = {
  children: React.ReactNode;
  aside?: React.ReactNode;
};

const ContentWrapper = ({ children, aside }: ContentWrapperType) => {
  return (
    <div className="content-wrapper">
      {children}
      {aside ? <aside className="content-aside">{aside}</aside> : null}
    </div>
  );
};

export default ContentWrapper;
