import React, { Component } from "react";
import "./users.css";

class Users extends Component {
    render() {
        const props = this.props;
        return (
            <div className="container">
                <div className="row">
                    <div className="col s12">
                        <div className="row">
                            <div className="col s6">
                                <img
                                    src={props.img}
                                    alt=""
                                    className="circle"
                                />
                            </div>
                            <div className="col s6">
                                <h4>{props.name}</h4>
                                <small>
                                    <cite>{props.location}</cite>
                                </small>
                                <p>
                                    {props.email}
                                    <br />
                                    {props.dob}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Users;
