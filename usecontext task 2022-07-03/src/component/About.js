import React,{ useContext,useState ,ReactDOM} from 'react';
import { userContext } from '../App';



const About = () => {
  let mas='';

    let user=useContext(userContext);

    const Users=["mohamad",'ali','haya'];
    const Pass=[123456,123,1]



    for (let i = 0; i < Users.length; i++) {
      if(user === Users[i] ){
        return 'you log in now!';
      }else{
        return 'password or user name in invalid';
      }
    }

    return (

        <div>{user}</div>

      );

}

export default About;