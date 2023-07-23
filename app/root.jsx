import {defer} from '@shopify/remix-oxygen';
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from '@remix-run/react';
import styles from './styles/app.css';
import favicon from '../public/favicon.svg';

import Layout from './components/layout/Layout';

import {parseMenu} from './lib/utils';

export const links = () => {
  return [
    { rel: 'stylesheet', href: styles },
    { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Lato:wght@400;700;900&display=swap' },
    { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@400;500;600;700&display=swap' },
    { rel: 'preconnect', href: 'https://cdn.shopify.com' },
    { rel: 'preconnect', href: 'https://shop.app' },
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
    { rel: 'icon', type: 'image/svg+xml', href: favicon },
  ];
};

export async function loader({context}) {
    const [layout] = await Promise.all( [getLayoutData(context)]);

    return defer ({
        layout
    });
}

export default function App() {
  const data = useLoaderData();

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1"></meta>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, shrink-to-fit=no"
        />

        <Meta />
        <Links />
      </head>
      <body>
        <Layout layout={data.layout} />
        <Outlet />
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

const LAYOUT_QUERY = `#graphql
    query layout(
        $language: LanguageCode
        $headerMenuHandle: String!
        $secondaryMenuHandle: String!
    ) @inContext(language: $language) {
        shop {
            ...Shop
        }
        headerMenu: menu(handle: $headerMenuHandle) {
            ...Menu
        }
        secondaryMenu: menu(handle: $secondaryMenuHandle) {
            ...Menu
        }
    }
    fragment Shop on Shop {
        name
        description
        primaryDomain {
            url
        }
    }
    fragment MenuItem on MenuItem {
        id
        resourceId
        tags
        title
        type
        url
    }
    fragment ChildMenuItem on MenuItem {
        ...MenuItem
    }
    fragment ParentMenuItem on MenuItem {
        ...MenuItem
        items {
            ...ChildMenuItem
        }
    }
    fragment Menu on Menu {
        id
        items {
            ...ParentMenuItem
        }
    }
`;


async function getLayoutData({storefront}) {
    const data = await storefront.query(LAYOUT_QUERY, {
      variables: {
        headerMenuHandle: 'main-menu',
        secondaryMenuHandle: 'secondary-menu',
        language: storefront.i18n.language,
      }
    });

    const customPrefixes = {BLOG: '', CATALOG: 'products'};
  
  
    const headerMenu = data?.headerMenu
    ? parseMenu(data.headerMenu, customPrefixes)
    : undefined;

    const secondaryMenu = data?.secondaryMenu
    ? parseMenu(data.secondaryMenu, customPrefixes)
    : undefined;

    const menu = {
        headerMenu,
        secondaryMenu
    }
  
    return {shop: data.shop, menu };
}