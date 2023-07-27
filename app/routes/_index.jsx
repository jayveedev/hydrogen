import {defer} from '@shopify/remix-oxygen';
import { useLoaderData } from '@remix-run/react';
import { HOMEPAGE_HERO_QUERY } from '../data/requests';

import  Hero  from '../components/sections/Hero';

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


    return (
         <Hero settings={ homepage_hero }/>

    );
}


