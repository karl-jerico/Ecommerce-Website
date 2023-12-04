import React from 'react'
import data_product from '@/assets/data'
import Item from '@/components/shop/item'

const RelatedProducts = () => {
  return (
    <section className='relatedproducts'>
        <h1>Related Prpducts</h1>
        <hr />
        <div className="relatedproducts-item">
            {data_product.map((item, i)=>{
                return <Item key={i} id={item.id} name={item.name} 
                image={item.image} new_price={item.new_price} old_price={item.old_price} />
            })}
        </div>
    </section>
  )
}

export default RelatedProducts
