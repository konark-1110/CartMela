import React, { Component } from "react";
import {
    NotificationContainer,
    NotificationManager
} from "react-notifications";
import Details from "./Details";
import "react-notifications/lib/notifications.css";
import "./details.css";
import "./Card.css";

class Card extends Component {
    state = {
        show: false
    };
    getImage = () => {
        const image = this.props.img;
        return image;
    };
    showDetail = () => {
        this.setState({ show: true });
    };
    hideDetail = () => {
        this.setState({ show: false });
    };
    createNotification = type => {
        return () => {
            switch (type) {
                case "info":
                    NotificationManager.info("Info message");
                    break;
                case "success":
                    NotificationManager.success("Success", "Added to cart.");
                    break;
                case "warning":
                    NotificationManager.warning(
                        "Warning message",
                        "Close after 3000ms",
                        3000
                    );
                    break;
                case "error":
                    NotificationManager.error(
                        "Error message",
                        "Click me!",
                        5000,
                        () => {
                            alert("callback");
                        }
                    );
                    break;
                default:
                    break;
            }
        };
    };
    render() {
        const props = this.props;
        return (
            <div>
                <Details show={this.state.show} handleClose={this.hideDetail}>
                    <h2>{props.title}</h2>
                    <p class="info whiteSpace">{props.info}</p>
                    <button
                        onClick={this.createNotification("success")}
                        class="addToCart btn red"
                    >
                        <span>Add to cart</span>
                    </button>
                    <NotificationContainer />
                </Details>
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
                                            {"₹"}
                                        </div>
                                    </div>
                                </div>

                                <div className="box-down">
                                    <div className="h-bg">
                                        <div className="h-bg-inner"></div>
                                    </div>

                                    <div
                                        className="cart"
                                        onClick={e => {
                                            this.showDetail();
                                        }}
                                    >
                                        <span className="price">
                                            {props.price}
                                            {"₹"}
                                        </span>
                                        <span className="add-to-cart">
                                            <span className="txt">
                                                See info
                                            </span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Card;
