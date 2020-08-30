import React from "react";
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
      <div></div>
      <nav>
        {nav.map((nav: NavType) => {
          <a href={nav.id}>
            <span>{nav.name}</span>
          </a>;
        })}
      </nav>
    </header>
  );
};

export default Header;
