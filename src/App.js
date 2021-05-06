import React, { Fragment } from 'react';
import PropTypes from 'prop-types'
import './App.css';

function App( { greeting, subtitle } ) {
  
  const greetingComponent = `Hello World`;
  console.log(greeting);
  
  return (
    <Fragment>
      <h1>{greeting}</h1>
      <h2>{greetingComponent}</h2>
      <h3>{subtitle}</h3>
    </Fragment>
  );
}

App.propTypes = {
  greeting: PropTypes.string.isRequired
}

App.defaultProps = {
  subtitle: 'Subtitle'
}

export default App;
