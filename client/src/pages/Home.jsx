import React, { useContext } from 'react';
import '../pages/pagesStyle.css';
import { Helmet } from 'react-helmet';
import Container from './Home/Container';
import Section2 from './Home/section2/Section2';
import Section3 from './Home/section3/Section3';
import Section4 from './Home/section4/Section4';
import Section5 from './Home/section5/Section5';
import Section6 from './Home/section6/Section6';
import Footer from '../layout/Footer';

const Home = () => {


  return (
    <div>
      <Helmet>
                <meta charSet="utf-8" />
                <title>Home</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <Container/>
            <Section2/>
            <Section3/>
            <Section4/>
            <Section6/>
            <Section5/>
            <Footer/>
    </div>
  );
};

export default Home;
