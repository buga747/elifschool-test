import React from 'react';
import { BsTrash } from 'react-icons/bs';
import NoImagePlaceholder from '../../images/NoImagePlaceholder.png';
import {
  DeleteButton,
  ItemContainer,
  ItemDetails,
  ItemImage,
  ItemPrice,
  ItemQuantity,
  ItemTitle,
  ItemTotalPrice,
  ItemWrapper,
  TotalPrice,
} from './OrderedList.styled';

const OrderedList = ({
  cartItems,
  handleQuantityChange,
  handleDeleteItem,
  totalPrice,
}) => {
  return (
    <ItemContainer>
      <ul>
        {cartItems.map(({ _id, imgUrl, title, price, quantity }) => (
          <li key={_id}>
            <ItemWrapper>
              {imgUrl ? (
                <ItemImage src={imgUrl} alt={title} />
              ) : (
                <ItemImage src={NoImagePlaceholder} alt={title} />
              )}
              <ItemDetails>
                <ItemTitle>{title}</ItemTitle>
                <ItemPrice>Price: ${price}</ItemPrice>
                <ItemQuantity>
                  Quantity:
                  <input
                    type="number"
                    value={quantity}
                    onChange={e =>
                      handleQuantityChange(_id, parseInt(e.target.value))
                    }
                    min="1"
                  />
                </ItemQuantity>
                <ItemTotalPrice>
                  Total: ${(quantity * price).toFixed(2)}
                </ItemTotalPrice>
              </ItemDetails>
              <DeleteButton onClick={() => handleDeleteItem(_id)}>
                <BsTrash />
              </DeleteButton>
            </ItemWrapper>
          </li>
        ))}
      </ul>
      <TotalPrice>Total Price: ${totalPrice.toFixed(2)}</TotalPrice>
    </ItemContainer>
  );
};

export default OrderedList;
