import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import LoginScreen from '../src/components/LoginScreen';

storiesOf('로그인화면', module)
  .add('로그인 화면', () => (
    <LoginScreen onGoogleLogin={action('onGoogleLogin')}/>
  ));
