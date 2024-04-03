import React from 'react'
import axios from 'axios';
import { setName,setEmail,setPassword} from '../slices/login_info'
import { useSelector,useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';


const Register = () => {
  const name = useSelector((state)=>state.info.name)
  const email = useSelector((state)=>state.info.email)
  const password = useSelector((state)=>state.info.password)
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const registerUser = async(e) => {
    e.preventDefault();
    const response = await axios({
      method: 'POST',
      url: 'https://heli-verse-full-stack-assignment-backend.onrender.com/register',
      data:{
        name:name,
        email:email,
        password:password
      },
    })

    console.log(response.data);
    if(response.data)
    {
      alert('Success')
    }
  }

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
      <h2>User Registration</h2>
        <form id="registerForm" onSubmit={registerUser}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" value={name} onChange={(e)=>{dispatch(setName(e.target.value))}} required></input><br></br>

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" value={email} onChange={(e)=>{dispatch(setEmail(e.target.value))}} required></input><br></br>

        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" value={password} onChange={(e)=>{dispatch(setPassword(e.target.value))}} required></input><br></br>

        <button onClick={registerUser}type="submit">Register</button>
    </form>
    {/* <button onClick={()=>{navigate('/login');}}>Go to Login</button> */}
    </div>
  )
}

export default Register
