import React from "react";

import s1 from '../assets/s1front.png'
import s2 from '../assets/s2front.png'
import s3 from '../assets/s3front.png'
import s4 from '../assets/s4front.png'
import s5 from '../assets/s5front.png'
import s6 from '../assets/s6front.png'

const Home = () => {
    return (
        <div className="home">
            <div className="product">
                <img className='product__img' src={s1} alt='white t-shirt stoic-face'/>
                <p className='product__title'>Gray t-shirt</p>
                <p className='product__price'>$50</p>
                <a className='product__cart' href='#'> Add to cart</a>
            </div>
            <div className="product">
                <img className='product__img' src={s2} alt='white t-shirt 2019-2020 sunrise'/>
                <p className='product__title'>Gray t-shirt</p>
                <p className='product__price'>$50</p>
                <a className='product__cart' href='#'> Add to cart</a>
            </div>
            <div className="product">
                <img className='product__img' src={s3} alt='white t-shirt clouds'/>
                <p className='product__title'>Gray t-shirt</p>
                <p className='product__price'>$50</p>
                <a className='product__cart' href='#'> Add to cart</a>
            </div>
            <div className="product">
                <img className='product__img' src={s4} alt='white t-shirt buddhism'/>
                <p className='product__title'>Gray t-shirt</p>
                <p className='product__price'>$50</p>
                <a className='product__cart' href='#'> Add to cart</a>
            </div>
            <div className="product">
                <img className='product__img' src={s5} alt='white t-shirt landscape'/>
                <p className='product__title'>Gray t-shirt</p>
                <p className='product__price'>$50</p>
                <a className='product__cart' href='#'> Add to cart</a>
            </div>
            <div className="product">
                <img className='product__img' src={s6} alt='white t-shirt point'/>
                <p className='product__title'>Gray t-shirt</p>
                <p className='product__price'>$50</p>
                <a className='product__cart' href='#'> Add to cart</a>
            </div>

        </div>
    )
};

export default Home