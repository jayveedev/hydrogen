import { Link } from 'react-router-dom';
import { Image } from '@shopify/hydrogen-react';

export default function Hero({settings}) {

    const { heading, button_text, button_url, image_desktop_left, image_desktop_right, image_mobile_left, image_mobile_right, image_sizes } = settings;

    const images = {
        url: {
            left_image: {
                desktop_img_url: image_desktop_left.reference.previewImage.url,
                mobile_img_url: image_mobile_left.reference.previewImage.url
            },
            right_image: {
                desktop_img_url: image_desktop_right.reference.previewImage.url,
                mobile_img_url: image_mobile_right.reference.previewImage.url
            }
        },
        sizes: JSON.parse(image_sizes.value)
    }

    
    return(
        <div className="container homepage_hero__container">
            <div className="homepage_hero">
                <div className="homepage_hero__content">
                    <div>
                        <h1 className="homepage_hero__title"> { heading.value } </h1>

                        <Link
                        className="dl__btn_primary homepage_hero__btn"
                        to={ button_url.value }
                        alt={ button_text.value }>
                            { button_text.value }

                        </Link>
                        
                    </div>

                </div>

                <RenderImage img_url={ images.url.left_image } 
                image_sizes={ images.sizes }
                width="150" 
                height="200" 
                img_class="homepage_hero__image_left" />

                <RenderImage img_url={ images.url.right_image } 
                image_sizes={ images.sizes }
                width="150" 
                height="200" 
                img_class="homepage_hero__image_right" />

            </div>

        </div>
    );
}

const getGeneratedImgUrls = (img_url, image_sizes) => {
    
        let newImgUrls = {};

        const { desktop_img_url, mobile_img_url } = img_url;

        const imgExtensionMobile = 
        mobile_img_url.includes('.png')
            ?  '.png'
            : mobile_img_url.includes('.jpg')
            ? '.jpg'
            : mobile_img_url.includes('.jpeg')
            ? '.jpeg'
            : false;

        const imgExtensionDesktop = 
        desktop_img_url.includes('.png')
            ?  '.png'
            : desktop_img_url.includes('.jpg')
            ? '.jpg'
            : desktop_img_url.includes('.jpeg')
            ? '.jpeg'
            : false;

        const mobileImgUrlSplit = mobile_img_url.split(imgExtensionMobile);
        const desktopImgUrlSplit = desktop_img_url.split(imgExtensionMobile);


        Object.keys(image_sizes).map((key) => {

            const image_size = image_sizes[key]['size'],
                image_crop = image_sizes[key]['crop'],
                image_device_type = image_sizes[key]['device']

                newImgUrls[key] = image_device_type == 'mobile' 
                    ? `${mobileImgUrlSplit[0]}_${image_size}_crop_${image_crop}${imgExtensionMobile}${mobileImgUrlSplit[1]}`
                    : `${desktopImgUrlSplit[0]}_${image_size}_crop_${image_crop}${imgExtensionDesktop}${desktopImgUrlSplit[1]}`;

        });

        return newImgUrls;

}


function RenderImage( { img_url, image_sizes, width, height, img_class } ) {

    const generatedImgUrls = getGeneratedImgUrls(img_url, image_sizes);

    const Sources = Object.keys(generatedImgUrls).reverse().map((key) => {

        const breakpoint = `(min-width: ${key}px)`,
            sourceUrl = generatedImgUrls[key];

        return (
            <source
            key={key}
            type="image/png"
            media={ breakpoint }
            srcSet={ sourceUrl }
            />
        );

    });



    return (
        <picture>
            { Sources }

            <Image
            className={ img_class }
            src={ generatedImgUrls[375] }
            width={ width }
            height={ height }
            /> 

        </picture>

    );
}