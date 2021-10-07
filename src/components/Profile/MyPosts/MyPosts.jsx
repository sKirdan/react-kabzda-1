import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { required } from '../../../utils/validators';
import s from './MyPosts.module.css'
import Post from './Post/Post';

const MyPosts = (props) => {

    let postsElements =
        props.posts.map(p => <Post messages={p.message} likesCount={p.likesCount} />);

    let newPostElement = React.createRef();

    let onAddPost = (values) => {
        props.addPost(values.newPostText)
    }

    return (
        <div className={s.postsBlock}>
            <h3>MyPosts</h3>
            <AddNewPostFormRedux onSubmit={onAddPost} />
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>

    )
}

const AddNewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name="newPostText" component="textarea" validate={[required]} />
            </div>
            <div>
                <button >Add Post</button>
            </div>
        </form>
    )
}
let AddNewPostFormRedux = reduxForm({ form: "ProfileAddNewPostForm" })(AddNewPostForm)

export default MyPosts;
