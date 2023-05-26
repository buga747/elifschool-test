import React from 'react';
import { GrCart } from 'react-icons/gr';
import NoImagePlaceholder from '../../images/NoImagePlaceholder.png';
import {
  ListItem,
  Image,
  Title,
  Description,
  Price,
  Category,
  DescriptionWrapper,
  AddToCartButton,
} from './ProductListItem.styled';

const ProductListItem = ({
  product: { _id, title, imgUrl, description, category, price },
  shopId,
  addToCart,
}) => {
  const item = { _id, title, price, shopId, imgUrl, quantity: 1 };

  return (
    <ListItem>
      {imgUrl ? (
        <Image src={imgUrl} alt={title} width="330" />
      ) : (
        <Image src={NoImagePlaceholder} alt={title} width="330" />
      )}
      <DescriptionWrapper>
        {' '}
        <Title>{title}</Title>
        <Description>{description}</Description>
        <Price>${price}</Price>
        <Category>{category}</Category>
      </DescriptionWrapper>
      <AddToCartButton
        onClick={() => {
          addToCart(item);
        }}
      >
        Add to cart <GrCart />{' '}
      </AddToCartButton>
    </ListItem>
  );
};

export default ProductListItem;
