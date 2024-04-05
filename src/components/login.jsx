import React, { useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const dispatch = useDispatch();
  const  navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {

    try {
      const response = await axios.post('http://localhost:2000/login', { email, password });
      const { firstName } = response.data;
      dispatch({ type: 'SET_USER', payload: firstName }); 
       if(response.data) {
        navigate('/')
       }       
    } catch (error) {
      console.error('Login failed', error);
    }
  };

  const redirecter = () => {
    navigate('/register');
  }

  return (
    <div style={{display:"flex",flexDirection:"column",alignItems:"center",gap:"30px",backgroundImage:`url(day5blue.png)`,height:"700px"}}>
      <h2 style={{fontFamily:"Times New Roman",fontSize:"60px"}}>Login</h2>
      <div>
        <label style={{fontFamily:"fantasy",fontSize:"20px",fontStyle:"italic", color:"aquamarine"}}>Email:</label>
        <input style={{border:"1px solid black",borderRadius:"8px"}}
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <label style={{fontFamily:"fantasy", fontSize:"20px",fontStyle:"italic",color:"aquamarine"}}>Password:</label>
        <input style={{border:"1px solid black",borderRadius:"8px"}}
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <button onClick={handleSubmit} style={{width:"90px", height:"30px",border:"1px",borderRadius:"20px"}}>Login</button> 

      <button onClick={redirecter} style={{width:"90px", height:"30px",border:"1px",borderRadius:"20px"}}>Register</button> 

    </div>
  );
};

export default Login;
