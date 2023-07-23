import {defer} from '@shopify/remix-oxygen';
import { useLoaderData } from '@remix-run/react';
import { MEDIA_FRAGMENT } from '../data/fragments';
import { MediaFile } from '@shopify/hydrogen-react';

export async function loader({params, context}) {

    const { homepage_hero } = await context.storefront.query(HOMEPAGE_HERO_QUERY, {
      variables: {id: 'gid://shopify/Metaobject/4359520541'},
    });


    return defer({
        homepage_hero: homepage_hero
    });
}




export default function Homepage() {
    const {
        homepage_hero,
    } = useLoaderData();

    console.log(homepage_hero)

    return (
        <>
        </>

    );
}

function SpreadMedia({data}) {

    return (
        <MediaFile
          data={data}
          className="block object-cover w-full h-full"
          mediaOptions={{
            video: {
              controls: false,
              muted: true,
              loop: true,
              playsInline: true,
              autoPlay: true,
              previewImageOptions: {src: data.previewImage?.url ?? ''},
            },
            image: {
              loading,
              crop: 'center',
              sizes,
              alt: data.alt || '',
            },
          }}
        />
      );
}


const HOMEPAGE_HERO_QUERY = `
query GetMetaObject($id: ID!) {
    homepage_hero: metaobject(id: $id) {
      id
      handle
      image_desktop_right: field(key: "image_desktop_right") {
        reference {
            ...Media
        }
      }
      image_desktop_left: field(key: "image_desktop_left") {
        reference {
            ...Media
        }
      }
      image_mobile_right: field(key: "image_mobile_right") {
        reference {
            ...Media
        }
      }
      image_mobile_left: field(key: "image_mobile_left") {
        reference {
            ...Media
        }
      }
      heading: field(key: "heading") {
        value
      }
      button_url: field(key: "button_url") {
        value
      }
      button_text: field(key: "button_text") {
        value
      }
    }
  }
  ${MEDIA_FRAGMENT}
`;

