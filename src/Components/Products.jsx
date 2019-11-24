import React from "react";
import Navbar from "./Navbar.jsx";
import { storeProducts } from "./data.js";
import Card from "./Card.jsx";

const Products = () => {
    const productListStyle = {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center"
    };

    const products = storeProducts;

    const productArr = products.map(product => (
        <Card
            key={product.id}
            id={product.id}
            title={product.title}
            img={product.img}
            price={product.price}
            company={product.company}
            info={product.info}
            inCart={product.inCart}
            count={product.count}
            total={product.total}
        />
    ));

    return (
        <div>
            <Navbar />
            <div className="grey-text text-darken-3 lighten-3">
                <center>
                    <h2>Products</h2>
                </center>
                <main>
                    <div style={productListStyle}>{productArr}</div>
                </main>
            </div>
        </div>
    );
};

export default Products;
