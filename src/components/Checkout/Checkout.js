import React, { useState, useEffect } from "react";

import { commerce } from "../../lib/commerce";
import AddressForm from "./AddressForm";
import Payment from "./Payment";

const steps = ["Shipping Address", "Payment Details"];

const Checkout = ({ cart }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [token, setToken] = useState(null);
  const [shippingData, setShippingData] = useState({});

  useEffect(() => {
    const createToken = async () => {
      try {
        const token = await commerce.checkout.generateToken(cart.id, {
          type: "cart",
        });
        console.log(token);
        setToken(token);
      } catch (error) {}
    }; //he used try catch

    createToken(); //why we create function and directly call him? because we can't use async in useEffect until it is a function
  }, [cart]); // every time the cart changes the token should changes

  const next = (data) => {
    setShippingData(data);
    setCurrentStep((pre) => pre + 1);
  };

  const back = () => {
    
    setCurrentStep((pre) => pre - 1);
  };

  switch (currentStep) {
    case 0:
      return token && <AddressForm token={token} next={next} />;
    case 1:
      return <Payment shippingData={shippingData} token={token} back={back}/>; // to finalize the order
    case steps.length:
      return <div>Confirmation</div>;
    default:
      return null;
  }
  //  token && <AddressForm token={token}/> // to avoid that token is null
};

export default Checkout;
