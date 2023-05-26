import React from 'react';
import { ShopListWrapper } from './ShopsList.styled';

const ShopsList = ({ shops, onShopClick }) => {
  return (
    <ShopListWrapper>
      <h2>Shops</h2>
      <ul>
        {shops.map(shop => (
          <li key={shop._id}>
            <button type="button" onClick={() => onShopClick(shop)}>
              {shop.name}
            </button>
          </li>
        ))}
      </ul>
    </ShopListWrapper>
  );
};

export default ShopsList;
