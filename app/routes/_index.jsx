import { defer } from '@shopify/remix-oxygen';
import { useLoaderData } from '@remix-run/react';
import { HOMEPAGE_HERO_QUERY, HOMEPAGE_PRODUCT_BANNER_QUERY } from '../data/queries';

import { HomepageHero, HomepageProductBanner }  from '../components';

import {seoPayload} from '~/lib/seo.server';

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

    const seo = seoPayload.home();

    console.log(seo)


    return defer({
        homepage_hero: homepage_hero,
        homepage_product_banner: homepage_product_banner,
        seo
    });

}





export default function Homepage() {

    const {
        homepage_hero,
        homepage_product_banner
    } = useLoaderData();    


    return (
        <>
            <HomepageHero settings={ homepage_hero } />
            <HomepageProductBanner settings={ homepage_product_banner } />

        </>

    );
}


