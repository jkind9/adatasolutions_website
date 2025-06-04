import { Outlet } from 'react-router-dom';
import Header from '../components/HeaderComponents/Header';
import Footer from '../components/FooterComponents/Footer';

export default function RootLayout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />        {/* Nested pages render here */}
      </main>
      <Footer />
    </>
  );
}
