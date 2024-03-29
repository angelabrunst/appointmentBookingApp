import React from "react";
import { NavLink } from 'react-router-dom';

import authContext from "../../context/auth-context";
import './MainNavigation.css';

const mainNavigation = props => (
    <authContext.Consumer>
        {(context) => {
            return(
                <header className="main-navigation">
                    <div className="main-navigation__logo">
                        <h1>CodeSchooler</h1>
                    </div>
                    <nav className="main-navigation__items">
                        <ul>
                            {!context.token && (
                                <li>
                                    <NavLink to="/auth">Login</NavLink>
                                </li>
                            )}
                            <li>
                                <NavLink to="/events">Classes</NavLink>
                            </li>
                            {context.token && (
                                <React.Fragment>
                                    <li>
                                        <NavLink to="/bookings">Bookings</NavLink>
                                    </li>
                                    <li>
                                        <button onClick={context.logout}>Logout</button>
                                    </li>
                                </React.Fragment> 
                            )}
                        </ul>
                    </nav>
                </header>
            )
        }}
    </authContext.Consumer>
    );

export default mainNavigation;