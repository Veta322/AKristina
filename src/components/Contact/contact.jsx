import React from "react";
import inst from "../../images/Social icon.svg";
import pint from "../../images/Social icon 2.svg";
import back from "../../images/Frame 514546.png"

function Contact() {
  return (
    <section className="contact">
      <img className="contact__back" src={back} alt="back" />
      <h1 className="contact__title">КОНТАКТ</h1>
      <div className="contact__content">
        <div className="contact__column">
          <div>
            <h2 className="contact__column_title">Дизайн</h2>
            <ol className="column">
              <li className="column__name">Trend Island</li>
              <li className="column__adress">Ходынский б-р, д. 4 </li>
              <li className="column__tc">ТРЦ Авиапарк, Москва</li>
              <li className="column__phone">+375- 29 319.33.33 </li>
              <li className="column__email">Rmkrnet2022@gmail.com</li>
            </ol>
          </div>
          <div className="column__right">
            <div className="column__grafik">
              Магазин открыт ежедневно с 10 утра до 22 вечера, пятница и суббота
              с 10 утра до 23 вечера
            </div>

            <div className="column__contact">
              <img className="column__icon" alt="icon" src={inst} />
              <img className="column__icon" alt="icon" src={pint} />
            </div>
          </div>
        </div>

        <div className="contact__column">
          <div>
            <h2 className="contact__column_title">Дизайн</h2>
            <ol className="column">
              <li className="column__name">JUICY</li>
              <li className="column__adress">Победителей пр-кт, д. 65</li>
              <li className="column__tc">ТЦ Замок, Минск</li>
              <li className="column__phone">+375-29-319-33-33 </li>
              <li className="column__email">Rmkrnet2022@gmail.com</li>
            </ol>
          </div>
          <div className="column__right">
            <div className="column__grafik">
              Магазин открыт ежедневно с 10 утра до 22 вечера, с понедельника по
              воскресенье
            </div>
          </div>
        </div>

        <div className="contact__column">
          <div>
            <h2 className="contact__column_title">Искусство</h2>
            <ol className="column">
              <li className="column__name">Творческая мастерская</li>
              <li className="column__phone">+7-968-760-73-10</li>
              <li className="column__email">Rmkrnet2022@gmail.com</li>
            </ol>
          </div>
          <div className="column__right">
            <div className="column__grafik">
              С художником можно связаться с понедельника по пятницу с 9 утра до
              7 вечера
            </div>

            <div className="column__contact">
              <img className="column__icon" alt="icon" src={inst} />
              <img className="column__icon" alt="icon" src={pint} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
