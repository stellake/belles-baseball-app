import React from 'react';
import { BurgerMenuIcon } from '../icons/burgerMenu';
import {
  Link,
  useLocation,
} from 'react-router-dom';
import './navBar.css';

const activeNavItemStyle = {
  borderBottom: '4px solid #6e6eb2',
};

const NavItem = ({ to, title, onClick }) => {
  const currentPath = useLocation().pathname;
  return (
    <li
      className="mainNavItem"
      style={currentPath === to ? activeNavItemStyle : undefined}
    >
      <Link to={to} onClick={onClick}>
        {title}
      </Link>
    </li>
  );
};

export const NavBar = () => {
    const [isOpen, setIsOpen] = React.useState(false);
    const closeNavMenu = () => setIsOpen(false);
  return (
    <nav>
        <div className="burgerNav">
            <div className="burgerIcon" onClick={() => setIsOpen(true)}>
                <BurgerMenuIcon/>
            </div>
            <div className="burgerTitle">
               Belles Baseball
            </div>
        </div>
        <div className={`navList ${isOpen ? undefined : 'navListClosed'}`}>
            <div className="navListContent">
                <div
                    className="navListCloseButton"
                    onClick={closeNavMenu}
                >
                    Close
                </div>
                <ul className="listedItems">
                    <NavItem to="/" title="Home" onClick={closeNavMenu} />
                    <NavItem to="/whats-on" title="What's on" onClick={closeNavMenu} />
                    <NavItem to="/meet-the-team" title="Meet the team" onClick={closeNavMenu} />
                    <NavItem to="/training-hub" title="Training hub" onClick={closeNavMenu} />
                    <NavItem to="/new-members" title="New members" onClick={closeNavMenu} />
                </ul>
            </div>
        </div>
    </nav>
  );
}
