
/**
 * Define Routes here
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Route, BrowserRouter as Router } from 'react-router-dom';



/*
 * A Route can have one of the three below
 * a. Component - Only the first match renders
 * b. render() - Only the first match renders
 * c. Children - Always be rendered which are matching.
 */

const Home = () => (
  <div>
    Home
  </div>
);

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Route path="/home" component={Home} />
        </div>
      </Router>
    );
  }
}

Routes.propTypes = {
  token: PropTypes.string,
};

Routes.defaultProps = {
  token: undefined,
};

export default Routes;
