import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const dispatch = useDispatch()
  const navigator = useNavigate()
  const logout = () => {
    dispatch({ type: 'SET_USER', payload: 'user not found' }); 
    navigator('/login')
  }
  const user = useSelector((state) => state.user.user);

  return (
    <center><div style={{ border:"2px solid black",backgroundImage:`url(day5.webp)`,backgroundRepeat:"no-repeat", backgroundSize:"cover"}}>

      <nav><h1 style={{color:"maroon", fontFamily:"Times New Roman",backgroundColor:"blanchedalmond"}}>Home</h1></nav>

        <div style={{justifyContent:"center",alignItems:"center", border:'2px solid maroon', gap:'10px', width:'200px', height:'200px', padding:"50px",borderRadius:"100px", borderBlockColor:"magenta",borderBlockEndColor:"blueviolet",backgroundColor:"bisque"}}>

      <h2 style={{fontFamily:"Times New Roman",textAlign:"center"}}>Welcome, {user}!</h2>
      
      <p style={{fontFamily:"Times New Roman", fontSize:"20px",textAlign:"center"}}>This is your home page.</p>
      <br></br>

      <button onClick={logout} style={{fontFamily:"times new roman", borderRadius:"8px",width:"80px", height:"40px", borderBlockColor:"pink"}}>logout</button>
     </div>
      </div>
      </center>
    
  );
};

export default Home;
