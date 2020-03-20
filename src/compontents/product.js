import React from "react";



const Product = (props) => {
    const {img,title,price,description,addToBasket} = props;
    return (
            <div className="product">
                <img className='product__img' src={img} alt={title}/>
                <p className='product__title'>{title}</p>
                <p className='product__price'>${price}</p>
                <a onClick={addToBasket} className='product__cart' href='#'> Add to cart</a>
            </div>
    )
};
export default Product