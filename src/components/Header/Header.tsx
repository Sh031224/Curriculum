import React from "react";
import titleImage from "../../assets/images/title_image.png";
import logoImage from "../../assets/images/logo.png";
import "./Header.scss";

interface HeaderProps {
  nav: NavType[];
}

interface NavType {
  name: string;
  id: string;
}

const Header = ({ nav }: HeaderProps) => {
  return (
    <header>
      <div className="header">
        <img className="header-logo" src={logoImage} alt="logo" />
        <img className="header-title" src={titleImage} alt="title" />
      </div>
      <nav>
        {nav.map((nav: NavType) => {
          return (
            <a href={nav.id}>
              <span>{nav.name}</span>
            </a>
          );
        })}
      </nav>
    </header>
  );
};

export default Header;
