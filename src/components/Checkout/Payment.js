import React from "react";
import {
  Elements,
  CardElement,
  ElementsConsumer,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);

const Payment = ({ shippingData, token, back }) => {
  return (
    <div>
      <div className="review">
        <h3>Order Summery</h3>

        {token.live.line_items.map((product) => {
          return (
            <div className="description" key={product.name}>
              <p>{product.name}</p>
              <p>{`Quantity: ${product.quantity}`}</p>
              <p>{product.line_total.formatted_with_symbol}</p>
            </div>
          );
        })}
        <br />
        <br />
        <div className="Subtotal">
          <h4>{token.live.subtotal.formatted_with_symbol}</h4>
        </div>
      </div>
      <div>
        <h3>Payment method</h3>
        <Elements stripe={stripePromise}>
          <ElementsConsumer>
            {({ elements, stripe }) => (
              <form onSubmit="">
                <CardElement />
                <br /> <br />
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <button onClick={back}>Back</button>
                  <button type="submit" disabled={!stripe}>
                    Pay {token.live.subtotal.formatted_with_symbol}
                  </button>
                </div>
              </form>
            )}
          </ElementsConsumer>
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
