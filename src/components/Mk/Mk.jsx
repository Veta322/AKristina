import React from "react";
import arrow from "../../images/Arrow.svg";
import mk from "../../images/mk-pic.png";

function Mk() {
  return (
    <section className="mk">
      <div className="title__container">
        <h1 className="mk__title">МАСТЕР КЛАСС</h1>
      </div>
      <div className="mk__content">
        <div className="mk__description">
          <p className="mk__text">
            Мы предлагаем уникальный и захватывающий опыт, где вы не только
            приобретете навыки работы с цветом, масштабом, формами, но и
            откроете свой творческий потенциал. Вы можете пройти обучение из
            любой точки мира, достаточно наличие интернета и желания
          </p>
          <a href="#" className="mk__link">
            <p>ЗАПИСАТЬСЯ НА МАСТЕР КЛАСС</p>
            <img className="mk__arrow" alt="arrow" src={arrow} />
          </a>
        </div>
        <img className="mk__image" alt="mk" src={mk} />
      </div>
    </section>
  );
}

export default Mk;
