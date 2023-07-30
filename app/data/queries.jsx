import { MEDIA_FRAGMENT } from './fragments';

export const HOMEPAGE_HERO_QUERY = `
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
      image_sizes: field(key: "image_sizes") {
        value
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

export const HOMEPAGE_PRODUCT_BANNER_QUERY = `
query GetMetaObject($id: ID!) {
    homepage_product_banner: metaobject(id: $id) {
        id
        handle
        heading: field(key: "heading") {
            value
        }
        featured_collection: field(key: "collection") {
            value
        }
    }
}
`;


export const FEATURED_COLLECTION = `#graphql
query GetFeaturedCollection($id: ID!) {
    collection_products: collection(id: $id) {
        id
        products(first: 20) {
            nodes {
                id
                handle
                title
                description
                onlineStoreUrl
                featuredImage {
                    id
                    url
                }
                custom_title:  metafield(namespace: "homepage_product_banner", key: "product_custom_title") {
                    id
                    value
                }
                custom_description:  metafield(namespace: "homepage_product_banner", key: "product_custom_desc") {
                    id
                    value
                }
                
            }		
        }
    }
}
`;