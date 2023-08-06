import { Link } from 'react-router-dom';
import RenderImage from '../snippets/RenderImage';

export default function HomepageProductBanner({settings}) {

    const { heading,  featured_collection, image_sizes } = settings;
    const { products } = featured_collection.reference;

    return (
        <div className="homepage_product_banners">
            <div className="container homepage_product_banners__container">
                <h2 className="homepage_product_banners__title"> { heading.value } </h2>

                <div className="homepage_product_banners__slider homepage_product_banners__slider_mobile">
                    <div className="homepage_product_banners__slider_wrapper">
                         <ProductCards products={ products.nodes } image_sizes = { JSON.parse( image_sizes.value ) }/> 

                    </div>

                </div>

            </div>

        </div>

    );
    
}


function ProductCards( { products, image_sizes } ) {
    
    const productCards = Object.keys(products).map( (product) => {
        return (
            <ProductCard key= { products[product].id } product={ products[product] } image_sizes= { image_sizes } />
        )
    });

    return productCards;
}

function ProductCard( { product , image_sizes } ) {

    const { handle, custom_title, custom_description, custom_image } = product;
    const productLink = `/products/${handle}`;

    const img_url = { 
        "desktop_img_url": custom_image.reference.image.url,
        "mobile_img_url": custom_image.reference.image.url
    }

    return (
        <div className="homepage_product_banners__slide">
            <Link className="homepage_product_banners__slide_link"
            to={ productLink }
            alt={ custom_description.value }>

                <RenderImage img_url={ img_url } 
                image_sizes={ image_sizes }
                width="121" 
                height="78" 
                img_class="homepage_product_banners__slide_image" />

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
