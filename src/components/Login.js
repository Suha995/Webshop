import { useState } from 'react';
const Login = () => {
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');

    const handleEmail = (e) => {
        setEmail(e.target.value);
    }
    const handlePassword = (e) => {
        setPassword(e.target.value);
    }
    const submitForm = (e) =>{
        e.preventDefault();
        console.log(email);
        console.log(password);
    }
  return (
    <div className="form-signin">
      <form onSubmit={submitForm}>
        <h2>Please sign in </h2>
        <input type='text' placeholder='Email Address' name={email} onChange={handleEmail} />
        <input type='password' placeholder='Password' name={password} onChange={handlePassword} />
        <button type='submit'>Submit</button>
        <p>&copy; 2021</p>
      </form>
    </div>
  );
};

export default Login;
