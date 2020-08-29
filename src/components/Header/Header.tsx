import React from "react";
import "./Header.scss";

interface HeaderProps {
  title: string;
}

const Header = ({ title }: HeaderProps) => {
  return (
    <header>
      <div className="header-box">
        <div className="header-box-title">{title}</div>
      </div>
    </header>
  );
};

export default Header;
