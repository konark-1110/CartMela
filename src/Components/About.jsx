import React from "react";
import Navbar from "./Navbar.jsx";
import Users from "./Users.jsx";
import { users } from "./users.js";
const About = () => {
    const userListStyle = {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center"
    };

    const userArr = users.map(user => (
        <Users
            key={user.id}
            id={user.id}
            name={user.name}
            location={user.location}
            email={user.email}
            dob={user.dob}
            img={user.img}
        />
    ));

    return (
        <div>
            <Navbar />
            <div className="grey-text text-darken-3 lighten-3">
                <center>
                    <h2>About us</h2>
                </center>
                <main>
                    <div style={userListStyle}>{userArr}</div>
                </main>
            </div>{" "}
        </div>
    );
};

export default About;
