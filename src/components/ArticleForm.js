import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';
import Container from 'semantic-ui-react/dist/commonjs/elements/Container/Container';
import Message from 'semantic-ui-react/dist/commonjs/collections/Message/Message';

export default class ArticleForm extends Component {
  static defaultProps = {
    errorMsg: '',
    onSubmit: () => {},
    creating: false,
  }

  state = {
    title: '',
    content: '',
  }

  handleChange = (e, { name, value }) => {
    this.setState({
      [name]: value,
    });
  }

  handleSubmit = () => {
    this.props.onSubmit(this.state);
  }

  render() {
    const { title, content } = this.state;
    const { errorMsg, creating } = this.props;
    return (
      <Container fluid>
        <Form as="div" loading={creating}>
          <Form.Group widths="equal">
            <Form.Input name="title" value={title} label="제목" onChange={this.handleChange} />
            <Form.TextArea name="content" value={content} label="내용" onChange={this.handleChange} />
            <Form.Button type="submit" onClick={this.handleSubmit}>저장</Form.Button>
            {
              errorMsg && (
                <Message negative>
                  <Message.Header>저장 할 수 없습니다.</Message.Header>
                  <p>{ errorMsg }</p>
                </Message>
              )
            }
          </Form.Group>
        </Form>
      </Container>
    );
  }
}
