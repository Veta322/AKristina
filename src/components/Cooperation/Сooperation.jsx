import React from "react";
import arrow from "../../images/Arrow.svg";
import coop from "../../images/cooperation.png";
import coop_bot from "../../images/Frame 514543.png";

function Cooperation() {
  return (
    <section className="cooperation">
      <h1 className="cooperation__title">СОТРУДНИЧЕСТВО</h1>

      <div className="cooperation__content">
        <p className="cooperation__text">
          Благодарим вас за проявленный интерес к нашей творческой мастерской.
          Наша миссия — продвигать современных художников и их произведения
          искусства среди коллекционеров, любителей, дизайнеров интерьеров,
          которые ищут новых и перспективных талантов в мире искусства. Мы не
          взимаем никакой комиссии с наших продавцов произведений искусства, вы
          платите только ежемесячный членский взнос за ваш профиль на нашей
          платформе
        </p>
        <a
          href="https://ru.wikipedia.org/wiki/%D0%A2%D0%B2%D0%BE%D1%80%D1%87%D0%B5%D1%81%D0%BA%D0%BE%D0%B5_%D1%81%D0%BE%D0%BE%D0%B1%D1%89%D0%B5%D1%81%D1%82%D0%B2%D0%BE_%C2%AB%D0%92%D0%BE%D0%BB%D1%8C%D0%BD%D0%BE%D0%B5_%D0%9F%D0%BE%D1%81%D0%B5%D0%BB%D0%B5%D0%BD%D0%B8%D0%B5_%D0%A5%D1%83%D0%B4%D0%BE%D0%B6%D0%BD%D0%B8%D0%BA%D0%BE%D0%B2%C2%BB"
          target="blank"
          className="mk__link"
        >
          <p className="cooperation__link">
            ПРИСОЕДИНИТЬСЯ К ТВОРЧЕСКОМУ СООБЩЕСТВУ
          </p>
          <img className="mk__arrow" alt="arrow" src={arrow} />
        </a>
      </div>
      <img className="cooperation__image" src={coop} alt="coop" />
      <img className="cooperation__image_bot" src={coop_bot} alt="coop" />
    </section>
  );
}

export default Cooperation;
