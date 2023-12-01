import React from 'react'
import Hero from '../components/Hero/hero'
import Popular from '../components/Popular/popular'
import Offers from '../components/Offers/offers'
import NewCollections from '../components/NewCollections/newCollections'

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
