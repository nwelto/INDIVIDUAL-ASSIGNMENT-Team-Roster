/* eslint-disable @next/next/no-img-element */
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { viewMemberDetails } from '../../api/mergedData';

export default function ViewMembers() {
  const [memberDetails, setmemberDetails] = useState({});
  const router = useRouter();

  const { firebaseKey } = router.query;

  useEffect(() => {
    viewMemberDetails(firebaseKey).then(setmemberDetails);
  }, [firebaseKey]);

  return (
    <div className="mt-5 d-flex flex-wrap">
      <div className="d-flex flex-column">
        <img src={memberDetails.image} alt={memberDetails.first_name} style={{ width: '300px' }} />
      </div>
      <div className="text-white ms-5 details">
        <h5>{memberDetails.first_name} {memberDetails.last_name}</h5>
        <h6>Position: {memberDetails.role}</h6>
        <h6>Team: {memberDetails.teamObject?.name}</h6>
      </div>
    </div>
  );
}
