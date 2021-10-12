import {useState, useEffect } from 'react'

import { commerce } from '../../lib/commerce';

const AddressForm = ({ token }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState('');
  const [cities, setCities] = useState([]);
  const [zip, setZip] = useState("");
//   const cities = ["Nordrein", "Dortmund", "Datteln"]; //backend

  const fetchCountries = async (tokenId) => {
      const response = await commerce.services.localeListShippingCountries(tokenId);
      console.log(response.countries) // object of key and value {DE: 'Germany'}
      setCountry(Object.values(response.countries)[0]);
  }

  const fetchCities = async (countryId) => {
    const response = await commerce.services.localeListSubdivisions(countryId);
    console.log(Object.entries(response.subdivisions));// object of key and value
    setCity(Object.keys(response.subdivisions)[0]);
    setCities(Object.entries(response.subdivisions));
  }

  useEffect(() => {
      fetchCountries(token.id);
  }, [])

  useEffect(() => {
    fetchCities('DE');
}, [])

  const handelSubmit = (e) => {
    e.preventDefault();
  };

  
  return (
    <div>
      <form onSubmit={handelSubmit}>
        <input
          type="text"
          name="firstName"
          value={firstName}
          placeholder="First name"
          onChange={(e) => setFirstName(e.target.value)}
          required
        />
        <input
          type="text"
          name="lastName"
          value={lastName}
          placeholder="Last name"
          onChange={(e) => setLastName(e.target.value)}
          required
        />
        <input
          type="text"
          name="address"
          value={address}
          placeholder="Address"
          onChange={(e) => setAddress(e.target.value)}
          required
        />
        <input
          type="email"
          name="email"
          value={email}
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input type='text'name='country' value={country} placeholder='City' readOnly/>

        <input
          type="number"
          name="zip"
          value={zip}
          placeholder="Zip/ Postal Code"
          onChange={(e) => setZip(e.target.value)}
          required
        />
        <select name="city" value={city} onChange={(e) => setCity(e.target.value)}>
          {cities.map(([id, value]) => <option key={id} value={id}>{value}</option> )}
        </select>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default AddressForm
