let store ={
    _state :{
        profilePage:{
            posts:[
                {id: 1, message: 'hi. how are you', likesCount: '12'},
                {id: 2, message: "it's my first post", likesCount: '11'}],
            newPostText:'it-kamasutra.com'

        },
        dialogsPage:{
            messages:[
                {id: 1, message: 'Hi'},
                {id: 2, message: 'Hello'},
                {id: 3, message: 'Privet'},
                {id: 4, message: 'Privet'},
                {id: 5, message: 'Privet'}

            ],
            dialogs:[
                {id: 1, name: 'Dimych'},
                {id: 2, name: 'Andrey'},
                {id: 3, name: 'Sveta'},
                {id: 4, name: 'Sasha'},
                {id: 5, name: 'Valera'}],
        },
        sidebar:{}



    },
    _callSubscriber () {
        console.log('state changet')
    },

    getState(){
        return this._state;
    },
    subscribe (observer) {
        this._callSubscriber = observer
    },

    dispatch(action){
        if(action.type ==='ADD-POST'){
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0

            }
            this._state.profilePage.posts.push(newPost)
            this._callSubscriber(this._state)
        } else if(action.type === 'UPDATE-NEW-POST-TEXT'){
            this._state.profilePage.newPostText= action.newText;
            this._callSubscriber(this._state);
        }
    }
}

export default store;
window.store = store;