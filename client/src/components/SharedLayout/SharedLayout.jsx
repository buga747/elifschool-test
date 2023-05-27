import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Container, Header, Link, LoaderWrapper } from './SharedLayout.styled';
import { ThreeCircles } from 'react-loader-spinner';
import { BsCart } from 'react-icons/bs';

export function SharedLayout({ orderedItems }) {
  return (
    <Container>
      <Header>
        <nav>
          <Link to="/" end>
            Shops
          </Link>
          {orderedItems.length > 0 ? (
            <Link to="/orders">
              Orders <BsCart />
            </Link>
          ) : (
            <Link to="/orders">Orders</Link>
          )}{' '}
        </nav>
      </Header>
      <main>
        <Suspense
          fallback={
            <LoaderWrapper>
              <ThreeCircles
                height="200"
                width="200"
                color="#4fa94d"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
                ariaLabel="three-circles-rotating"
                outerCircleColor=""
                innerCircleColor=""
                middleCircleColor=""
              />
            </LoaderWrapper>
          }
        >
          <Outlet />
        </Suspense>
      </main>
    </Container>
  );
}
