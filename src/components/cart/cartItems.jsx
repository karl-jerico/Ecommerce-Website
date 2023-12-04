import React, { useContext } from 'react'
import { shopContext } from '@/context/shopContext'
import remove_icon from '@/assets/cart_cross_icon.png'

const CartItems = () => {
    const {getTotalCartAmount, all_products, cartItems, removeFromCart} = useContext(shopContext) 
  return (
    <section className='cartitem'>
        <div className="cartitems-format-main">
            <p>Products</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
        </div>
        <hr />
        {all_products.map((products)=>{
            if (cartItems[products.id]>0)
            {
                return <div>
                            <div className="cartitems-format cartitems-format-main">
                                <img src={products.image} alt="" className='carticon-product-icon' />
                                <p>{products.name}</p>
                                <p>${products.new_price}</p>
                                <button className='cartitems-quantity'>{cartItems[products.id]}</button>
                                <p>${products.new_price*cartItems[products.id]}</p>
                                <img className='cartitems-remove-icon' src={remove_icon} onClick={()=>{removeFromCart(products.id)}} alt="remove_icon" />
                            </div>
                            <hr />
                        </div>
            }
            return null;
        })}
        <div className="cartitems-down">
            <div className="cartitems-total">
                <h1>Cart Totals</h1>
                <div>
                    <div className="cartitems-total-item">
                        <p>Subtotal</p>
                        <p>${getTotalCartAmount()}</p>
                    </div>
                    <hr />
                    <div className="cartitems-total-item">
                        <p>Shipping Fee</p>
                        <p>Free</p>
                    </div>
                    <hr />
                    <div className="cartitems-total-item">
                        <h3>Total</h3>
                        <h3>${getTotalCartAmount()}</h3>
                    </div>
                </div>
                <button>CHECKOUT</button>
            </div>
            <div className="cartitems-promocode">
                <p>If you have a promo code, Enter it here</p>
                <div className="cartitems-promobox">
                    <input type="text" placeholder='promocode' />
                    <button>Submit</button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default CartItems
