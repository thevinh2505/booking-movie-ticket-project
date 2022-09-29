import React from 'react'


function Sidebar() {
    
  return (
    <nav className="sidebar close">
  <header>
    <div className="image-text">
      <span className="image">
        <img src="logo.png" alt="" />
      </span>
      <div className="text logo-text">
        <span className="name">Codinglab</span>
        <span className="profession">Web developer</span>
      </div>
    </div>
    <i className="bx bx-chevron-right toggle" />
  </header>
  <div className="menu-bar">
    <div className="menu">
      <li className="search-box">
        <i className="bx bx-search icon" />
        <input type="text" placeholder="Search..." />
      </li>
      <ul className="menu-links">
        <li className="nav-link">
          <a href="#">
            <i className="bx bx-home-alt icon" />
            <span className="text nav-text">Dashboard</span>
          </a>
        </li>
        <li className="nav-link">
          <a href="#">
            <i className="bx bx-bar-chart-alt-2 icon" />
            <span className="text nav-text">Revenue</span>
          </a>
        </li>
        <li className="nav-link">
          <a href="#">
            <i className="bx bx-bell icon" />
            <span className="text nav-text">Notifications</span>
          </a>
        </li>
        <li className="nav-link">
          <a href="#">
            <i className="bx bx-pie-chart-alt icon" />
            <span className="text nav-text">Analytics</span>
          </a>
        </li>
        <li className="nav-link">
          <a href="#">
            <i className="bx bx-heart icon" />
            <span className="text nav-text">Likes</span>
          </a>
        </li>
        <li className="nav-link">
          <a href="#">
            <i className="bx bx-wallet icon" />
            <span className="text nav-text">Wallets</span>
          </a>
        </li>
      </ul>
    </div>
    <div className="bottom-content">
      <li className>
        <a href="#">
          <i className="bx bx-log-out icon" />
          <span className="text nav-text">Logout</span>
        </a>
      </li>
      <li className="mode">
        <div className="sun-moon">
          <i className="bx bx-moon icon moon" />
          <i className="bx bx-sun icon sun" />
        </div>
        <span className="mode-text text">Dark mode</span>
        <div className="toggle-switch">
          <span className="switch" />
        </div>
      </li>
    </div>
  </div>
</nav>

  )
}

export default Sidebar