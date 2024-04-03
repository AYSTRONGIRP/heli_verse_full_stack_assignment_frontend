import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Teams = () => {
  // State to store the fetched teams
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    // Fetch teams data from the API endpoint
    const fetchTeams = async () => {
      try {
        const response = await axios.get('https://heli-verse-full-stack-assignment-backend.onrender.com/api/team');
        setTeams(response.data);
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching teams:', error);
      }
    };

    fetchTeams();
  }, []);

  return (
    <div>
      <h2>All Teams</h2>
      <div className="team-container">
      {teams.length === 0 ? (
        <p>Loading...</p>
      ) : (
        teams.map(team => (
          <div key={team._id} className="team-card">
            <h3>Team ID: {team._id}</h3>
            <h4>Members:</h4>
            <ul>
              {team.members.map(member => (
                <li key={member.id}>
                  {member}
                </li>
              ))}
            </ul>
          </div>
        ))
      )}
      </div>
    </div>
  );
};

export default Teams;
