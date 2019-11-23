import React from "react";
import Card from "./Card.jsx";

const ProductArray = ({ products }) => {
    const productListStyle = {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center"
    };

    const productArray = products.map(product => (
        <Card name={product.title} price={product.price} info={product.info} company={product.company} />
    ));

    return <div style={productListStyle}>{productArray}</div>;
};

export default ProductArray;
