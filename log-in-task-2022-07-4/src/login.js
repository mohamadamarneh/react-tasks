
import React, { useState ,useContext} from 'react';
import { AuthContext } from './authContext';


const Log = () => {
    const users = 
        {
            name: "mohamad@gmail.com",
            pass: "1"
        }
 
    const [email, setCon] = useState('');
    const [msg, setmsg] = useState('');
    let [pass, setName] = useState('');
    const authContext = useContext(AuthContext);
    
    let loggin = (e) => {
        e.preventDefault();
        
        console.log('log in try ');

        if (email === users.name && pass === users.pass) {
            

            localStorage.setItem('Email', email);
            authContext.setAuth(email)
            authContext.setAuth({email})

        } else {

            setmsg("user name or password is wrong!") 
        }



    }

    return (
        <div className='container'>
            <form >
                <div className="form-group m-2" >

                    <input type="text" onChange={e => setCon(e.target.value)}
                        value={email} className="form-control m-2" name="" id="" aria-describedby="emailHelpId" placeholder="user name" />
                    <input type="text" onChange={e => setName(e.target.value)}
                        value={pass} className="form-control m-2" name="" id="" aria-describedby="emailHelpId" placeholder="password" />
                    <button onClick={loggin} className='btn btn-primary m-2'>log in</button>
                </div>
            </form>
            <p>{msg}</p>

        </div>
    );
}

export default Log;
