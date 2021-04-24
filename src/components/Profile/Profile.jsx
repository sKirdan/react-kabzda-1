import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.css'

const Profile = () => {
  return (
    <div className={s.content}>
      <div>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf3J2alREStowj6E4Gsua1y9oFG51kPveBVQ&usqp=CAU' />
      </div>
      <div>
        ava + discription
      </div>
      <MyPosts/>
    </div>
  )
};

export default Profile;
