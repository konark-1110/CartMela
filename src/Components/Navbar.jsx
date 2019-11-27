import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

const Navbar = props => {
    return (
        <div className="navbar-fixed">
            <nav class="white" role="navigation">
                <div class="nav-wrapper container">
                    <Link
                        id="logo-container"
                        exact
                        to="/"
                        className="brand-logo"
                    >
                        <img
                            className="logo"
                            src="./images/logo.jpg"
                            alt="logo"
                        />
                    </Link>
                    <ul class="right hide-on-med-and-down">
                        <li>
                            <Link to="/Home">Home</Link>
                        </li>
                        <li>
                            <Link to="/products">Products</Link>
                        </li>
                        <li>
                            <Link to="/about">About us</Link>
                        </li>
                        <li>
                            <Link to="/cart">Cart</Link>
                        </li>
                    </ul>

                    <ul id="nav-mobile" class="sidenav">
                        <li>
                            <Link to="/Home">Home</Link>
                        </li>
                        <li>
                            <Link to="/products">Products</Link>
                        </li>
                        <li>
                            <Link to="/about">About us</Link>
                        </li>
                        <li>
                            <Link to="/cart">Cart</Link>
                        </li>
                    </ul>
                    <a
                        href="/"
                        data-target="nav-mobile"
                        class="sidenav-trigger"
                    >
                        <i class="material-icons">menu</i>
                    </a>
                </div>
            </nav>
        </div>
    );
};
export default Navbar;
