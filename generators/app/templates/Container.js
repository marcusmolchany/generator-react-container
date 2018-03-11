import React from 'react';
import propTypes from 'prop-types';

// todo: import actions, constants, and selectors here
import <%= componentName %>Component from './<%= componentName %>Component';

const <%= componentName %>Fn = ({ }) => (
  <<%= componentName %> />
);

<%= componentName %>Fn.propTypes = {
  // todo: add propTypes
};

const mapStateToProps = state => ({
  // todo: use selectors here
});

const mapDispatchToProps = dispatch => ({
  // todo: use bindActionCreators here
});

export default connect(mapStateToProps, mapDispatchToProps)(<%= componentName %>Fn);
