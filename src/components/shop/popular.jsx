import React from 'react'
import data_product from '@/assets/data'
import Item from '@/components/shop/item'

const Popular = () => {
  return (
    <section className="popular">
        <h1>POPULAR IN WOMEN</h1>
        <hr />
        <div className="popular-item">
            {data_product.map((item, i) =>{
                return <Item key={i} id={item.id} name={item.name} 
                image={item.image} new_price={item.new_price} old_price={item.old_price} />
            })}
        </div>
    </section>
  )
}

export default Popular
