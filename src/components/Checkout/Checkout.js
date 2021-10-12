import React, { useState, useEffect} from "react";

import { commerce } from '../../lib/commerce';
import AddressForm from "./AddressForm";

const Checkout = ({ cart }) => {
    const [ token, setToken ] = useState(null);
    useEffect(() => {
        const createToken = async () =>{
            const token = await commerce.checkout.generateToken(cart.id, { type: 'cart'});
            console.log(token);
            setToken(token);
        }//he used try catch

        createToken(); //why we create fun and directly call him? because we can't use async in useEffect until it is a function
    }, [cart]) // every time the cart changes the token should changes
  return(
     token && <AddressForm token={token}/> // to avoid that token is null
  )
};

export default Checkout;
