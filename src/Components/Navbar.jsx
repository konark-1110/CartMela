import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../images/logo.jpg';
import '../App.css';


const Navbar = (props) => {

    return (

        <div className="navbar-fixed">
            <nav className="white" role="navigation">
                <div className="nav-wrapper container">
                    <Link id="logo-container" exact to="/" className="brand-logo"><img className="logo" src={logo} alt="logo"/></Link>
                    <ul className="right hide-on-med-and-down">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/Fashion'>Fashion</Link></li>
                        <li><Link to='/Cases'>phones</Link></li>
                        <li><Link to='/Badges'>Badges</Link></li>
                        <li><Link to='/About'>About us</Link></li>
                    </ul>

                    <ul id="nav-mobile" className="sidenav">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/Fashion'>Fashion</Link></li>
                        <li><Link to='/Cases'>phones</Link></li>
                        <li><Link to='/Badges'>Badges</Link></li>
                        <li><Link to='/About'>About us</Link></li>
                    </ul>
                    <a href="/" data-target="nav-mobile" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                </div>
            </nav>
        </div>
    )
}
export default Navbar;
