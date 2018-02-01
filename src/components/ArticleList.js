import React, { Component } from 'react';
import { List } from 'semantic-ui-react';


export default class LoginScreen extends Component {
  static defaultProps = {
    articles: [],
    onMount: () => {},
  }
  componentDidMount() {
    this.props.onMount();
  }

  render() {
    const { articles } = this.props;
    return (
      <List divided relaxed>
        {
          articles.map(({
            id, title, createdAt, nickName, itemProps = {},
          }) => (
            <List.Item key={id} {...itemProps}>
              <List.Icon name="github" size="large" verticalAlign="middle" />
              <List.Content>
                <List.Header as="a">{title} ({nickName})</List.Header>
                <List.Description as="a">{createdAt}</List.Description>
              </List.Content>
            </List.Item>
          ))
        }
      </List>
    );
  }
}
