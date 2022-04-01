import React from "react"
import Logo from "./images/islamitudeNav.svg"
const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg  navbar-light text-black">
      <div class="container">
        <a href="/" class="navbar-brand">
          <img src={Logo} alt="islamitude" className="nav--logo img-fluid" />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navmenu"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navmenu">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item px-3">
              <a href="/quran" class="nav-link">
                Quran
              </a>
            </li>
            <li class="nav-item px-3">
              <a href="/hadith" class="nav-link">
                Hadith
              </a>
            </li>
            <li class="nav-item px-3">
              <a href="/books" class="nav-link">
                Books
              </a>
            </li>
            <li class="nav-item px-3">
              <a href="/apps" class="nav-link">
                Apps
              </a>
            </li>
            <li class="nav-item px-3">
              <a href="/fivepillars" class="nav-link">
                5 Pillars
              </a>
            </li>
            <li class="nav-item px-3">
              <a href="/charities" class="nav-link">
                Charities
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
