import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { viewTeamDetails } from '../../api/mergedData';
import MemberCard from '../../components/MemberCard';

export default function ViewTeam() {
  const [teamDetails, setTeamDetails] = useState({});

  const router = useRouter();

  const { firebaseKey } = router.query;

  const getTeamDetails = () => {
    viewTeamDetails(firebaseKey).then(setTeamDetails);
  };

  useEffect(() => {
    getTeamDetails();
  }, []);

  return (
    <div className="cardContainer">{teamDetails.members?.map((member) => (
      <MemberCard key={member.firebaseKey} memberObj={member} teamName={teamDetails.name} onUpdate={getTeamDetails} />
    ))}
    </div>
  );
}
