import React, { useState } from "react";
import { Link } from "react-router-dom";
import style from "./Navbar.module.css";
import close from "../../images/CloseCircle.svg";

const NAvbar = () => {
  const [nav, setNav] = useState(false);
  return (
    <>
      <div class="header">
        <Link to="/*" class="header__title">
          AFANASEVA ART Studio{" "}
        </Link>
        <ol class="header__right">
          <li class="header__lang">RU</li>
          <li class="header__search"></li>
          <div className="header__burger " onClick={() => setNav(true)}>
            {" "}
          </div>
        </ol>
      </div>
      <section >
        <div
          className={nav ? [style.menu, style.active].join(" ") : [style.menu]}
        >
          <div class="header menu__header">
            <Link onClick={() => setNav(false)} to="/*" class="header__title">
              AFANASEVA ART Studio{" "}
            </Link>
            <ol class="header__right">
              <li class="header__lang">RU</li>
              <li class="header__search"></li>
              <div >
                <img className="header__close" onClick={() => setNav(false)} src={close} alt="icon" />
              </div>
            </ol>
          </div>
          <h1 class="menu__title">МЕНЮ</h1>
          <ol class="menu__links">
            <Link onClick={() => setNav(false)} to="/art" class="menu__link">
              ИСКУССТВО{" "}
            </Link>
            <Link onClick={() => setNav(false)} to="/design" class="menu__link">
              ДИЗАЙН{" "}
            </Link>
            <Link onClick={() => setNav(false)} to="/about" class="menu__link">
              О ХУДОЖНИКЕ{" "}
            </Link>
            <Link
              onClick={() => setNav(false)}
              to="/contact"
              class="menu__link"
            >
              КОНТАКТЫ{" "}
            </Link>
          </ol>
        </div>
      </section>
    </>
  );
};

export default NAvbar;
