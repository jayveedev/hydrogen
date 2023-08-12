import { Link } from 'react-router-dom';
import RenderImage from '../snippets/RenderImage';

import { useState, useEffect, useRef } from "react";
import { register } from 'swiper/element/bundle';

import enquire from 'enquire-js';

import viewport from '../snippets/MediaQueries';


export default function HomepageProductBanner({settings}) {

    const { heading,  featured_collection, image_sizes } = settings;
    const { products } = featured_collection.reference;

    const [ slider, setSlider ] = useState(false)
    const swiperContainerRef = useRef(null);


    if( slider ) {

        register();

        const swiperParams = {
            // slidesPerView: 'auto',
            // spaceBetween: 15,
            loop: false,
            autoplay: false,
            autoHeight: true,
            breakpointsInverse: true,
            breakpoints: {
                375: {
                    slidesPerView: 'auto',
                    spaceBetween: 15
                },
               576: {
                  slidesPerView: 'auto',
                  spaceBetween: 30
               },
               768: {
                    slidesPerView: 'auto',
                    spaceBetween: 30
               },
               992:{
                  slidesPerView: 4,
                  spaceBetween: 30,
                  allowTouchMove: true
               }
            }
         }
    
        //  if( swiperContainerRef.current != null ) {
        //     Object.assign(swiperContainerRef.current.swiper.params, swiperParams)
    
        //     swiperContainerRef.current.addEventListener('resize', () => {
        //         setTimeout( function() {
        //             swiperContainerRef.current.swiper.update();
        //         },50)
            
    
        //     })
    
        // }

    }

    useEffect(() => {

        const mobile = {
            match: () => {
                setSlider(true);
            }

        }

        const desktop = {
            match: () => {
                setSlider(false);
            }

        }

        enquire.register( viewport( '$viewport5', 'max' ), mobile)
        .register( viewport( '$viewport5', 'min' ), desktop);



        return() => {
            enquire.unregister( viewport( '$viewport5', 'max' ), mobile)
            .unregister( viewport( '$viewport5', 'min' ), desktop);

        }

    }, [slider]);


    return (
        <div className="homepage_product_banners">
            <div className="container homepage_product_banners__container">
                <h2 className="homepage_product_banners__title"> { heading.value } </h2>

                <div className="homepage_product_banners__slider homepage_product_banners__slider_mobile">

                    { slider ? (
                         <swiper-container class="homepage_product_banners__slider_wrapper" 
                         ref={ swiperContainerRef }
                         slidesPerView = 'auto'
                         spaceBetween = {15}
                         loop = {false}
                         >
                            <ProductCards products={ products.nodes } image_sizes = { JSON.parse( image_sizes.value ) } slider={slider}/>
                              
                         </swiper-container> 
                    ) : (
                        <div className="homepage_product_banners__slider_wrapper">
                            <ProductCards products={ products.nodes } image_sizes = { JSON.parse( image_sizes.value ) } slider={slider} /> 

                        </div>
                    )}
                
                </div>

            </div>

        </div>

    );
    
}




function ProductCards( { products, image_sizes, slider } ) {
    const productCards = Object.keys(products).map( (product) => {

        return (
            <ProductCard key= { products[product].id } product={ products[product] } image_sizes= { image_sizes } slider={slider}/> 
        )
    });

    return productCards;
}




function ProductCard( { product , image_sizes, slider } ) {

    const { handle, custom_title, custom_description, custom_image } = product;
    const productLink = `/products/${handle}`;

    const img_url = { 
        "desktop_img_url": custom_image.reference.image.url,
        "mobile_img_url": custom_image.reference.image.url
    }

    return (
        <>
            { slider ? (
                <swiper-slide class="homepage_product_banners__slide" 
                >
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
        
                </swiper-slide>
            ) : (
                <div 
                className="homepage_product_banners__slide"
                >
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
            )}
        </>
    )
}
