import { MEDIA_FRAGMENT, FEATURED_COLLECTION_FRAGMENT, PRODUCT_VARIANT_FRAGMENT } from './fragments';

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
        image_sizes: field(key: "image_sizes") {
            value
        }
        featured_collection: field(key: "collection") {
            value 
            reference {
                ...FeaturedCollectionDetails
            }
        }
    }
}
${FEATURED_COLLECTION_FRAGMENT}
`;


export const PRODUCT_QUERY = `
query Product(
    $country: CountryCode
    $language: LanguageCode
    $handle: String!
    $selectedOptions: [SelectedOptionInput!]!
) @inContext(country: $country, language: $language) {
    product(handle: $handle) {
        id
        title
        vendor
        handle
        descriptionHtml
        description
        options {
            name
            values
        }
        metafield(namespace: "product" key: "metaobject") {
            value
        }
        selectedVariant: variantBySelectedOptions(selectedOptions: $selectedOptions) {
            ...ProductVariantFragment
        }
        media(first: 7) {
            nodes {
                ...Media
            }
        }
        variants(first: 1) {
            nodes {
                ...ProductVariantFragment
            }
        }
        seo {
            description
            title
        }
    }
    shop {
        name
        primaryDomain {
            url
        }
        shippingPolicy {
            body
            handle
        }
        refundPolicy {
            body
            handle
        }
    }
}
${MEDIA_FRAGMENT}
${PRODUCT_VARIANT_FRAGMENT}
`;


export const PRODUCT_METAOBJECT = `
query GetProductMetaObject($id: ID!) {
    product_contents: metaobject(id: $id) {
        id
        handle
        gradient_name: field(key: "gradient_name") {
            value
        }
        featured_image: field(key: "featured_image") {
            value
        }
        reviews_count: field(key: "reviews_count") {
            value
        }
    }
}
`;