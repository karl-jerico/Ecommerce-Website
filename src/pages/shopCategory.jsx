import React, {useContext} from 'react'
import { shopContext } from '@/context/shopContext';
import dropdown_icon from '@/assets/dropdown_icon.png'
import Item from '@/components/shop/item'

const ShopCategory = (props) => {
  const {all_products} = useContext(shopContext);
  return (
    <section className="shop-category">
      <img className='shopcategory-banner' src={props.banner} alt="banner" />
      <div className="shopcategory-indexSort">
        <p>
          <span>Showing 1-12</span> out of 36 products
        </p>
        <div className="shopcategory-sort">
          Sort by <img src={dropdown_icon} alt="dropdown_icon" />
        </div>
      </div>
      <div className="shopcategory-products">
        {all_products.map((item, i)=>{
          if (props.category===item.category) {
            return <Item key={i} id={item.id} name={item.name} 
            image={item.image} new_price={item.new_price} old_price={item.old_price}/>
          }
          else{
            return null;
          }
        })}
      </div>
      <div className="shopcategory-loadmore">
        Load more
      </div>
    </section>
  )
}

export default ShopCategory
