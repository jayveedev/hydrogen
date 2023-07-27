import { Link } from 'react-router-dom';
import { MediaFile } from '@shopify/hydrogen-react';

export default function Hero({settings}) {

    const { heading, button_text, button_url, image_desktop_left, image_desktop_right, image_mobile_left, image_mobile_right } = settings;

    console.log(settings)
    
    return(
        <div className="container homepage_hero__container">
            <div className="homepage_hero">
                <div className="homepage_hero__content">
                    <div>
                        <h1> { heading.value } </h1>

                        <Link
                        className="dl__btn_primary homepage_hero__btn"
                        to={ button_url.value }
                        alt={ button_text.value }>
                            { button_text.value }

                        </Link>
                        
                    </div>

                </div>

                {image_mobile_right?.reference && (
                    <RightImage
                        data={image_mobile_right.reference}
                        width='150'
                        height='200'
                    />

                )}

                {image_mobile_left?.reference && (
                    <LeftImage
                        data={image_mobile_left.reference}
                        width='150'
                        height='200'
                    />

                )}

            </div>

        </div>
    );
}



function RightImage({data, width, height}) {

    return (

        <picture>

            <MediaFile
                data={data}
                className="homepage_hero__image_right"
                mediaOptions={
                    {
                        image: {
                            crop: 'center',
                            width: width,
                            height: height
                        },
                    }
                }
            />
        </picture>

    );
}

function LeftImage({data, width, height}) {

    return (

        <picture>

            <MediaFile
                data={data}
                className="homepage_hero__image_left"
                mediaOptions={
                    {
                        image: {
                            crop: 'center',
                            width: width,
                            height: height
                        },
                    }
                }
            />
        </picture>

    );
}