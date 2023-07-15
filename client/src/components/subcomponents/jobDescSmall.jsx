import React from "react";
import "./csssubcomponents/jobDescSmall.css";

function JobDescSmall(props) {
  const inputStyle = {
    height: props.height,
    width: props.width ? props.width : "45vw", // apply props width if exists, else use 100% as default
    color: props.color ? props.color : "#767676" // apply props color if exists, else use #000 as default
  };

  function handleChange(e) {
    props.change(e.target.name, e.target.value);
  }

  if (props.options) {
    // if options are present, render a select field
    return (
      <div className="field" style={{ width: props.width ? props.width : "45vw" }}>
        <div className="field field_v1">
          <label className="ha-screen-reader" htmlFor={props.id}>
            {props.label}
          </label>
          <select
            id={props.id}
            className="field__input"
            style={inputStyle}
            onChange={handleChange}
            name={props.label}
            value={props.value || ""}  // add this line
          >
            {props.options.map((option, index) => <option key={index}>{option}</option>)}
          </select>
          <span className="field__label-wrap" aria-hidden="true">
            <span className="field__label">{props.label}</span>
          </span>
        </div>
      </div>
    );
  } else {
    // if options are not present, render a regular input field
    return (
      <div className="field" style={{ width: props.width ? props.width : "45vw" }}>


        <div className="field field_v1">
          <label className="ha-screen-reader" htmlFor={props.id}>
            {props.label}
          </label>
          <input
            id={props.id}
            type={props.type}
            className="field__input"
            placeholder={props.placeholder}
            style={inputStyle}
            onChange={props.onChange}
            name={props.label}
            value={props.value || ""}  // add this line
          />
          <span className="field__label-wrap" aria-hidden="true">
            <span className="field__label">{props.label}</span>
          </span>
        </div>
      </div>
    );
  }
}

export default JobDescSmall;
