import React from 'react'
import GitHubLogin from 'react-github-login';
import logo from '../../../assets/logo.svg';
import { Link } from 'react-router-dom';

const onSuccess = response => console.log(response);
const onFailure = response => console.error(response);

export const Navbar = () => {
    return (
        <React.Fragment>
            <Link to="/" >
                <img alt="logo matter-supply" className="header__image" src={logo} />
            </Link>
            {/* <GitHubLogin clientId="c5e3ccd1e2237acc7a9f"
                redirectUri="http://localhost:3000/login"
                buttonText="Sign in"
                onSuccess={onSuccess}
                onFailure={onFailure}
                className="header__button" /> */}
            <button className="header__button">Sign in</button>
        </React.Fragment>
    )
}
