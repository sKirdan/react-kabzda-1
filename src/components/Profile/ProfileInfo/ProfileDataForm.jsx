import React from "react";
import s from './../Profile.module.css'
import {createField, Input, Textarea} from "../../common/FormsControls/FormsControls";
import {reduxForm} from "redux-form";
import style from "../../common/FormsControls/FormsControls.module.css";

export const ProfileDataForm = ({handleSubmit, profile, error}) => {
    return  <form onSubmit={handleSubmit}>
        <div><button>save</button></div>
        {error && <div className={style.formSummaryError}>
            {error}
        </div>}
        <div>
            <b>Full name</b>: {createField("Full name", "full name", [], Input)}
        </div>
        <div>
            <b>looking for a job</b>: {createField("", "lookingForAJob", [], Input, {type: "checkbox"})}
        </div>

        <div>
            <b>My professional skills</b>:
            {createField("My professional skills", "lookingForAJobDescription", [], Textarea)}
        </div>
        }
        <div>
            <b>About me</b>:
            {createField("About me", "aboutMe", [], Textarea)}
        </div>
          <div>
            <b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
              return <div key={key} className={s.contact}>
                  <b>{key}:{createField(key, "contacts." + key, [], Input)}</b>
              </div>
          })}
        </div>

    </form>

}

const ProfileDataFormReduxForm = reduxForm({form: 'edit-profile'})(ProfileDataForm)
export default ProfileDataFormReduxForm