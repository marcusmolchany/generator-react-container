import React from 'react';
import propTypes from 'prop-types';

// todo: import other components and utils here
import './Component.css';

class Component extends React.PureComponent {
  state = {
    // todo: add your state here
  }

  render() {
    return (
      <h1><%= containerName %></h1>
    );
  }
}

Component.propTypes = {
  // todo: add propTypes
};

export default Component;
