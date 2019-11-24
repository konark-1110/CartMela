import React, { Component } from "react";
import "./productCard.css";
import { Link } from "react-router-dom";

class Card extends Component {
    getImage = () => {
        const image = this.props.img;
        return image
    }
    render() {
        const props = this.props;
        return (
            <div className="container page-wrapper">
                <div className="page-inner">
                    <div className="row">
                        <div className="el-wrapper">
                            <div className="box-up">
                                <img
                                    className="img"
                                    src={this.getImage()}
                                    alt="phone"
                                />
                                <div className="img-info">
                                    <div className="info-inner">
                                        <span className="p-name">
                                            {props.title}
                                        </span>
                                        <span className="p-company">
                                            {props.company}
                                        </span>
                                    </div>
                                    <div className="a-size">
                                        {props.price}
                                        {"$"}
                                    </div>
                                </div>
                            </div>

                            <div className="box-down">
                                <div className="h-bg">
                                    <div className="h-bg-inner"></div>
                                </div>

                                <Link
                                    to='/Details' 
                                    className="cart"
                                >
                                    <span className="price">
                                        {props.price}
                                        {"$"}
                                    </span>
                                    <span className="add-to-cart">
                                        <span className="txt">See info</span>
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Card;
