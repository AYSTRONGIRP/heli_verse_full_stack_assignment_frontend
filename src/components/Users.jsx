import React from 'react'
import { useState, useEffect } from 'react';
// import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Import Bootstrap's JavaScript file
// import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
// import Landing_page from './components/Landing_page'
import { Routes, Route ,Navigate } from 'react-router-dom';
import { useDispatch , useSelector} from 'react-redux'
import { useNavigate  } from 'react-router-dom';
import Users_Card from './Users_card';

const Users = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const teamMembers = useSelector(state => state.team.members);

    const id = useSelector((state)=>state.info.id)
    const email = useSelector((state)=>state.info.email)
    const password = useSelector((state)=>state.info.password)
    const name = useSelector((state)=>state.info.name)
    // const dispatch = useDispatch();
    const [users, setUsers] = useState();
    const [currentPage, setCurrentPage] = useState(1);
    const [domainFilter, setDomainFilter] = useState('');
    const [genderFilter, setGenderFilter] = useState('');
    const [availabilityFilter, setAvailabilityFilter] = useState();
    //  const navigate = useNavigate();


    const paginate = pageNumber => setCurrentPage(pageNumber);

    const handleSubmit = async() => {
      // Dispatch an action to update the team members with the selected members
      // Here, you would typically send an API request to save the changes to the server
      console.log("Selected Members:", teamMembers);
      const response = await axios.post('https://heli-verse-full-stack-assignment-backend.onrender.com/api/team',{selectedMembers: teamMembers})
      // Dispatch action to update team members in Redux store
      // dispatch(updateTeamMembers(selectedMembers));
  };

  const fetchUser = async() => {
    // const response = await axios.get('http://localhost:8080/api/users',{ page: currentPage});
    const response = await axios.get(`https://heli-verse-full-stack-assignment-backend.onrender.com/api/users/?page=${currentPage}`, {
            params: {
                domain: domainFilter,
                gender: genderFilter,
                availability: availabilityFilter
            }
        });
    console.log("api call")
    console.log(response.data.results);
    setUsers(response.data.results)
    console.log(users)
   }

     useEffect(()=>{
      
     fetchUser();
    },[currentPage, domainFilter, genderFilter, availabilityFilter]);

    useEffect(() => {
      console.log(users); // Log users whenever it changes
      console.log("changed users")
    }, [users]);

    const handleDomainChange = (event) => {
      setDomainFilter(event.target.value);
  };

  const handleGenderChange = (event) => {
      setGenderFilter(event.target.value);
  };

  const handleAvailabilityChange = (event) => {
    const value = event.target.value.toLowerCase(); // Convert to lowercase for case insensitivity
    // Convert to boolean
    const availability = value === 'true' ? true : value === 'false' ? false : null;
    setAvailabilityFilter(availability);
};


  return (
    <>
    <button className="btn btn-secondary" onClick={() => navigate('/api/teams')}>View Teams</button>
    <div>
                <label>Domain:</label>
                <input type="text" value={domainFilter} onChange={handleDomainChange} />
            </div>
            <div>
                <label>Gender:</label>
                <input type="text" value={genderFilter} onChange={handleGenderChange} />
            </div>
            <div>
            <label>Availability:</label>
            <select value={availabilityFilter} onChange={handleAvailabilityChange}>
        <option value="">Select Availability</option>
        <option value="true">True</option>
        <option value="false">False</option>
    </select>
                {/* <label>Availability:</label>
                <input type="text" value={availabilityFilter} onChange={handleAvailabilityChange} /> */}
            </div>
    <div>
      {
      users && users.length > 0 ? (
        users.map((user) => (
          <Users_Card key={user.id} prop={user} />
        ))
      ) : (
        <p>No users found</p>
      )
    }
      
    </div>
    <nav>
    <ul className="pagination">
        <li className="page-item">
            <button
                className="page-link"
                onClick={() => {setCurrentPage(currentPage === 1 ? currentPage : currentPage - 1)
                  fetchUser();}
                }
            >
                Previous
            </button>
        </li>
        <li className="page-item disabled">
            <span className="page-link">Page {currentPage}</span>
        </li>
        <li className="page-item">
            <button
                className="page-link"
                onClick={() => {
                  setCurrentPage(currentPage + 1)
                  fetchUser();
                }}
            >
                Next
            </button>
        </li>
    </ul>
</nav>
    <div className="mt-3">
    <h5>Current Team Members:</h5>
    <ul>
        {teamMembers.map(memberId => (
            <li key={memberId}>Member ID: {memberId}</li>
        ))}
    </ul>
    <button className="btn btn-primary" onClick={handleSubmit}>Submit</button>
  </div>
  </>
  )
}

export default Users
