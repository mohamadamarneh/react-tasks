import React,{useContext} from 'react';
import {AuthContext } from './component/authContext';

export default function Header () {
    const authContext = useContext(AuthContext);


    console.log("header",authContext)
    
    return ( 
        <nav className="nav nav-tabs nav-stacked">
            <p className="nav-link active" href="#">Active link</p>
            {true ? 
            <div>
                <p className="nav-link disabled" href="#"> dscdcw </p>
                 <button className='btn btn-danger btn-sm'>logout</button>
                 </div> 
                 :<p className="nav-link disabled" href="#">you must be login!</p>}
            
        </nav>
     );
}

