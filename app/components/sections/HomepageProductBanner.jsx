import { Link } from 'react-router-dom';
import { useLoaderData } from '@remix-run/react';



export default function HomepageProductBanner( { settings } ) {

    const data = useLoaderData();
    const { heading,  featured_collection_products } = data.homepage_product_banner;
    const { products } = featured_collection_products.collection_products;


    return (
        <div className="homepage_product_banners">
            <div className="container homepage_product_banners__container">
                <h2 className="homepage_product_banners__title"> { heading } </h2>

                <div className="homepage_product_banners__slider homepage_product_banners__slider_mobile">
                    <div className="homepage_product_banners__slider_wrapper">
                        <ProductCards products={ products.nodes } />

                    </div>

                </div>

            </div>

        </div>

    );
    
}


function ProductCards( { products } ) {
    
    const productCards = Object.keys(products).map( (product) => {
        return (
            <ProductCard key= { products[product].id } product={ products[product] } />
        )
    });

    return productCards;
}

function ProductCard( { product } ) {

    const { handle, custom_title, custom_description } = product;
    const productLink = `/products/${handle}`;

    return (
        <div className="homepage_product_banners__slide">
            <Link className="homepage_product_banners__slide_link"
            to={ productLink }
            alt={ custom_description.value }>
                <picture></picture>

                <div className="homepage_product_banners__slide_text">
                    <h5 className="homepage_product_banners__slide_title">
                        { custom_title.value }
                    </h5>

                    <p className="homepage_product_banners__slide_description">
                        { custom_description.value }
                    </p>

                </div>
               

            </Link>

        </div>
    )
}