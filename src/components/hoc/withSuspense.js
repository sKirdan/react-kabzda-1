import React from 'react'

export const withSuspense = (Component) => {
    return (props) =>{
        return <React.Suspense fallback={<div> Loarding...</div>}>
            <Component{...props}/>
        </React.Suspense>
    }
}
