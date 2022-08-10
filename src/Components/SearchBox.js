import React from "react";
import "./SearchBox.css";

function SearchBox({searchfield, searchChange}) {
  return (
    <div className="searchDiv">
      <input
        className="searchInput"
        type="search"
        placeholder="Search robot"
        onChange={searchChange}
      />
    </div>
  );
}

export default SearchBox;

//the "searchCange" function is a prop.
//everytime the onChange is triggerd, it calls 
//"searchChang"- which is the "onSearchCange" function
//defind in "App.js", the parent.
//once we have a value at the parent component - it can
//transfer it to the other child: the "cardList.js"