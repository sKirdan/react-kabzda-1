import react from 'react'
import preloader from './../../../assets/images/preloader.svg'

let Preloader =(props) =>{
    return <div stale ={ { background: 'white' } }>
    <img src={preloader}/> 
    </div>
}

export default Preloader