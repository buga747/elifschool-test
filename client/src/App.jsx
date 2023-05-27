import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Suspense, lazy, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThreeCircles } from 'react-loader-spinner';
import { SharedLayout } from 'components/SharedLayout/SharedLayout';

const ShopsPage = lazy(() => import('./pages/ShopsPage/ShopsPage'));
const OrderPage = lazy(() => import('./pages/OrderPage/OrderPage'));

export const App = () => {
  const [orderedItems, setOrderedItems] = useState([]);

  const addToCart = newItem => {
    if (orderedItems.length === 0) {
      setOrderedItems([newItem]);
      toast.success(`${newItem.title} added to your cart`);
    }

    if (orderedItems.length > 0) {
      if (orderedItems[0].shopId === newItem.shopId) {
        setOrderedItems(prev => [...prev, newItem]);
        toast.success(`${newItem.title} added to your cart`);
      }

      const itemInCart = orderedItems.find(item => item._id === newItem._id);

      if (itemInCart) {
        const updatedItems = orderedItems.map(item => {
          if (item._id === newItem._id) {
            return { ...item, quantity: item.quantity + 1 };
          }
          return item;
        });
        toast.success(`${newItem.title} added to your cart`);

        setOrderedItems(updatedItems);
      }

      if (orderedItems[0].shopId !== newItem.shopId) {
        toast.error('You can add items from one shop to cart', {
          position: 'top-right',
          autoClose: 3000,
        });
      }
    }
  };

  return (
    <Suspense
      fallback={
        <ThreeCircles
          height="100"
          width="100"
          color="#4fa94d"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
          ariaLabel="three-circles-rotating"
          outerCircleColor=""
          innerCircleColor=""
          middleCircleColor=""
        />
      }
    >
      <Routes>
        <Route path="/" element={<SharedLayout orderedItems={orderedItems} />}>
          <Route index element={<ShopsPage addToCart={addToCart} />} />
          <Route path="/orders" element={<OrderPage items={orderedItems} />} />
        </Route>
      </Routes>
      <ToastContainer />
    </Suspense>
  );
};
