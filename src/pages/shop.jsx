import React from 'react'
import Hero from '@/components/shop/hero'
import Popular from '@/components/shop/popular'
import Offers from '@/components/shop/offers'
import NewCollections from '@/components/shop/newCollections'

const Shop = () => {
  return (
    <div>
      <Hero />
      <Popular />
      <Offers />
      <NewCollections />
    </div>
  )
}

export default Shop
