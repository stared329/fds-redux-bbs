import React, { Component } from 'react';
import { Dimmer, Loader } from 'semantic-ui-react';

export default function withLoading(WrappedComponent) {
  return class extends Component {
    state = {
      loading: false,
    }
    render() {
      if (this.props.loading) {
        return (
          <Dimmer active>
            <Loader />
          </Dimmer>
        );
      }
      return (
        <WrappedComponent {...this.props} />
      );
    }
  };
}
