import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Container, Header, Link, LoaderWrapper } from './SharedLayout.styled';
import { ThreeCircles } from 'react-loader-spinner';

export function SharedLayout() {
  return (
    <Container>
      <Header>
        <nav>
          <Link to="/" end>
            Shops
          </Link>
          <Link to="/orders">Orders</Link>
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
