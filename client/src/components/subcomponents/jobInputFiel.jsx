import React, { Component } from "react";

function JobInputField(props) {
    return (
        <div className="jobinputfield">
            <div className="inputlabel">
                {props.label}
            </div>
            <input className="jobinput" onChange={(e) => props.setter(e.target.value)} />
        </div >
    )
}

export default JobInputField;