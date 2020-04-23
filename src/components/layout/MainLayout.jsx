import React from 'react';

const MainLayout = (props) => {
  const { children } = props;
  return (
    <>
      <main>{children}</main>
      <div>Tab navigation</div>
    </>
  );
};

export default MainLayout;
