import React from "react";

function Delivery() {
  return (
    <section className="delivery">
      
      <ol className="delivery__content">
      <h1 className="delivery__title">ДОСТАВКА</h1>
        <li className="delivery__el">
          Продаем и доставляем произведения искусства по всему миру{" "}
        </li>
        <li className="delivery__el">
          Почтовые расходы или доставка, упаковка за счет покупателя
        </li>
        <li className="delivery__el">
          Ваш заказ может облагаться пошлинами и налогами, которые применяются в
          вашей стране рекомендуем связаться с местной таможней перед
          размещением заказа
        </li>
        <li className="delivery__el">
          Все применимые расходы на доставку, если не оговорено иное, должны
          быть произведены до того, как мы отправим Вам товар{" "}
        </li>
      </ol>

    </section>
  );
}

export default Delivery;
