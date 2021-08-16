import { Fragment } from 'react';

import Navbar from './Navbar';

const Layout: React.FC = (props) => {
  return (
    <Fragment>
      <Navbar />
      <main>{props.children}</main>
    </Fragment>
  );
};

export default Layout;
