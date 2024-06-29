import React from 'react'
import { Helmet } from 'react-helmet'
import Section1 from './Menu/section1/Section1'
import Section2 from './Menu/section2/Section2'

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
    </div>
  )
}
export default MENU
