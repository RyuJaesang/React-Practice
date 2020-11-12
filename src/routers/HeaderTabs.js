import React from 'react';
import { NavLink } from 'react-router-dom';

const defaultNavLinkStyle = {
    marginRight: '10px',
    textDecoration: 'none',
    color: 'black',
};

const activeStyle= {
    color: 'skyblue',
};

function HeaderTab(props) {
    return(
        <div>
            <NavLink
                exact
                to='/'
                style={defaultNavLinkStyle}
                activeStyle={activeStyle}
            >
                메인
            </NavLink>
            <NavLink
                to='/1'
                style={defaultNavLinkStyle}
                activeStyle={activeStyle}
            >
                One
            </NavLink>
            <NavLink
                to='/2'
                style={defaultNavLinkStyle}
                activeStyle={activeStyle}
            >
                Two
            </NavLink>
            <NavLink
                to='/3'
                style={defaultNavLinkStyle}
                activeStyle={activeStyle}
            >
                Three
            </NavLink>
        </div>
    )
}

export default HeaderTab;