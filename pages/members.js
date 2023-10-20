import React, { useEffect, useState } from 'react';
import { useAuth } from '../utils/context/authContext';
import { getMember } from '../api/memberData';
import MemberCard from '../components/MemberCard';

function ShowMembers() {
  const [members, setMembers] = useState([]);

  const { user } = useAuth();

  const getAllMembers = () => {
    getMember(user.uid).then(setMembers);
  };

  useEffect(() => {
    getAllMembers();
  }, []);

  return (
    <div className="text-center my-4">
      <div className="d-flex flex-wrap">
        {members.map((member) => (
          <MemberCard key={member.firebaseKey} memberObj={member} onUpdate={getAllMembers} />
        ))}
      </div>

    </div>
  );
}

export default ShowMembers;
