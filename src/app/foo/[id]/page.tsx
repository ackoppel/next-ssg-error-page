import * as React from 'react';

export const dynamicParams = true;

export function generateStaticParams() {
  return [];
}

const Page: React.FC = () => {
  throw new Error('Shiet');
  return (
    <div>
      <h1>CONTENT</h1>
    </div>
  );
};

export default Page;
