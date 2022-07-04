
import React, { useState } from 'react';


const Log = () => {
    const users = 
        {
            name: "mohamad",
            pass: "1"
        }
 
    const [email, setCon] = useState('');
    const [msg, setmsg] = useState('');
    let [pass, setName] = useState('');
    
    let loggin = (e) => {
        e.preventDefault();

        if (email === users.name && pass === users.pass) {
            console.log('try');

            localStorage.setItem('Email', email);

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
