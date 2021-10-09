import { useState } from "react";
import './Login.scss';

const Login = (props) => {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleFirstName = (e) => {
    setFirstName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const submitForm = (e) => {
    e.preventDefault();
    console.log(email);
    console.log(password);
  };
  return (
    <div className="form-signin">
      <form onSubmit={submitForm}>
        <h2>Please {props.registered ? "sign in" : "Register"} </h2>
        {!props.registered && (
          <input
            type="text"
            placeholder="Name"
            name={firstName}
            onChange={handleFirstName}
          />
        )}
        <input
          type="text"
          placeholder="Email Address"
          name={email}
          onChange={handleEmail}
        />
        <input
          type="password"
          placeholder="Password"
          name={password}
          onChange={handlePassword}
        />
        <button type="submit">
          {props.registered ? "sign in" : "Register"}
        </button>
        <p>&copy; 2021</p>
      </form>
    </div>
  );
};

export default Login;
