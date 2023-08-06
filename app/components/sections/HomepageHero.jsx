import { Link } from 'react-router-dom';
import RenderImage from '../snippets/RenderImage';

export default function HomepageHero({settings}) {

    const { heading, button_text, button_url, image_desktop_left, image_desktop_right, image_mobile_left, image_mobile_right, image_sizes } = settings;

    const images = {
        url: {
            left_image: {
                desktop_img_url: image_desktop_left.reference.image.url,
                mobile_img_url: image_mobile_left.reference.image.url
            },
            right_image: {
                desktop_img_url: image_desktop_right.reference.image.url,
                mobile_img_url: image_mobile_right.reference.image.url
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

