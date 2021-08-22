import React from "react";
import styles from "./users.module.css";

let Users = (props) =>{
    props.setUsers([
        {id: 1, photoUrl:'data:image/jpeg;base64,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',
            followed: false, fullName: 'Dmitriy', status: 'I am a boss', location: {city:'Minsk', country:'Belarus'} },
        {id: 2, photoUrl:'https://www.google.com/imgres?imgurl=https%3A%2F%2Fstore.storeimages.cdn-apple.com%2F4668%2Fas-images.apple.com%2Fis%2Fiphone-11-og-201909%3Fwid%3D600%26hei%3D315%26fmt%3Djpeg%26qlt%3D95%26.v%3D1566949840644&imgrefurl=https%3A%2F%2Fwww.apple.com%2Fpl-edu%2Fshop%2Fbuy-iphone%2Fiphone-11&tbnid=sjjSHwtJRIUu6M&vet=12ahUKEwiYksiY58LyAhWCtSoKHbfZAkgQMygNegUIARDMAQ..i&docid=ZVcwmlvVOTY2LM&w=600&h=315&q=apple&ved=2ahUKEwiYksiY58LyAhWCtSoKHbfZAkgQMygNegUIARDMAQ',
            followed: true, fullName: 'Sasha', status: 'I am a boss too ', location: {city:'Dnipro', country:'Ukraine'} },
        {id: 3, photoUrl:'https://www.google.com/imgres?imgurl=https%3A%2F%2Fstore.storeimages.cdn-apple.com%2F4668%2Fas-images.apple.com%2Fis%2Fiphone-11-og-201909%3Fwid%3D600%26hei%3D315%26fmt%3Djpeg%26qlt%3D95%26.v%3D1566949840644&imgrefurl=https%3A%2F%2Fwww.apple.com%2Fpl-edu%2Fshop%2Fbuy-iphone%2Fiphone-11&tbnid=sjjSHwtJRIUu6M&vet=12ahUKEwiYksiY58LyAhWCtSoKHbfZAkgQMygNegUIARDMAQ..i&docid=ZVcwmlvVOTY2LM&w=600&h=315&q=apple&ved=2ahUKEwiYksiY58LyAhWCtSoKHbfZAkgQMygNegUIARDMAQ',
            followed: false, fullName: 'Andrew', status: 'I am a boss too', location: {city:'Kyiv', country:'Ukraine'} },
    ])
    return <div>
        {
           props.users.map(u =><div key={u.id}>
               <span>
                   <div>
                       <img src={u.photoUrl} className={styles.userPhoto}/>
                   </div>
                    <div>
                       { u.followed
                           ?<button onClick= {() => { props.unfollow(u.id) } }>Unfollow</button>
                           :<button onClick= {() => { props.follow(u.id) } }>follow</button>}
                    </div>
               </span>
               <span>
                   <span>
                       <div>{u.fullName}</div>
                       <div>{u.status}</div>
                   </span>
                   <span>
                       <div>{u.location.country}</div>
                       <div>{u.location.sity}</div>
                   </span>
               </span>
           </div>)
        }
    </div>
}

export default Users;