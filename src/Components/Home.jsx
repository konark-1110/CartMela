import React, { Component } from "react";
import Navbar from "./Navbar.jsx";
import { storeProducts as product } from "./data.js";
import Card from "./Card.jsx";

const LatestProduct = {
    fontSize: "1.4rem"
};

const productListStyle = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center"
};

const ProductLink = {
    margin: "10vh"
};

class Home extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <div>
                    <div className="parallax-container">
                        <div className="parallax">
                            <img src="./images/parallax1.gif" alt="parallax1" />
                        </div>
                    </div>
                    <div className="section white">
                        <div className="row container">
                            <h2 className="header">Our Latest Product...</h2>
                            <h3 className="grey-text text-darken-3 lighten-3">
                                iPhone 11
                            </h3>
                            <p className="grey-text text-darken-3 lighten-3">
                                <span style={LatestProduct}>
                                    A new dual‑camera system captures more of
                                    what you see and love. The fastest chip ever
                                    in a smartphone and all‑day battery life let
                                    you do more and charge less. And the
                                    highest-quality video in a smartphone, so
                                    your memories look better than ever.
                                </span>
                            </p>
                            <center>
                                <h5 className="grey-text text-darken-3 lighten-3">
                                    Starting from ₹64,900 MRP
                                </h5>
                                <a href="/products">Buy now...</a>
                            </center>
                        </div>
                    </div>
                    <div className="parallax-container">
                        <div className="parallax">
                            <img src="./images/parallax2.gif" alt="parallax2" />
                        </div>
                    </div>

                    <div className="section black">
                        <div className="row container">
                            <h3 className="grey-text lighten-3">
                                And then there was Pro.
                            </h3>
                            <p className="grey-text lighten-3">
                                <span style={LatestProduct}>
                                    A transformative triple‑camera system that
                                    adds tons of capability without complexity.
                                    An unprecedented leap in battery life. And a
                                    mind‑blowing chip that doubles down on
                                    machine learning and pushes the boundaries
                                    of what a smartphone can do. Welcome to the
                                    first iPhone powerful enough to be called
                                    Pro.
                                </span>
                            </p>
                            <center style={LatestProduct}>
                                <h5 className="grey-text lighten-3">
                                    Starting from ₹99,900 MRP
                                </h5>
                                <a href="/products">Buy now...</a>
                            </center>
                        </div>
                    </div>
                    <div style={ProductLink}>
                        <h1>See our Products.</h1>

                        <div style={productListStyle}>
                            <Card
                                key={product[0].id}
                                id={product[0].id}
                                title={product[0].title}
                                img={product[0].img}
                                price={product[0].price}
                                company={product[0].company}
                                info={product[0].info}
                                inCart={product[0].inCart}
                                count={product[0].count}
                                total={product[0].total}
                            />
                            <Card
                                key={product[1].id}
                                id={product[1].id}
                                title={product[1].title}
                                img={product[1].img}
                                price={product[1].price}
                                company={product[1].company}
                                info={product[1].info}
                                inCart={product[1].inCart}
                                count={product[1].count}
                                total={product[1].total}
                            />
                            <Card
                                key={product[2].id}
                                id={product[2].id}
                                title={product[2].title}
                                img={product[2].img}
                                price={product[2].price}
                                company={product[2].company}
                                info={product[2].info}
                                inCart={product[2].inCart}
                                count={product[2].count}
                                total={product[2].total}
                            />
                            <br />
                        </div>
                        <center>
                            <a href="/products">
                                <div className="chip blue">
                                    <span className="flow-text">see more</span>
                                </div>
                            </a>
                        </center>
                    </div>
                    <div className="section grey lighten-2">
                        <div className="row container">
                            <h2 className="header">Contact Us...</h2>
                            <p className="grey-text text-darken-3 lighten-3">
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
    }
}

export default Home;
