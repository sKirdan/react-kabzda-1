let rerenderEntireTree = () =>{
    console.log('state changet')
}


let state ={
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



   }
export let addPost = () =>{
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likesCount: 0

    }
    state.profilePage.posts.push(newPost)
    rerenderEntireTree(state)
}
export const updateNewPostText = (newText) =>{
    state.profilePage.newPostText= newText;
    rerenderEntireTree(state);
}
export const subscribe =(observer) =>{
    rerenderEntireTree = observer
}
export default state