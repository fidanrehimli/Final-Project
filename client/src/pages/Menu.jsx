import React from 'react'
import { Helmet } from 'react-helmet'
import Section1 from './Menu/section1/Section1'
import Section2 from './Menu/section2/Section2'
import Section3 from './Menu/section3/Section3'
import Section4 from './Menu/section4/Section4'
import Section5 from './Menu/section5/Section5'
import Section6 from './Menu/section6/Section6'
import Section7 from './Menu/section7/Section7'
import Section8 from './Menu/section8/Section8'

const MENU = () => {
  return (
    <div>
<Helmet>
                <meta charSet="utf-8" />
                <title>Menu</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <Section1/>
            <Section2/>
            <Section3/>
          <Section4/>
          <Section5/>
          <Section6/>
          <Section7/>
          <Section8/>
    </div>
  )
}
export default MENU
