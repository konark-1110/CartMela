import React from "react";
import logo from "./products/product-1.jpg";
import "./productCard.css";
const Card = props => {
    return (
        <div class="container page-wrapper">
            <div class="page-inner">
                <div class="row">
                    <div class="el-wrapper">
                        <div class="box-up">
                            <img class="img" src={logo} alt="" />
                            <div class="img-info">
                                <div class="info-inner">
                                    <span class="p-name">{props.name}</span>
                                    <span class="p-company">
                                        {props.company}
                                    </span>
                                </div>
                                <div class="a-size">
                                    {props.price}
                                    {"$"}
                                </div>
                            </div>
                        </div>

                        <div class="box-down">
                            <div class="h-bg">
                                <div class="h-bg-inner"></div>
                            </div>

                            <a class="cart" href="/">
                                <span class="price">
                                    {props.price}
                                    {"$"}
                                </span>
                                <span class="add-to-cart">
                                    <span class="txt">Add in cart</span>
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
