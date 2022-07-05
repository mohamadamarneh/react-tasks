import React,{useContext} from 'react';
import { AuthContext } from './authContext';

function Header () {
    const authContext = useContext(AuthContext);
    console.log("head" , authContext)

    function logOut(){
        authContext.setAuth({})
        localStorage.removeItem('Email');
    }

    return ( 
        <nav className="nav nav-tabs nav-stacked">
            <p className="nav-link active" >Logo </p>
            {authContext.auth.email ? 
            <div>
                <p className="nav-link disabled" >{authContext.auth.email}</p>
                 <button className='btn btn-danger btn-sm' onClick={logOut}>logout</button>
                 </div> 
                 :<p className="nav-link disabled" >you must be login!</p>}
            
        </nav>
     );
}
 
export default Header;
