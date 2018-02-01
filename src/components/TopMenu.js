import React, { Component } from 'react';
import {Menu} from 'semantic-ui-react';

export default class TopMenu extends Component{
  static defaultProps = {
    logoProps: {},
    accountProps: {}
  }
  render() {
    const {logoProps, accountProps} = this.props;
    return (
      <Menu pointing secondary>
        <Menu.Item name='board' {...logoProps} />
        <Menu.Menu position='right'>
          <Menu.Item name='login' {...accountProps} />
        </Menu.Menu>
      </Menu>
    );
  }
}
