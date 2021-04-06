import React from 'react';
import Helmet from 'react-helmet';

const Layout = ({children}) => {
    return (
        <>
            <Helmet>
                <title>Bienes Raices Gatsby</title>
                <meta name="description" content="Sitio web de bienes raíces en Gatsby" />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" crossorigin="anonymous" />
                <link href="https://fonts.googleapis.com/css?family=Lato300,400,700|Roboto:400,700&display=swap" rel="stylesheet" />
            </Helmet>
            {children}
        </>
    );
}
 
export default Layout;