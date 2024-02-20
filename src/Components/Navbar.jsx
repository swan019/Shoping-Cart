import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

function Navbar() {
  return (
    <div>
      <div>

      </div>
      <div>

        <NavLink to={"/"}>
          <p>
              Home
          </p>
        </NavLink>
        <NavLink to={"/cart"}>
          <p>
              Cart
          </p>
        </NavLink>
    </div>
    </div >
  )
}

export default Navbar