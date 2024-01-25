import React from "react";
import snake from "../../images/snakeart.png";
import lion from "../../images/lion.png";
import arrow from "../../images/Arrow.svg";
function About() {
  return (
    <>
      <section className="about">
        <div className="about__description">
          <h1 className="art__title">ХУДОЖНИК</h1>
          <h2 class="art__name">АФАНАСЬЕВА КРИСТИНА</h2>
          <div className="art__text_container">
            <p className="about__text ">
              Новое имя в Art Deco, художник, который делает картины, комбинируя
              краску с нетрадиционными материалами, для создания многослойных и
              текстурированных поверхностей. Это не радикальная или новая идея,
              но художник использует технику настолько мастерски, что когда вы
              приближаетесь к картине, осознаёте огромный объём работы,
              связанной с созданием этих удивительных и визуально ярких объектов
              искусства
            </p>
          </div>
        </div>
      </section>
      <section className="about__snake">
        <div className="about__snake_container">
          <img className="about__snake_image" src={snake} alt="snake" />
          <p className="about__snake_text">
            Процесс создания картины © Афанасьева Кристина{" "}
          </p>
        </div>
      </section>
      <section className="about__lion">
        <div className="lion__description">
          <h2 className="lion__title">О Художнике</h2>
          <p className="lion__text">
            Кристины Афанасьева — художник в стиле ар-деко. Каждая из её работ
            превращает современные жилые помещения в гавань творческого
            вдохновения и эстетического наслаждения. Родившис в Белоруссии, она
            с успехом окончила Белорусский Государственный Институт Культуры и
            Искусств, став лауреатом стипендии Президента Республики Беларусь.
            Её искусство проникнуто духом открытий, свободы. глубина её
            художественного видения находит выражение в её работах, украшающих
            различные пространства по всему миру от квартир до офисов и отелей.
            От современных домов Москвы и Минска, до шумных офисов Пекина и
            небоскрёбов Дубая. Её работы живут вне географических границ.
            Афанасьева в своих картинах говорит со зрителем на понятном языке,
            очаровывая своей вневременной стилистикой, связывая эмоционально
            сущность жизни и искусства в гармоничном существовании
          </p>
        </div>
        <div className="lion__pic">
          <img className="lion__image" src={lion} alt="lion" />
          <p className="lion__image_text">Картина Лев © Афанасьева Кристина</p>
        </div>
      </section>
      <section className="exhibition">
        <div className="title__container">
          <h1 className="exhibition__title">ВЫСТАВКИ</h1>
          </div>
          <div className="table">
            <div className="table__top">
              <a href="#" className="table__title">
                <p>ЗАПИСАТЬСЯ НА МАСТЕР КЛАСС</p>
                <img className="mk__arrow table__arrow" alt="arrow" src={arrow} />
              </a>
              <span className="table__line_top"></span>
              <a href="#" className="table__title table__title_full">
                <p>КУПИТЬ ИСКУССТВО</p>
                <img className="mk__arrow table__arrow" alt="arrow" src={arrow} />
              </a>
            </div>
            <div className="table__bot">
              <div className="table__text">
                <p className="table__bot_title">
                  Выставка: СОВРЕМЕННОЕ ИСКУССТВО ARTA — 2023
                </p>
                <p className="table__bot_text">
                  Галерея Atrmaison 18 марта — 24 марта 2023г
                </p>
              </div>
              <span className="table__line_bot"></span>
              <div className="table__text">
                <p className="table__bot_title">Выставка: КРАСКИ ЖИЗНИ 2023</p>
                <p className="table__bot_text">
                  Галерея Антиквариум 18 апреля — 29 апреля 2023г
                </p>
              </div>
            </div>
            <a href="#" className="table__title table__title_mobile">
                <p >КУПИТЬ ИСКУССТВО</p>
                <img className="mk__arrow table__arrow" alt="arrow" src={arrow} />
              </a>

          </div>
      
      </section>
    </>
  );
}

export default About;
