import React from "react";
import Navbar from "./Navbar.jsx";
import parallax1 from '../images/parallax1.jpg';
import parallax2 from '../images/parallax2.jpg';
const Home = () => {
    return (
        <div>
            <Navbar />
            <div class="parallax-container">
                <div class="parallax">
                    <img src={parallax1} alt="parallax1"/>
                </div>
            </div>
            <div class="section white">
                <div class="row container">
                    <h2 class="header">Fashion</h2>
                    <p class="grey-text text-darken-3 lighten-3">
                        Discover 2019’s latest clothing trends from fashion's
                        top designers—and see how your favorite celebrities are
                        wearing and pairing their perfectly chosen mix of trendy
                        and classic clothes. Get on fashion's cutting-edge right
                        now with our editors' picks for trendy outfit ideas and
                        shop our curation of celebrity-approved dresses, jeans,
                        shirts, skirts, sweaters and jackets that will become
                        your own wardrobe staples.
                    </p>
                </div>
            </div>
            <div class="parallax-container">
                <div class="parallax">
                    <img src={parallax2} alt="parallax2" />
                </div>
            </div>
            <div class="section white">
                <div class="row container">
                    <h2 class="header">Parallax</h2>
                    <p class="grey-text text-darken-3 lighten-3">
                        Parallax is an effect where the background content or
                        image in this case, is moved at a different speed than
                        the foreground content while scrolling.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Home;
