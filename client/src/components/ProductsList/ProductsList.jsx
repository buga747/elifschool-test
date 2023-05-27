import React from 'react';
import {
  ProductListStyled,
  ProductListWrapper,
  Title,
} from './ProductsList.styled';
import ProductListItem from '../ProductListItem/ProductListItem';

const ProductsList = ({ shopProducts, addToCart, currentShopId }) => {
  return (
    <ProductListWrapper>
      <Title>Products</Title>
      <ProductListStyled>
        {shopProducts.map(product => (
          <ProductListItem
            product={product}
            key={product._id}
            addToCart={addToCart}
            shopId={currentShopId}
          />
        ))}
      </ProductListStyled>
    </ProductListWrapper>
  );
};

export default ProductsList;
