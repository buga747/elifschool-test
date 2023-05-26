import { useEffect, useState } from 'react';
import { Container } from './ShopsPage.styled';
import { fetchAllShops } from '../../services/shopsApi';
import ShopsList from '../../components/ShopsList/ShopsList';
import ProductsList from '../../components/ProductsList/ProductsList';

const ShopsPage = ({ addToCart }) => {
  const [shops, setShops] = useState([]);
  const [shopProducts, setShopProducts] = useState([]);
  const [currentShopId, setCurrentShopId] = useState('');
  // const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // setIsLoading(true);
        const shops = await fetchAllShops();
        setShops([...shops]);
        setCurrentShopId(shops[0]._id);
        setShopProducts([...shops[0].products]);
      } catch (e) {
        setError(true);
      } finally {
        // setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const currentShop = shops.find(shop => shop._id === currentShopId);
    if (currentShop) {
      setShopProducts([...currentShop.products]);
    }
  }, [currentShopId, shops]);

  const onShopClick = shop => {
    setCurrentShopId(shop._id);
  };

  return (
    <Container>
      {error && 'Error, please reload the page'}
      <ShopsList
        onShopClick={onShopClick}
        shops={shops}
        currentShopId={currentShopId}
      />
      <ProductsList
        shopProducts={shopProducts}
        currentShopId={currentShopId}
        addToCart={addToCart}
      />
    </Container>
  );
};

export default ShopsPage;
