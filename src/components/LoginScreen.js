import React, {Component} from 'react';
import {Button, Icon, Grid, Segment, Header} from 'semantic-ui-react';
import styled from 'styled-components';

const FullHeightGrid = styled(Grid)`
  height: 100vh;
`;

export default class LoginScreen extends Component{
  static defaultProps = {
    onGoogleLogin: (e, data) => {}
  }

  handleGoogleButtonClick = (e, data) => {
    this.props.onGoogleLogin(e, data);
  }

  render() {
    return (
      <FullHeightGrid centered verticalAlign="middle" columns={3}>
        <Grid.Column>
          <Segment textAlign="center" padded="very">
            <Header as="h1">로그인</Header>
            <Button color='google plus' fluid onClick={this.handleGoogleButtonClick}>
              <Icon name='google plus' /> 구글로 로그인
            </Button>
            <Button color='twitter' fluid>
              <Icon name='twitter' /> 트위터로 로그인
            </Button>
          </Segment>
        </Grid.Column>
      </FullHeightGrid>
    )
  }
}
