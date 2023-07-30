import { defer } from '@shopify/remix-oxygen';
import { useLoaderData } from '@remix-run/react';
import { HOMEPAGE_HERO_QUERY, HOMEPAGE_PRODUCT_BANNER_QUERY, FEATURED_COLLECTION } from '../data/queries';

import  HomepageHero  from '../components/sections/HomepageHero';
import  HomepageProductBanner  from '../components/sections/HomepageProductBanner';

export async function loader({params, context}) {

    const [ { homepage_hero }, { homepage_product_banner }  ] = await Promise.all([
        await context.storefront.query( HOMEPAGE_HERO_QUERY, {
                variables: { id: 'gid://shopify/Metaobject/4359520541' },
                cache: context.storefront.CacheLong()
            }
        ),
        await context.storefront.query( HOMEPAGE_PRODUCT_BANNER_QUERY, {
                variables: { id: 'gid://shopify/Metaobject/5629247773' },
                cache: context.storefront.CacheLong()
            }
        )
    ]);

    return defer({
        homepage_hero: homepage_hero,
        homepage_product_banner: {
            heading: homepage_product_banner.heading.value,
            featured_collection_products: await context.storefront.query(FEATURED_COLLECTION, {
                variables: { id: homepage_product_banner.featured_collection.value },
                cache: context.storefront.CacheLong()
            }) 
        }
    });

}





export default function Homepage() {

    const {
        homepage_hero,
        homepage_product_banner
    } = useLoaderData();


    return (
        <>
            <HomepageHero settings={ homepage_hero }/>
            <HomepageProductBanner settings={ homepage_product_banner }/>

        </>

    );
}


