import React from "react";

function Home() {
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
                        <a className='nav__link' href='#'>Card</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Home;