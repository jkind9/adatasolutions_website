import React from 'react';
import Header from '../components/HeaderComponents/Header';
import Footer from '../components/FooterComponents/Footer';
import ScrollingBanner from '../components/ReusableComponents/ScrollingBanner';
const Home = () => (
  <div>
    <Header />
    {/* <Banner /> */}
    <ScrollingBanner />
    {/* Other content here */}
    <Footer/>
  </div>
);

export default Home;
