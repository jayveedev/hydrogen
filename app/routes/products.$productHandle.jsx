import { seoPayload } from '~/lib/seo.server';
import { defer } from '@shopify/remix-oxygen';

import { useLoaderData } from '@remix-run/react';

import { PRODUCT_QUERY, PRODUCT_METAOBJECT } from '../data/queries';

export async function loader({params, request, context}) {

    const { productHandle } = params;
    
    const searchParams = new URL(request.url).searchParams;

    const selectedOptions = [];
    searchParams.forEach((value, name) => {
        selectedOptions.push({name, value});
    });


    const { product } = await context.storefront.query(PRODUCT_QUERY, {
        variables: {
            handle: productHandle,
            selectedOptions,
            country: context.storefront.i18n.country,
            language: context.storefront.i18n.language,
        },
        cache: context.storefront.CacheLong()
    });


    const { product_contents } = await context.storefront.query(PRODUCT_METAOBJECT, {
        variables: { id: product.metafield.value },
        cache: context.storefront.CacheLong()
    });

    product.metaobjects = product_contents;


    if (!product?.id) {
        throw new Response('product', {status: 404});
    }

    const firstVariant = product.variants.nodes[0];
    const selectedVariant = product.selectedVariant ?? firstVariant;

    const seo = seoPayload.product({
        product,
        selectedVariant,
        url: request.url,
    });


    return defer({
        product,
        seo
    });

}

export default function Product() {

    const { product } = useLoaderData();
    const { metaobjects } = product;

    console.log(metaobjects)

    
    return(
        <div className={`product_wrapper product_${metaobjects.gradient_name.value} product_vwo_ab_33`}>
            <div className="container product_vwo_ab_33__container">
                <div className="row product_vwo_ab_33__row">
                    <div className="col-12 col-lg-7 col-xl-6 product_vwo_ab_33__top_block product_picker__vwo_ab_33">
                        <h1 className="product_vwo_ab_33__heading">
                            { product.title }

                        </h1>

                    </div>

                    <div className="col-12 col-lg-5 product_vwo_ab_33__top_block product_accordions__vwo_ab_33"></div>

                </div>

            </div>

        </div>
    )
}
