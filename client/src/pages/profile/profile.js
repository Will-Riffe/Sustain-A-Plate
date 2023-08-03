import React, { useState } from 'react';
// import transHistory from '../../components/transactions';
import PROFILEPICS from '../../assets/profile-templates/profilepics';
import ProfileCards from '../../components/profileCards/profileCards';


export default function Profile() {
  const [profile] = useState([
    {
      title: 'Browse Stores',
      image: PROFILEPICS.Browse,
      link: '/food'
    },
    {
      title: 'Transaction History',
      image: PROFILEPICS.PreviousTransactions,
      link: '/list'
    }
  ])
  return (
    <section className='profile-space'>
      <div className='profileCard-sections'>
        {profile.map((profilecard, index) => (
          <ProfileCards key={index} {...profilecard} />
        ))}
      </div>
    </section>
  )
}