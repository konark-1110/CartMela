import React from "react";
import NavBar from "./Navbar.jsx";

const Cart = (props) => {
    const productListStyle = {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center"
    };

    const cartList = [];

    return (
        <div>
            <NavBar />
            <div className="grey-text text-darken-3 lighten-3">
                <center>
                    <h2>Your Cart</h2>
                </center>
                <main>
                    <div style={productListStyle}>cart</div>
                </main>
            </div>
        </div>
    );
};

export default Cart;
