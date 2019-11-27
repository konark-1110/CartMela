import React from "react";
import './details.css';

const Details = ({ handleClose, show, children }) => {
    const showHide = show
        ? "modal display-block"
        : "modal display-none";

    return (
        <div className={showHide}>
            <section className="modal-main">
                {children}
            </section>
            <i onClick={handleClose} className="material-icons close">close</i>
        </div>
    );
};

export default Details;
