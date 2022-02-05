import React from "react";
import Paginator from "../common/Paginator/Paginator";
import User from "./User";

let Users = (currentPage, totalUsersCount, pageSize, onPageChanged, users, ...props) => {
    return <div>
        <Paginator currentPage={currentPage} onPageChanged={onPageChanged}
                   totalUsersCount={totalUsersCount} pageSize={pageSize}/>

        <div>
			{
            users.map(user => <User  user={user}
                                  followingInProgress={props.followingInProgress}
                                  key={user.id}
                                  unfollow={props.unfollow}
                                  follow={props.follow}
               		 />
            	)
            }
        </div>
    </div>

};
export default Users;
