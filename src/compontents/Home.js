import React, {useState} from "react";
import data from "../data/clothes"
import Product from "./product";
import {connect} from 'react-redux'
import {addToBasket} from "../actions/addAction";


const Home = (props) => {
    console.log(props);

    return (
        <div className='home'>
            {
                data.tShirts.map((value, index) => {
                    let image = require(`../assets${value.photo}`);
                    return (
                        <>
                            <Product img={image}
                                     title={value.name}
                                     price={value.price}
                                     descritpion={value.description}
                                     key={index}
                                     addToBasket={props.addToBasket}


                            />
                        </>
                    )
                })
            }
        </div>

    )
};

export default connect(null, {addToBasket})(Home)