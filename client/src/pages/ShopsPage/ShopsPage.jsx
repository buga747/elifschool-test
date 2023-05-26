import { useEffect, useState } from 'react';
import { ShopList, ProductList, HomeContainer } from './ShopsPage.styled';
import { fetchAllShops } from '../../services/shopsApi';

const ShopsPage = () => {
  const [shops, setShops] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // setIsLoading(true);
        const shops = await fetchAllShops();
        setShops([...shops]);
      } catch (e) {
        // setError(true);
      } finally {
        // setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <HomeContainer>
      <ShopList>
        <h2>Shops</h2>
        <ul>
          {shops.map(shop => (
            <li key={shop._id}>{shop.name}</li>
          ))}
        </ul>
      </ShopList>
      <ProductList>
        <h2>Products</h2>
        {/* <ul>
          {products.map(product => (
            <li key={product.id}>{product.name}</li>
          ))}
        </ul> */}
      </ProductList>
    </HomeContainer>
  );
};

export default ShopsPage;
