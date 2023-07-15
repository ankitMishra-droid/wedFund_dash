import React from 'react';
import { Link } from 'react-router-dom';

const Home = () =>{
    return(
        <>
            <div>
                <h2 className='text-center'><Link to="/dashboard" className="link-underline-light" style={{color:"#6C0505"}}>Go to Dashboard</Link></h2>
            </div>
        </>
    )
}

export default Home;