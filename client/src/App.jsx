import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThreeCircles } from 'react-loader-spinner';
import { SharedLayout } from 'components/SharedLayout/SharedLayout';

const ShopsPage = lazy(() => import('./pages/ShopsPage/ShopsPage'));
const OrderPage = lazy(() => import('./pages/OrderPage/OrderPage'));

export const App = () => {
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
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<ShopsPage />} />
          <Route path="/orders" element={<OrderPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
};
