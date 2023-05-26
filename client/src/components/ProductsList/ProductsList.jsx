import React from 'react';
import {
  ProductListStyled,
  ProductListWrapper,
  Title,
} from './ProductsList.styled';
import ProductListItem from '../ProductListItem/ProductListItem';

const ProductsList = ({ shopProducts }) => {
  return (
    <ProductListWrapper>
      <Title>Products</Title>
      <ProductListStyled>
        {shopProducts.map(product => (
          <ProductListItem product={product} key={product._id} />
        ))}
      </ProductListStyled>
    </ProductListWrapper>
  );
};

export default ProductsList;
