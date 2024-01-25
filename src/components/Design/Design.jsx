import React from "react";
import design from "../../images/design.png";
import inst from "../../images/Social icon.svg";
import pint from "../../images/Social icon 2.svg";
/*import Gallery from "../Gallery/Gallery";*/



function Design() {
  return (
    <>
      <section className="design">
        <div className="design__head">
          <h1 className="design__title">ДИЗАЙН</h1>
          <p className="design__subtitle">
            Создаём красивую, неподвластную времени моду, заботясь о людях и
            планете
          </p>
        </div>
        <img className="design__image" src={design} alt="design" />
      </section>
      <section className="design__content">
        <p className="design__text">
          Мода — это одна из форм искусства и самовыражения, и движущая сила,
          которая вдохновляет меня на свершения. Я придерживаюсь принципа
          разумного потребления, создавая одежду, которая привлекает и
          вдохновляет, при этом не нанося необратимого ущерба людям и окружающей
          среде
        </p>
        <div className="look">
           
          <div className="look__gallery">
    
          </div>
        </div>
      </section>
      <section className="shop">
        <div className="title__container">
          <h1 className="look__title">МАГАЗИН</h1>
        </div>
        <div className="shop__content">
          <div className="column__design">
            <h2 className="contact__column_title">Дизайн</h2>
            <ol className="column">
              <li className="column__name">Trend Island</li>
              <li className="column__adress">Ходынский б-р, д. 4 </li>
              <li className="column__tc">ТРЦ Авиапарк, Москва</li>
              <li className="column__phone">+375- 29 319.33.33 </li>
              <li className="column__email">Rmkrnet2022@gmail.com</li>
            </ol>
          </div>
          <div>
            <div className="shop__grafik">
              Магазин открыт ежедневно с 10 утра до 22 вечера, пятница и суббота
              с 10 утра до 23 вечера
            </div>
            <div className="column__contact">
              <img className="column__icon" alt="icon" src={inst} />
              <img className="column__icon" alt="icon" src={pint} />
            </div>
          </div>

          <div className=" column__design">
            <h2 className="contact__column_title">Дизайн</h2>
            <ol className="column">
              <li className="column__name">JUICY</li>
              <li className="column__adress">Победителей пр-кт, д. 65</li>
              <li className="column__tc">ТЦ Замок, Минск</li>
              <li className="column__phone">+375-29-319-33-33 </li>
              <li className="column__email">Rmkrnet2022@gmail.com</li>
            </ol>
          </div>

          <div>
            <div className="shop__grafik">
              Магазин открыт ежедневно с 10 утра до 22 вечера, с понедельника по
              воскресенье
            </div>
            <div className="column__contact">
              <img className="column__icon" alt="icon" src={inst} />
              <img className="column__icon" alt="icon" src={pint} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Design;
