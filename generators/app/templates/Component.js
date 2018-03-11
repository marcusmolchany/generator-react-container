import React from 'react';
import propTypes from 'prop-types';

// todo: import other components and utils here
import './<%= componentName %>.css';

class <%= componentName %>Component extends React.PureComponent {
  state = {
    // todo: add your state here
  }

  render() {
    return (
      <h1><%= componentName %></h1>
    );
  }
}

<%= componentName %>Component.propTypes = {
  // todo: add propTypes
};

export default <%= componentName %>Component;
