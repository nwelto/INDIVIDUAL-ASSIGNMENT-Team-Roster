import React, { useEffect, useState } from 'react';
import { useAuth } from '../utils/context/authContext';
import { getMember } from '../api/memberData';
import MemberCard from '../components/MemberCard';
import { viewMemberDetails } from '../api/mergedData';

function ShowMembers() {
  const [memberDetails, setMemberDetails] = useState([]);

  const { user } = useAuth();

  const getAllMembers = () => {
    getMember(user.uid).then((memberList) => {
      Promise.all(memberList.map((member) => viewMemberDetails(member.firebaseKey)))
        .then(setMemberDetails);
    });
  };

  useEffect(() => {
    getAllMembers();
  }, []);

  return (
    <div className="text-center my-4">
      <div className="d-flex flex-wrap">
        {memberDetails.map((member) => (
          <MemberCard key={member.firebaseKey} memberObj={member} teamName={member.teamObject?.name} onUpdate={getAllMembers} />
        ))}
      </div>
    </div>
  );
}

export default ShowMembers;
