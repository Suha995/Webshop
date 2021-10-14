import { useState, useEffect } from "react";
import "./styles.scss";
import { commerce } from "../../lib/commerce";
import { Link } from 'react-router-dom';

const AddressForm = ({ token, next }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [shippingSubdivision, setShippingSubdivision] = useState("");
  const [shippingSubdivisions, setShippingSubdivisions] = useState([]);
  const [shippingOption, setShippingOption] = useState("");
  const [shippingOptions, setShippingOptions] = useState([]);
  const [zip, setZip] = useState("");
  

  const fetchCountries = async (tokenId) => {
    const response = await commerce.services.localeListShippingCountries(
      tokenId
    );
    console.log(response.countries); // object of key and value {DE: 'Germany'}
    setCountry(Object.keys(response.countries)[0]);
  };

  const fetchSubdivisions = async (countryId) => {
    const response = await commerce.services.localeListSubdivisions(countryId);
    console.log(Object.entries(response.subdivisions)); // object of key and value
    setShippingSubdivision(Object.keys(response.subdivisions)[0]);
    setShippingSubdivisions(Object.entries(response.subdivisions));
  };
  const fetchOptions = async (tokenId, country, region = null) => {
    const options = await commerce.checkout.getShippingOptions(tokenId, {
      country,
      region,
    });
    console.log(options);
    setShippingOptions(options);
    setShippingOption(options[0].id);
  };

  useEffect(() => {
    fetchCountries(token.id);
  }, [token.id]);

  useEffect(() => {
    if (country) fetchSubdivisions("DE");
  }, [country]);

  useEffect(() => {
    if (shippingSubdivision)
      fetchOptions(token.id, country, shippingSubdivision);
  }, [shippingSubdivision,token.id, country]);

  

  return (

    <div className="address-form">
      <h2>Shipping Address</h2>
      <form onSubmit={(data) => next({firstName, lastName, email, address, city, country, zip, shippingOption, shippingSubdivision})}>
        <div className="lines">
          <div className="line-sec">
            <p>First name:</p>

            <input
              type="text"
              name="firstName"
              value={firstName}
              placeholder="First name"
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </div>
          <div className="line-sec">
            <p>Last name:</p>

            <input
              type="text"
              name="lastName"
              value={lastName}
              placeholder="Last name"
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="lines">
          <div className="line-sec">
            <p>Address:</p>

            <input
              type="text"
              name="address"
              value={address}
              placeholder="Address"
              onChange={(e) => setAddress(e.target.value)}
              required
            />
          </div>
          <div className="line-sec">
            <p>Email:</p>
            <input
              type="email"
              name="email"
              value={email}
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="lines">
          <div className="line-sec">
            <p> Shipping country:</p>
            <input type="text" name="country" value={country} readOnly />
          </div>

          <div className="line-sec">
            <p>City:</p>
            <input
              type="text"
              name="city"
              value={city}
              placeholder="city"
              onChange={(e) => setCity(e.target.value)}
            />
          </div>
        </div>
        <div className="lines">
          <div className="line-sec">
            <p> Zip/ Postal code:</p>
            <input
              type="text"
              name="zip"
              value={zip}
              placeholder="Zip/ Postal Code"
              onChange={(e) => setZip(e.target.value)}
              required
            />
          </div>
          <div className="line-sec">
            <p> Shipping Subdivision </p>
            <select
              name="subdivisions"
              value={shippingSubdivision}
              onChange={(e) => setShippingSubdivision(e.target.value)}
            >
              {shippingSubdivisions.map(([id, value]) => (
                <option key={id} value={id}>
                  {value}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="lines">
          <div className="line-sec">
            <p> Shipping Options </p>
            <select
              name="options"
              value={shippingOption}
              onChange={(e) => setShippingOption(e.target.value)}
            >
              {shippingOptions.map((option) => (
                <option
                  key={option.id}
                  value={option.id}
                >{`${option.description} - ${option.price.formatted_with_symbol}`}</option>
              ))}
            </select>
          </div>
          <div className='line-sec'>
          <button type="submit">Submit</button>
          </div>
        </div>
      </form>
      <Link to='/shopping-cart'><button type="button">Back to cart</button></Link>
    </div>
  );
};

export default AddressForm;
