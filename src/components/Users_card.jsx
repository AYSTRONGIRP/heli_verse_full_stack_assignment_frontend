import React, { useEffect } from 'react';
// import { useSelector } from 'react-redux';
import { useNavigate  } from 'react-router-dom';
import { addMember, removeMember } from '../slices/team_info'; // Import the addMember and removeMember actions from your team slice

import { useDispatch, useSelector } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const Users_Card = (userInfo) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const teamMembers = useSelector(state => state.team.members); 
    // Select team_info_sliceinformation from the Redux store
    // const userInfo = useSelector(state => state.userInfo); // Assuming "userInfo" is the key for your reducer in the Redux store
    // console.log("userInfo");
    // console.log(userInfo);

    // const navigate = useNavigate();
    const handleAddToTeam = () => {
        dispatch(addMember(userInfo.prop.id));
        console.log(teamMembers)
    };

    const handleRemoveFromTeam = () => {
        dispatch(removeMember(userInfo.prop.id));
        console.log(teamMembers)
    };


    const handleClick = () => {
        // Navigate to the desired URL when the card is clicked
        navigate(`/api/users/${userInfo.prop.id}`)
        // history.push(`/user/${prop.id}`); // Example URL structure: /user/:userId
    };

    return (
        <div className="card"  >
            <div className="card-body" onClick={handleClick} >
                <h5 className="card-title" >User Information</h5>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"><strong>ID:</strong> {userInfo.prop.id}</li>
                    <li className="list-group-item"><strong>First Name:</strong> {userInfo.prop.first_name}</li>
                    <li className="list-group-item"><strong>Last Name:</strong> {userInfo.prop.last_name}</li>
                    <li className="list-group-item"><strong>Email:</strong> {userInfo.prop.email}</li>
                    <li className="list-group-item"><strong>Gender:</strong> {userInfo.prop.gender}</li>
                    <li className="list-group-item">
                        <strong>Avatar:</strong> 
                        <img src={userInfo.prop.avatar} alt="Avatar" style={{ width: '100px', height: '100px' }} />
                    </li>
                    <li className="list-group-item"><strong>Domain:</strong> {userInfo.prop.domain}</li>
                    <li className="list-group-item"><strong>Available:</strong> {userInfo.prop.available ? 'Yes' : 'No'}</li>
                </ul>
                
            </div>
            {!teamMembers.includes(userInfo.prop.id) ? (
                    <button className="btn btn-primary mt-3" onClick={handleAddToTeam}>Add to Team</button>
                ) : (
                    <button className="btn btn-danger mt-3" onClick={handleRemoveFromTeam}>Remove from Team</button>
                )}
        </div>
    );
};

export default Users_Card;
