import React from "react";
import Navbar from "./Navbar.jsx";
import giphy from "../images/giphy.gif";
import parallax2 from "../images/parallax2.gif";

const LatestProduct = {
    fontSize: "1.4rem"
};

const ProductLink = {
    height: "60vh",
    margin: "10vh"
};

const Home = () => {
    return (
        <div>
            <Navbar />
            <div>
                <div class="parallax-container">
                    <div class="parallax">
                        <img src={giphy} alt="parallax1" />
                    </div>
                </div>
                <div class="section white">
                    <div class="row container">
                        <h2 class="header">Our Latest Product...</h2>
                        <p class="grey-text text-darken-3 lighten-3">
                            <h3>iPhone 11</h3>
                            <span style={LatestProduct}>
                                A new dual‑camera system captures more of what
                                you see and love. The fastest chip ever in a
                                smartphone and all‑day battery life let you do
                                more and charge less. And the highest-quality
                                video in a smartphone, so your memories look
                                better than ever.
                                <center>
                                    <h5>Starting from ₹64,900 MRP</h5>
                                    <a href="/">Buy now...</a>
                                </center>
                            </span>
                        </p>
                    </div>
                </div>
                <div class="parallax-container">
                    <div class="parallax">
                        <img src={parallax2} alt="parallax2" />
                    </div>
                </div>

                <div class="section black">
                    <div class="row container">
                        <p class="grey-text lighten-3">
                            <span style={LatestProduct}>
                                <h3>And then there was Pro.</h3> A
                                transformative triple‑camera system that adds
                                tons of capability without complexity. An
                                unprecedented leap in battery life. And a
                                mind‑blowing chip that doubles down on machine
                                learning and pushes the boundaries of what a
                                smartphone can do. Welcome to the first iPhone
                                powerful enough to be called Pro.
                                <center>
                                    <h5>Starting from ₹99,900 MRP</h5>
                                    <a href="/">Buy now...</a>
                                </center>
                            </span>
                        </p>
                    </div>
                </div>
                <div style={ProductLink}>
                    <h1>See our Products.</h1>
                    
                </div>
                <div class="section grey lighten-2">
                    <div class="row container">
                        <h2 class="header">Contact Us...</h2>
                        <p class="grey-text text-darken-3 lighten-3">
                            Developers:
                            <br />
                            Mukul Bisht (1610991538){" "}
                            <a
                                href="mailto:mukulbisht98@gmail.com"
                                target="blank"
                            >
                                mukulbisht98@gmail.com
                            </a>{" "}
                            <br />
                            Konark Saini (1610991463){" "}
                            <a
                                href="mailto:konarksaini11@gmail.com"
                                target="blank"
                            >
                                konarksaini11@gmail.com
                            </a>
                            <br />
                            Vaibhav Sharma (1610991934){" "}
                            <a
                                href="mailto:vaibhavsharma2199@gmail.com"
                                target="blank"
                            >
                                vaibhavsharma2199@gmail.com
                            </a>
                            <br />
                            Mukesh Kandrao (1610991536){" "}
                            <a
                                href="mailto:konarksaini11@gmail.com"
                                target="blank"
                            >
                                konarksaini11@gmail.com
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
