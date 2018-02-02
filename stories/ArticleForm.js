import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import ArticleForm from '../src/components/ArticleForm';

storiesOf('게시글 작성 폼', module)
  .add('게시글 작성 폼', () => (
    <ArticleForm onSubmit={action('onSubmit')} />
  ))
  .add('error message', () => (
    <ArticleForm errorMsg="필드를 모두 입력하세요." />
  ));
