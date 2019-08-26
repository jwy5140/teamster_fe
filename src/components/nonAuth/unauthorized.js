import React from 'react'

const Unauthorized = (props) => {

    const redirect = () => {
        setTimeout(()=>{props.history.push('/login')}, 2000)
    }
    
    return <div className='unauthorized'>
        <h1>Error: please login to your account to view this page.</h1>
        <p>Redirecting...</p>
        {redirect()}
    </div>
}

export default Unauthorized