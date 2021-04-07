import React from "react";

export const Header = () => {
  return (
    <header>
      <div className="inner-content">
        <div className="title">
          <h2>CAR SEARCH</h2>
        </div>
        <div className="nav-links">
          <h2 className="list">Filter</h2>
          <h2 className="list">Sort By</h2>
          <h2 className="list">Favorites</h2>
        </div>
      </div>
    </header>
  );
};
