import React from "react";
import { useSelector } from "react-redux";
import { selectorCartPrice } from "../selectors/reduxSelectors";

const PaymentFooter = () => {
  const cartPrice = useSelector(selectorCartPrice);

  return (
    <footer>
      {cartPrice > 0 && (
        <a href="#payment" className="food-app-pay-btn" aria-live="polite">
          Pay for food (${cartPrice})
        </a>
      )}
    </footer>
  );
};

export default PaymentFooter;
