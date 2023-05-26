import { useEffect, useState } from 'react';
import { ProductList, HomeContainer } from './ShopsPage.styled';
import { fetchAllShops } from '../../services/shopsApi';
import ShopsList from '../../components/ShopsList/ShopsList';

const ShopsPage = () => {
  const [shops, setShops] = useState([]);
  const [shopProducts, setShopProducts] = useState([]);
  const [currentShopId, setCurrentShopId] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const shops = await fetchAllShops();
        setShops([...shops]);
        setCurrentShopId(shops[0]._id);
        setShopProducts([...shops[0].products]);
      } catch (e) {
        setError(true);
      } finally {
        setIsLoading(false);
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
    <HomeContainer>
      {error && 'Error, please reload the page'}

      <ShopsList onShopClick={onShopClick} shops={shops} />
      <ProductList>
        <h2>Products</h2>
        <ul>
          {shopProducts.map(product => (
            <li key={product._id}>{product.title}</li>
          ))}
        </ul>
      </ProductList>
    </HomeContainer>
  );
};

export default ShopsPage;