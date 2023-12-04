import React, { useContext, useState } from 'react'
import logo from '@/assets/logo.png'
import cart_icon from '@/assets/cart_icon.png'
import { Link } from 'react-router-dom';
import { shopContext } from '@/context/shopContext';

const Navbar = () => {

    const {getTotalCartItems} = useContext(shopContext)
    const[menu, setMenu] = useState("shop");

  return (
    <nav className="navbar">
        <div className="nav-logo">
            <img src={logo} alt="logo" />
            <p>Shopper</p>
        </div>
        <ul className="nav-menu">
            <li onClick={()=>{setMenu("shop")}}><Link to='/'>Shop</Link>{menu==="shop" ? <hr/> : <></>}</li>
            <li onClick={()=>{setMenu("men")}}><Link to='/men'>Men</Link>{menu==="men" ? <hr/> : <></>}</li>
            <li onClick={()=>{setMenu("women")}}><Link to='/women'>Women</Link>{menu==="women" ? <hr/> : <></>}</li>
            <li onClick={()=>{setMenu("kids")}}><Link to='/kids'>Kids</Link>{menu==="kids" ? <hr/> : <></>}</li>
        </ul>
        <div className="nav-login-cart">
            <Link to='/login'><button>Login</button></Link>
            <Link to='/cart'><img src={cart_icon} alt="" /></Link>
            <div className="nav-cart-count">{getTotalCartItems()}</div>
        </div>
    </nav>
  )
}

export default Navbar
