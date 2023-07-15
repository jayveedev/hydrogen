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

export const links = () => {
  return [
    {
      rel: 'stylesheet',
      href: styles,
    },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Lato:wght@400;700;900&display=swap',
    },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@400;500;600;700&display=swap',
    },
    {
      rel: 'preconnect',
      href: 'https://cdn.shopify.com',
    },
    {
      rel: 'preconnect',
      href: 'https://shop.app',
    },
    {
      rel: 'preconnect',
      href: 'https://fonts.googleapis.com',
    },
    {
      rel: 'preconnect',
      href: 'https://fonts.gstatic.com',
    },
    {
      rel: 'icon',
      type: 'image/svg+xml',
      href: favicon,
    },
  ];
};

export async function loader({context}) {
  const layout = await context.storefront.query(LAYOUT_QUERY);

  return {
    layout,
  };
}

export default function App() {
  const data = useLoaderData();

  const {name} = data.layout.shop;

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
        <Layout title={name} />
        <Outlet />
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

const LAYOUT_QUERY = `#graphql
  query layout {
    shop {
      name
      description
    }
  }
`;
