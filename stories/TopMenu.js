import React from 'react';
import { storiesOf } from '@storybook/react';
import TopMenu from '../src/components/TopMenu';

storiesOf('네비게이션', module)
  .add('메뉴', () => (
    <TopMenu />
  ));
