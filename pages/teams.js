import React, { useEffect, useState } from 'react';
import { useAuth } from '../utils/context/authContext';
import { getTeam } from '../api/teamData';
import TeamCard from '../components/TeamCard';

function ShowTeams() {
  const [teams, setTeams] = useState([]);

  const { user } = useAuth();

  const getAllTeams = () => {
    getTeam(user.uid).then(setTeams);
  };

  useEffect(() => {
    getAllTeams();
  }, []);

  return (
    <div className="text-center my-4">
      <div className="d-flex flex-wrap">
        {teams.map((team) => (
          <TeamCard key={team.firebaseKey} teamObj={team} onUpdate={getAllTeams} />
        ))}
      </div>

    </div>
  );
}

export default ShowTeams;
