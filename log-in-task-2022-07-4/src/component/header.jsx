import React from 'react';

const Header = () => {
    return ( 
        <nav className="nav nav-tabs nav-stacked">
            <p className="nav-link active" href="#">Active link</p>
            {false ? 
            <div>
                <p className="nav-link disabled" href="#">amang@us.com </p>
                 <button className='btn btn-danger btn-sm'>logout</button>
                 </div> 
                 :<p className="nav-link disabled" href="#">you must be login!</p>}
            
        </nav>
     );
}
 
export default Header;
