import React, { PropsWithChildren } from 'react';

const Layout: React.FC<PropsWithChildren> = (props) => {
  return (
    <html lang="en">
      <body>{props.children}</body>
    </html>
  );
};

export default Layout;
