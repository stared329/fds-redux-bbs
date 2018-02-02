import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { createArticle } from '../ducks/article';
import ArticleForm from '../components/ArticleForm';

class ArticleFormContainer extends Component {
  render() {
    const { success, ...rest } = this.props;
    if (success) {
      return (
        <Redirect to="/list" />
      );
    }
    return (
      <ArticleForm {...rest} />
    );
  }
}

export default connect(
  state => ({
    creating: state.article.creating,
    success: state.article.success,
    errorMsg: state.article.errorMsg,
  }),
  dispatch => ({
    onSubmit: ({ title, content }) => {
      dispatch(createArticle({ title, content }));
    },
  }),
)(ArticleFormContainer);
