import React from 'react';
import Header from '../shared/Header';

const BaseLayout = (props) => {

  return (
    <React.Fragment>
      <Header />
      {props.children}
    </React.Fragment>
  )
}

export default BaseLayout;
