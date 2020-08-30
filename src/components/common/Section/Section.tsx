import React, { ReactNode } from "react";
import "./Section.scss";

interface SectionProps {
  children: ReactNode;
}

const Section = ({ children }: SectionProps) => {
  return (
    <div className="section">
      <div className="section-box">
        <div className="section-box-content">{children}</div>
      </div>
    </div>
  );
};

export default Section;
