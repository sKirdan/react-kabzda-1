import React from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post';

const MyPosts = () => {
    let posts = [
        {id: 1, message: 'hi. how are you', likesCount: '12'},
        {id: 2, message: "it's my first post", likesCount: '11'}]



    let postsElements =
        posts.map(p => <Post messages={p.message} likesCount={p.likesCount}/>);

    return (
        <div className={s.postsBlock}>
            <h3>MyPosts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                { postsElements }

            </div>
        </div>

    )
}

export default MyPosts;
