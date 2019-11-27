import React from 'react';
import Navbar from './Navbar.jsx';
const About = () => {
    const productListStyle = {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center"
    };
    return (
        <div>
            <Navbar />
            <div className="grey-text text-darken-3 lighten-3">
                <center>
                    <h2>About us</h2>
                </center>
                <main>
                    <div style={productListStyle}>About us</div>
                </main>
            </div>        </div>
    )
}

export default About;