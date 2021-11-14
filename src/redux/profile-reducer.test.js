import profileReducer, {addPostActionCreator, deletePost} from "./profile-reducer";
import React from "react";

let state = {
    posts: [
        { id: 1, message: 'hi. how are you', likesCount: '12' },
        { id: 2, message: "it's my first post", likesCount: '11' }
    ]

}


it('new post should be added', () => {
    // 01. test.data
    let action = addPostActionCreator("it-kamasutra")

    // 2.action
    let newState = profileReducer(state, action)

    // 03. expectation
    expect(newState.posts.length).toBe(3)
} )

it('after deleting length of message should be decrement ', () => {
    // 01. test.data
    let action = deletePost(1)

    // 2.action
    let newState = profileReducer(state, action)

    // 03. expectation
    expect(newState.posts.length).toBe(1)
} )


it("after deleting length shouldn't decrement if id is incorrect ", () => {
    // 01. test.data
    let action = deletePost(1000)

    // 2.action
    let newState = profileReducer(state, action)

    // 03. expectation
    expect(newState.posts.length).toBe(2)
} )

