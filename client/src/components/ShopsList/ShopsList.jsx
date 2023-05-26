import React from 'react';
import { ShopListStyled, ShopListWrapper, Title } from './ShopsList.styled';
import ShopsListItem from '../ShopsListItem/ShopsListItem';

const ShopsList = ({ shops, onShopClick, currentShopId }) => {
  return (
    <ShopListWrapper>
      <Title>Shops</Title>
      <ShopListStyled>
        {shops.map(shop => (
          <ShopsListItem
            key={shop._id}
            currentShopId={currentShopId}
            shop={shop}
            onShopClick={onShopClick}
          />
        ))}
      </ShopListStyled>
    </ShopListWrapper>
  );
};

export default ShopsList;
