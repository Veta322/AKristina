import React from "react";
import order from "../../images/order.png"

function Order() {
  return (
    <section className="order">
      <h1 className="order__title">ЗАКАЗАТЬ КАРТИНУ</h1>
      <div className="order__content">
        <p className="order__text">
          Благодарим вас за проявленный интерес к нашей творческой мастерской.
          Вы можете заказать любую понравившуюся картину в следующем размере —
          80х60, 100х70, 120х80, 130х90. Напишите нам и мы ответим в течении
          суток
        </p>
        <p className="order__email">Rmkrnet2022@gmail.com</p>
      </div>

    </section>
  );
}

export default Order;
