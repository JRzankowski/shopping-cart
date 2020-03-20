import React, {useEffect} from "react";
import {connect} from 'react-redux'
import {getNumbers} from "../actions/getAction";

function Header(props) {
    useEffect(() => {
        getNumbers()
    }, []);
    return (
        <header className='header'>
            <div className="header__logo">
                <h2 className='header__logo--text'>J</h2>
            </div>
            <nav className='header__menu'>
                <ul className='nav'>
                    <li className='nav__item'>
                        <a className='nav__link' href='#'>About</a>
                    </li>
                    <li className='nav__item'>
                        <a className='nav__link' href='#'>Hoodies</a>
                    </li>
                    <li className='nav__item'>
                        <a className='nav__link' href='#'>T-shirts</a>
                    </li>
                    <li className='nav__item'>
                        <a className='nav__link' href='#'>{`Card(${props.basketProps.basketNumbers})`}</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

const mapStateToProps = state => ({
    basketProps: state.basketState
});

export default connect(mapStateToProps, {getNumbers})(Header);