export const MEDIA_FRAGMENT = `#graphql
  fragment Media on Media {
    __typename
    mediaContentType
    alt
    previewImage {
      url
    }
    ... on MediaImage {
      id
      image {
        id
        url 
        width
        height
      }
    }
    ... on Video {
      id
      sources {
        mimeType
        url
      }
    }
    ... on Model3d {
      id
      sources {
        mimeType
        url
      }
    }
    ... on ExternalVideo {
      id
      embedUrl
      host
    }
  }
`;

export const PRODUCT_CARD_FRAGMENT = `#graphql
  fragment ProductCard on Product {
    id
    title
    publishedAt
    handle
    vendor
    variants(first: 1) {
      nodes {
        id
        image {
          url
          altText
          width
          height
        }
        price {
          amount
          currencyCode
        }
        compareAtPrice {
          amount
          currencyCode
        }
        selectedOptions {
          name
          value
        }
        product {
          handle
          title
        }
      }
    }
  }
`;

export const FEATURED_COLLECTION_FRAGMENT = `
  fragment FeaturedCollectionDetails on Collection {
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
            custom_image: metafield(namespace: "homepage_product_banner", key: "image") {
                id
                value
                reference {
                    ...Media
                }
            }
        }		
    }
}
${MEDIA_FRAGMENT}
`;
