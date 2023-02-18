import React from "react"
import { BurgerMenuIcon } from "../../../icons/burgerMenu"
import "./navBar.css"
import { NavItem } from "./navItem"

export const NavBar = () => {
  const [isOpen, setIsOpen] = React.useState(false)
  const closeNavMenu = () => setIsOpen(false)
  return (
    <nav>
      <div className="burgerNav">
        <div
          css={{
            height: "20px",
            width: "20px",
            cursor: "pointer",
            display: [undefined, "none"],
          }}
          onClick={() => setIsOpen(true)}
        >
          <BurgerMenuIcon />
        </div>
        <div className="burgerTitle">Belles Baseball</div>
      </div>
      <div
        onClick={event => {
          if (event.target === event.currentTarget) {
            closeNavMenu()
          }
        }}
        className={`navList ${isOpen ? undefined : "navListClosed"}`}
        style={{ maxWidth: `var(--size-content)`, margin: "auto" }}
      >
        <div className="navListContent">
          <div className="navListCloseButton" onClick={closeNavMenu}>
            Close
          </div>
          <ul className="listedItems">
            <NavItem to="/" title="Home" onClick={closeNavMenu} />
            <NavItem to="/whats-on/" title="What's on" onClick={closeNavMenu} />
            <NavItem
              to="/meet-the-team/"
              title="Meet the team"
              onClick={closeNavMenu}
            />
            <NavItem
              to="/training-hub/"
              title="Training hub"
              onClick={closeNavMenu}
            />
            <NavItem
              to="/new-members/"
              title="New members"
              onClick={closeNavMenu}
            />
          </ul>
        </div>
      </div>
    </nav>
  )
}
