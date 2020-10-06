import React from "react";
import "./Product.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const Product = (props) => {
    const { img, name, seller, price, stock } = props.product; //javascript object destructuring

    //return single product
    return (
        <div className="product">
            <div className="product-left">
                <img src={img} alt={name} />
            </div>
            <div className="product-right">
                <h2 className="product-title">{name}</h2>
                <p className="seller-name">{seller}</p>

                <div className="product-details">
                    <div>
                        <p className="product-price">${price}</p>
                        <p className="product-stock">
                            only {stock} left in stock - order soon
                        </p>
                        <button className="add-to-cart" onClick={() => props.handleAddProduct(props.product)}>
                            <FontAwesomeIcon
                                icon={faShoppingCart}
                            ></FontAwesomeIcon>
                            Add to cart
                        </button>
                    </div>
                    <div>
                        <h6>Feature</h6>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;
