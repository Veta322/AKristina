import React from "react";
import header_big from "../../images/main-pic.png";
import header_small from "../../images/Frame 514486.png";

function Main() {
  return (
    <main class="main-page">
      <section class="main">
        <div class="main__name">
          <h2 class="main__name_text">АФАНАСЬЕВА</h2>
          <h2 class="main__name_text">КРИСТИНА</h2>
        </div>

        <h1 class="main__subtitle">МЫ ВЕРИМ,    НАШ БРЕНД ФОРМИРУЕТ БУДУЩЕЕ</h1>
        <div class="main__text_container">
          <p class="main__text">
            Откройте для себя наш бренд и с легкостью соберите произведения
            искусства и дизайна
          </p>
        </div>
        <img className="main__image_big" src={header_big} alt="main"></img>
        <img className="main__image_small" src={header_small} alt="main"></img>
      </section>
    </main>
  );
}

export default Main;
