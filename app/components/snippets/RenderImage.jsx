import { Image } from '@shopify/hydrogen-react';

const getGeneratedImgUrls = (img_url, image_sizes) => {
    
    let newImgUrls = {};

    const { desktop_img_url, mobile_img_url } = img_url;

    const imgExtensionMobile = 
        mobile_img_url.includes('.png')
            ? '.png'
            : mobile_img_url.includes('.jpg')
            ? '.jpg'
            : mobile_img_url.includes('.jpeg')
            ? '.jpeg'
            : false;

    const imgExtensionDesktop = 
        desktop_img_url.includes('.png')
            ? '.png'
            : desktop_img_url.includes('.jpg')
            ? '.jpg'
            : desktop_img_url.includes('.jpeg')
            ? '.jpeg'
            : false;

    const mobileImgUrlSplit = mobile_img_url.split(imgExtensionMobile),
        desktopImgUrlSplit = desktop_img_url.split(imgExtensionMobile);


    Object.keys(image_sizes).map((key) => {

        const image_size = image_sizes[key]['size'],
            image_crop = image_sizes[key]['crop'],
            image_device_type = image_sizes[key]['device'],
            imgWidthRetina = parseInt( image_size.split('x')[0] ) * 2,
            imgHeightRetina = parseInt( image_size.split('x')[1] ) * 2,
            imgSizeRetina = `${imgWidthRetina}x${imgHeightRetina}`;

        newImgUrls[key] = image_device_type == 'mobile' 
            ? `${mobileImgUrlSplit[0]}_${image_size}_crop_${image_crop}${imgExtensionMobile}${mobileImgUrlSplit[1]}, ${mobileImgUrlSplit[0]}_${imgSizeRetina}_crop_${image_crop}${imgExtensionMobile}${mobileImgUrlSplit[1]} 2x`
            : `${desktopImgUrlSplit[0]}_${image_size}_crop_${image_crop}${imgExtensionDesktop}${desktopImgUrlSplit[1]}, ${desktopImgUrlSplit[0]}_${imgSizeRetina}_crop_${image_crop}${imgExtensionDesktop}${desktopImgUrlSplit[1]} 2x`;

    });

    return newImgUrls;

}



export default function RenderImage( { img_url, image_sizes, width, height, img_class } ) {

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