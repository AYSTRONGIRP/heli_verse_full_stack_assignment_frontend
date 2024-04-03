import React from 'react'
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch , useSelector } from 'react-redux'
// import { setEmail , setPassword , setId } from '../slices/login_info'
import { 
    setEmail,
    setId,
    setFirstName,
    setLastName,
    setGender,
    setAvatar,
    setDomain,
    setAvailable,
    clear
} from '../slices/user_info'; // Replace './yourSliceFile' with the correct path to your slice file

import { useNavigate } from 'react-router-dom';

const Member = ()=> {
    let location = useLocation();
    console.log(location.pathname.split('/').pop());
    const userInfo = useSelector(state => state.member); // Assuming "userInfo" is the key for your reducer in the Redux store
    const curr_id = location.pathname.split('/').pop();

    // Destructure the user information object
    const { id, first_name, last_name, email, gender, avatar, domain, available } = userInfo;
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const[member,setMember]= useState();

    const handleInputChange = (e) => {
        const { name, value, checked } = e.target;
        switch(name) {
            case 'id':
                dispatch(setId(value));
                break;
            case 'first_name':
                dispatch(setFirstName(value));
                break;
            case 'last_name':
                dispatch(setLastName(value));
                break;
            case 'email':
                dispatch(setEmail(value));
                break;
            case 'gender':
                dispatch(setGender(value));
                break;
            case 'avatar':
                dispatch(setAvatar(value));
                break;
            case 'domain':
                dispatch(setDomain(value));
                break;
            case 'available':
                dispatch(setAvailable(checked)); 
                // if(value=='on')
                // dispatch(setAvailable(true));
                // else
                // dispatch(setAvailable(false));
                console.log(checked);
                break;
            default:
                break;
        }
    };

    const setStoreMember = (member) => {
        console.log('setting store value with member')
        // console.log(e);
        // case 'id':
                dispatch(setId(member.id));
                // break;
            // case 'first_name':
                dispatch(setFirstName(member.first_name));
                // break;
            // case 'last_name':
                dispatch(setLastName(member.last_name));
                // break;
            // case 'email'/:
                dispatch(setEmail(member.email));
                // break;
            // case 'gender'/:
                dispatch(setGender(member.gender));
                // break/;
            // case 'avatar':
                dispatch(setAvatar(member.avatar));
                // break;
            // case 'domain':
                dispatch(setDomain(member.domain));
                // break;
            // case 'available':
                dispatch(setAvailable(member.available));

    }

    const deleteUser = async () => {
        try {
            const response = await axios.delete(`https://heli-verse-full-stack-assignment-backend.onrender.com/api/users/${id}`);
            console.log('User deleted successfully:', response.data);
            // Handle success scenario, e.g., show a success message
            navigate('/api/users'); // Redirect to home page or any other page
        } catch (error) {
            console.error('Error deleting user:', error);
            // Handle error scenario, e.g., show an error message
        }
    }

    const getMember = async () => {
        const response = await axios.get(`https://heli-verse-full-stack-assignment-backend.onrender.com/api/users/${curr_id}`, {});
        console.log("response")
        console.log(response.data[0])
        setMember(response.data[0])
        setStoreMember(response.data[0]);
    }

    const submitUser = async(e) => {
        e.preventDefault();

        try {
            const response = await axios.put(`https://heli-verse-full-stack-assignment-backend.onrender.com/api/users/${id}`, {
                // member._id,
                id,
                first_name,
                last_name,
                email,
                gender,
                avatar,
                domain,
                available
            });
            console.log('User updated successfully:', response.data);
            // Handle success scenario, e.g., show a success message
        } catch (error) {
            console.error('Error updating user:', error);
            // Handle error scenario, e.g., show an error message
        }
    }

    // useEffect(()=>{
    //     console.log("member");
    //     console.log(member);
    // },[member])

    useEffect(() => {
        getMember();
    },
    [])


    return (<>

    <h2>User Information</h2>
            { id?(
            <form>
                <div className="mb-3">
                    <label htmlFor="id" className="form-label">ID</label>
                    <input type="text" className="form-control" id="id" name="id" value={id} onChange={handleInputChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="first_name" className="form-label">First Name</label>
                    <input type="text" className="form-control" id="first_name" name="first_name" value={first_name} onChange={handleInputChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="last_name" className="form-label">Last Name</label>
                    <input type="text" className="form-control" id="last_name" name="last_name" value={last_name} onChange={handleInputChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" className="form-control" id="email" name="email" value={email} onChange={handleInputChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="gender" className="form-label">Gender</label>
                    <input type="text" className="form-control" id="gender" name="gender" value={gender} onChange={handleInputChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="avatar" className="form-label">Avatar</label>
                    <input type="text" className="form-control" id="avatar" name="avatar" value={avatar} onChange={handleInputChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="domain" className="form-label">Domain</label>
                    <input type="text" className="form-control" id="domain" name="domain" value={domain} onChange={handleInputChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="available" className="form-label">Available</label>
                    <input type="checkbox" className="form-check-input" id="available" name="available" checked={available} onChange={handleInputChange} />
                </div>
                <button onClick={submitUser}> submit</button>
                <button onClick={deleteUser} className="btn btn-danger">Delete</button>
            </form>
):(<> no member</>)
            }      
    </>)
            
    
}

export default Member;