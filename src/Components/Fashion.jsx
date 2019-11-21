import React from "react";
import Navbar from "./Navbar.jsx";
import parallax1 from '../images/parallax1.jpg';
import parallax2 from '../images/parallax2.jpg';

const Fashion = () => {
    const span400 = {
        "font-weight": "400"
    };
    return (
        <div>
            <Navbar />
            <div class="parallax-container">
                <div class="parallax">
                    <img src={parallax1} alt="parallax1" />
                </div>
            </div>
            <div class="section white">
                <div class="row container">
                    <h2 class="header">Fashion</h2>
                    <p class="grey-text text-darken-3 lighten-3">
                        Discover 2019’s latest clothing trends from fashion's
                        top designers—and see how your favorite celebrities are
                        wearing and pairing their perfectly chosen mix of trendy
                        and classic clothes. Get on fashion's cutting-edge right
                        now with our editors' picks for trendy outfit ideas and
                        shop our curation of celebrity-approved dresses, jeans,
                        shirts, skirts, sweaters and jackets that will become
                        your own wardrobe staples.
                    </p>
                </div>
            </div>
            <div class="parallax-container">
                <div class="parallax">
                    <img src={parallax2} alt="parallax2" />
                </div>
            </div>
            <div class="section white">
                <div class="row container widthcontrol">
                    <h2 class="header">Here are the top trends for 2019.</h2>
                    <h3>
                        <span>New Year, New Denim</span>
                    </h3>
                    <p>
                        <span style={span400}>
                            There’s plenty of newness on the{" "}
                            <a href="/Fashion">denim scene </a>
                            in the year ahead. Here are the denim details to
                            look for if you want to update your baby blues.
                        </span>
                    </p>
                    <ul>
                        <li>
                            <ul>
                                <li>
                                    <b>Embroidering. </b>
                                    <span style={span400}>
                                        If you’re crafty, now’s the time to get
                                        out your embroidering needles and flock
                                        your favorite jeans with whimsical
                                        embroidered detail—or buy jeans with
                                        these details, like the rest of us.{" "}
                                    </span>
                                </li>
                                <li>
                                    <b>
                                        Embellishment &amp; Add-ons.{" "}
                                        <span style={span400}>
                                            Studs, pearls and yes, even a few
                                            rhinestones here and there are
                                            making their way back to our
                                            favorite jeans.
                                        </span>
                                    </b>
                                </li>
                                <li>
                                    <b>Interesting hems. </b>
                                    <span style={span400}>
                                        Denim hems are also getting a little
                                        something extra with laces, bows, fringe
                                        and slit-openings at the ankle.
                                    </span>
                                </li>
                                <li>
                                    <b>
                                        Straight legs.{" "}
                                        <span style={span400}>
                                            More relaxed than the resiliently
                                            popular skinnies, a straighter leg
                                            style will be front and center.
                                        </span>
                                    </b>
                                </li>
                                <li>
                                    <b>Lower rises. </b>
                                    <span style={span400}>
                                        And just when you thought denim couldn’t
                                        get any higher, it gets low again. Not
                                        the super-low-rise of the early 00’s
                                        mind you, but a low slung and
                                        hip-grazing rise is quickly gaining
                                        momentum.
                                    </span>
                                </li>
                                <li>
                                    <b>
                                        <span style={span400}>
                                            There’s no such thing as too dark
                                            when it comes to rinses for 2019, so
                                            slip on those ultra deep-hued denim
                                            for a polished take on a casual
                                            staple.
                                        </span>
                                    </b>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};
export default Fashion;
