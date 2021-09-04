import React from 'react';
import Preloader from '../../common/Preloader/Preloader';

import s from './ProfileInfo.module.css'

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />
  }
  return (
    <div>
      <div>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf3J2alREStowj6E4Gsua1y9oFG51kPveBVQ&usqp=CAU' />
      </div>
      <div className={s.descriptionBlock}>
        <img src={props.profile.photos.large} />
        ava + discription
      </div>

    </div>
  )

};

export default ProfileInfo;
