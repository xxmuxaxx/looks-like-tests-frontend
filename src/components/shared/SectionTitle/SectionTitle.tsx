import { Title } from "components/typography";
import React from "react";

import "./SectionTitle.scss";

type SectionTitleProps = {
  children: React.ReactNode;
};

const SectionTitle = ({ children }: SectionTitleProps) => (
  <Title className="section-title" variant="h1">
    {children}
  </Title>
);

export default SectionTitle;
