import React from 'react'
import { Helmet } from 'react-helmet';
const Home = () => {
  return (
    <>
    <Helmet>
{ /* Standard metadata tags */ }
<title>{"Home Paged"}</title>
<meta name='description' content={"description"} />
{ /* End standard metadata tags */ }
{ /* Facebook tags */ }
<meta property="og:type" content={"b"} />
<meta property="og:title" content={"Home Page"} />
<meta property="og:description" content={"description"} />
<meta property="og:image" itemProp="image" content={"https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg"}/>
{ /* End Facebook tags */ }
{ /* Twitter tags */ }
<meta name="twitter:creator" content={"name"} />
<meta name="twitter:card" content={"dd"} />
<meta name="twitter:title" content={"title"} />
<meta name="twitter:description" content={"Twitter"} />
{ /* End Twitter tags */ }
</Helmet>
    <div>Home</div>
    </>
  )
}

export default Home