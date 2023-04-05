import React, { Component } from "react";
import"./csssubcomponents/searchbar.css"

class SearchBar extends Component {
  state = {};
  render() {
    return (
     
        <div className="SearchBox">
          <input
            type="text"
            className="SearchBox-input"
            placeholder="BUSCA ALGO COOL"
          />
          <button className="SearchBox-button">
            <i className="SearchBox-icon material-icons">search</i>
          </button>
        </div>
    );
  }
}

export default SearchBar;
