import React from 'react';
import { ListItem, ShopButton, ShopName } from './ShopsListItem.styled';

const ShopsListItem = ({ shop, onShopClick, currentShopId }) => {
  return (
    <ListItem>
      <ShopButton
        isActive={currentShopId === shop._id}
        type="button"
        onClick={() => onShopClick(shop)}
      >
        <ShopName>{shop.name}</ShopName>
      </ShopButton>
    </ListItem>
  );
};

export default ShopsListItem;
