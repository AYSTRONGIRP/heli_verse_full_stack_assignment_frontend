import React from 'react'
import axios from 'axios';
import { useDispatch , useSelector } from 'react-redux'
import { setEmail , setPassword , setId } from '../slices/login_info'
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const id = useSelector((state)=>state.info.id)
  const email = useSelector((state)=>state.info.email)
  const password = useSelector((state)=>state.info.password)
  const name = useSelector((state)=>state.info.name)
  
  const dispatch = useDispatch();
  const navigate = useNavigate();
  console.log("123" , email, password);

  const loginUser = async(e) => {
    e.preventDefault();
    const response = await axios.post('https://heli-verse-full-stack-assignment-backend.onrender.com/login', {
    email:email,
    password:password,
  });

  console.log(email, password);
    // const response = await axios({
    //   method: 'POST',
    //   url: 'http://localhost:8080/login',
    //   data:{
    //     email:email,
    //     password:password
    //   },
    // })
    // console.log(response.data);

    await dispatch(setId(response.data));
    console.log("response.data")
    console.log(id)
    console.log(response.data);
    if(response.data)
    {
      navigate('api/users');
    }
  }
  // const goToRegister = () => {
  //   navigate('/register'); // Use navigate to go to the register page
  // };
  return (
    <div>
      <style>
        {`
          div {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
          }

          h2 {
            margin-bottom: 20px;
          }

          label {
            margin-bottom: 5px;
          }

          input {
            margin-bottom: 10px;
          }

          button {
            margin-top: 10px;
          }
        `}
      </style>
      <div className='center'>
        <h2>User Login</h2>

        <form id="loginForm" onSubmit={loginUser}>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" value={email} onChange={(e)=>{dispatch(setEmail(e.target.value))}} required></input><br></br>

        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" value={password} onChange={(e)=>{dispatch(setPassword(e.target.value))}} required></input><br></br>

        <button onClick={loginUser} type="submit">Login</button>
        </form>
        {/* <button onClick={goToRegister}>Go to Register</button> */}
        </div>
    </div>
  )
}

export default Login
