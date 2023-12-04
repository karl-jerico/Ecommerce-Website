import React, { useContext } from 'react'
import { shopContext } from '@/context/shopContext';
import { useParams } from 'react-router-dom';
import Breadcrum from '@/components/products/breadcrum';
import ProductDisplay from '@/components/products/productDisplay';
import DescriptionBox from '@/components/products/descriptionBox';
import RelatedProducts from '../components/products/relatedProducts';

const Product = () => {
  const {all_products} = useContext(shopContext);
  const {productId} = useParams();
  const product = all_products.find((e) => e.id === Number(productId));
  return (
    <div>
    <Breadcrum product={product} />
    <ProductDisplay product={product} />
    <DescriptionBox />
    <RelatedProducts />
    </div>
  )
}

export default Product
