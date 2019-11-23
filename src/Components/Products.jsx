import React from "react";
import Navbar from "./Navbar.jsx";
import { storeProducts } from "./data";
import ProductArray from "./ProductArray.jsx";

const Products = () => {
    const ProductList = storeProducts;
    return (
        <div>
            <Navbar />

            <div className="grey-text text-darken-3 lighten-3">
                <center>
                    <h2>Products</h2>
                </center>
                <main>
                    <ProductArray products={ProductList} />
                </main>
            </div>
        </div>
    );
};

export default Products;
