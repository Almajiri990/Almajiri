
import React from 'react';

const TopBar = () => {
return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <img src="" alt="User Logo" />
        </div>
        <div className="navbar-search">
          <input type="text" placeholder="Search..." />
          <button>Search</button>
        </div>
      </div>
    </nav>
  );
}
export default TopBar

