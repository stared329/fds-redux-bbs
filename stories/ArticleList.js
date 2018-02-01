import React from 'react';
import { storiesOf } from '@storybook/react';
import ArticleList from '../src/components/ArticleList';

const articles = [
  {
    id: 'article0',
    title: '게시글 제목',
    createdAt: 1517453812176,
    nickName: '김승하',
  },
  {
    id: 'article1',
    title: '게시글 제목 2',
    createdAt: 1517453812176,
    nickName: '김승하',
  }];

const articlesWithLink = articles.map(article => ({
  ...article,
  itemProps: {
    as: 'a',
    href: 'https://google.com',
  },
}));

storiesOf('게시글 목록', module)
  .add('게시글 목록', () => (
    <ArticleList articles={articlesWithLink} />
  ));

