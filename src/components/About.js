import React from 'react'
import { Helmet } from 'react-helmet';

const About = () => {
  return (
    <>
        <Helmet>
{ /* Standard metadata tags */ }
<title>{"ABout Pageed"}</title>
<meta name='description' content={"description"} />
{ /* End standard metadata tags */ }
{ /* Facebook tags */ }
<meta property="og:type" content={"type"} />
<meta property="og:title" content={"About Page"} />
<meta property="og:description" content={"description"} />
<meta property="og:image" itemProp="image" content={"https://cdn.pixabay.com/photo/2024/05/26/10/15/bird-8788491_1280.jpg"}/>
{ /* End Facebook tags */ }
{ /* Twitter tags */ }
<meta name="twitter:creator" content={"name"} />
<meta name="twitter:card" content={"type"} />
<meta name="twitter:title" content={"title"} />
<meta name="twitter:description" content={"description"} />
{ /* End Twitter tags */ }
</Helmet>
<div>About</div>
    </>
  )
}

export default About