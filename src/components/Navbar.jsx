import React, { useRef } from "react";
import Logo from "../assets/Images/logo.svg";
import Language from "../assets/Icons/language_icon.svg";
import Down from "../assets/Icons/down.svg";
import Menu from "../assets/Icons/menu.svg";
import Close from "../assets/Icons/close_button.svg";
import MainIcon from "../assets/Icons/main_icon.svg";
import ServicesIcon from "../assets/Icons/services_icon.svg";
import AboutIcon from "../assets/Icons/about_icon.svg";
import NewsIcon from "../assets/Icons/news_icon.svg";
import TeamIcon from "../assets/Icons/team_icon.svg";
import Phone from "../assets/Icons/phone.svg";

function Navbar() {
  const navContent = useRef(null);

  const openMenu = () => {
    navContent.current.classList.add("show");
  };

  const closeMenu = () => {
    navContent.current.classList.remove("show");
  };

  const menuData = [
    {
      id: 1,
      title: "Asosiy",
      path: "/",
      icon: MainIcon,
    },
    {
      id: 2,
      title: "Xizmatlarimiz",
      path: "/services",
      icon: ServicesIcon,
    },
    {
      id: 3,
      title: "Kompaniya haqida",
      path: "/about",
      icon: AboutIcon,
    },
    {
      id: 4,
      title: "Yangiliklar",
      path: "/news",
      icon: NewsIcon,
    },
    {
      id: 5,
      title: "Jamoa",
      path: "/team",
      icon: TeamIcon,
    },
  ];

  return (
    <nav className="navbar-bg">
      <div className="container">
        <div className="navbar">
          <div className="navbar__logo">
            <a href="/">
              <img src={Logo} alt="Main logo" />
            </a>
          </div>

          <ul className="navbar__directs">
            {menuData.map((menu) => {
              return (
                <li className="navbar__directs-item" key={menu.id}>
                  <a href="" className="navbar__link">
                    {menu.title}
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="navbar__language navbar__language_mob-hidden">
            <img
              src={Language}
              alt="language"
              className="navbar__language-item"
            />
            <span className="navbar__language-item">Uz</span>
            <img src={Down} alt="down icon" className="navbar__language-item" />
          </div>

          <div className="navbar__menu" onClick={openMenu}>
            <img src={Menu} alt="menu" />
          </div>

          <div className="navbar__content" ref={navContent}>
            <div className="navbar__content-main">
              <h3 className="main__text">Menu</h3>
              <button className="main__btn" onClick={closeMenu}>
                <img src={Close} alt="close btn" />
              </button>
            </div>
            <ul className="navbar__content-menu">
              {menuData.map((menu) => {
                return (
                  <li className="menu__item" key={menu.id}>
                    <a href="" className="menu__item-link">
                      <span>
                        <img src={menu.icon} alt={menu.title} />
                      </span>
                      <h5>{menu.title}</h5>
                    </a>
                  </li>
                );
              })}
            </ul>
            <div className="navbar__content-info">
              <a href="tel:+998 99 501 67 16" className="info__number">
                <img src={Phone} alt="phone icon" />
                <p>+998 99 501 67 16</p>
              </a>
              <div className="navbar__language">
                <img
                  src={Language}
                  alt="language"
                  className="navbar__language-item"
                />
                <span className="navbar__language-item">Uz</span>
                <img
                  src={Down}
                  alt="down icon"
                  className="navbar__language-item"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
