import React from 'react'
import { Helmet } from 'react-helmet'
import Section1 from './Blog/section1/Section1'
import Section2 from './Blog/section2/Section2'

const Blog = () => {
  return (
    <div>
      <Helmet>
                <meta charSet="utf-8" />
                <title>Blog</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <Section1/>
            <Section2/>
    </div>
  )
}

export default Blog
