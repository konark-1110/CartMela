import React from 'react';
import {Link,withRouter} from 'react-router-dom';

import '../App.css';


const Navbar = (props) => {

    return(
        <nav className='nav-wrapper blue darken-4'>
          <Link to='/' className='brand-logo-left'>CartMela</Link>
            <ul className='right'>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/Fashion'>Fashion</Link></li>
                <li><Link to='/Cases'>Mobile Covers</Link></li>
                <li><Link to='/Badges'>Badges</Link></li>
                <li><Link to='/Stickers'>Stickers</Link></li>
            </ul>

        </nav>
    )
}
export default withRouter (Navbar);
