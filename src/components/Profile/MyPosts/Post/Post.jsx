import React from 'react';
import s from './Post.module.css'

const Post = () => {
  return (

    <div className={s.item}>
      <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvdY009VmNo5ASO_kB122ly8GXh-IMT4SbPQ&usqp=CAU' />
          post1
      <div>
        <span>like</span>
      </div>
    </div>
  )
};

export default Post;
