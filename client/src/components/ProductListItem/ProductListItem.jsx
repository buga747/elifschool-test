import React from 'react';
import {
  ListItem,
  Image,
  Title,
  Description,
  Price,
  Category,
  DescriptionWrapper,
} from './ProductListItem.styled';

const ProductListItem = ({
  product: { _id, title, imgUrl, description, category, price },
}) => {
  return (
    <ListItem>
      <Image src={imgUrl} alt={title} />
      <DescriptionWrapper>
        {' '}
        <Title>{title}</Title>
        <Description>{description}</Description>
        <Price>${price}</Price>
        <Category>{category}</Category>
      </DescriptionWrapper>
      <button>Add to cart</button>
    </ListItem>
  );
};

export default ProductListItem;
