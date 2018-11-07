import React from 'react';
import Link from 'next/link';

import '../../styles/main.scss';

class Header extends React.Component {


  render() {
    const title = this.props.title;

    return (
      <React.Fragment>
        <p> { title } </p>
        {this.props.children}
        <p className='customClass'> I am styled P element </p>
        <p className='customClassFromFile'> I am styled P element </p>

        <Link href="/">
          <a style={{'fontSize': '20px'}}> Home </a>
        </Link>

        <Link href="/about">
          <a> About </a>
        </Link>

        <Link href="/portfolios">
          <a> Portfolio </a>
        </Link>

        <Link href="/blogs">
          <a> Blog </a>
        </Link>

        <Link href="/cv">
          <a> CV </a>
        </Link>
        <style jsx>
         {
          `
          a {
            font-size: 20px;
          };
          .customClass {
            color: red;
          }
          `
         }
        </style>
      </React.Fragment>
    )
  }
}

export default Header;


