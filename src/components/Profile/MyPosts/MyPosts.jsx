import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { maxLengthCreator, required } from '../../../utils/validators';
import s from './MyPosts.module.css'
import Post from './Post/Post';
import { Textarea } from '../../common/FormsControls/FormsControls';

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

const maxLength10 = maxLengthCreator(10)

const AddNewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name="newPostText" component={Textarea} placeholder="PostMessage"
                    validate={[required, maxLength10]} />
            </div>
            <div>
                <button >Add Post</button>
            </div>
        </form>
    )
}
let AddNewPostFormRedux = reduxForm({ form: "ProfileAddNewPostForm" })(AddNewPostForm)

export default MyPosts;
