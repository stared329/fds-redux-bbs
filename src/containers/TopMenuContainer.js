import React, { Component } from 'react';
// import * as firebase from 'firebase';
import { Link } from 'react-router-dom';
import TopMenu from '../components/TopMenu';

const logoProps = {
  as: Link,
  to: '/link'
}

const accountProps = {
  as: Link,
  to: '/account'
}

export default class TopMenuContainer extends Component {
  render() {
    return (
      <TopMenu logoProps={logoProps} accountProps={accountProps}/>
    );
  }
}
