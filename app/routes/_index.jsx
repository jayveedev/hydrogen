import React from 'react';
import Header from '../components/Header';

export function meta() {
  return [
    {
      title: 'Hydrogen Wuffes',
    },
    {
      description: 'A custom storefront powered by Hydrogen',
    },
  ];
}

export default function Index() {
  return (
    <main>
      <Header />
    </main>
  );
}
