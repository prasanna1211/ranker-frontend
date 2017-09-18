
/**
 * Define Routes here
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import CompanyRankDisplay from './modules/CompanyRankDisplay';

/*
 * A Route can have one of the three below
 * a. Component - Only the first match renders
 * b. render() - Only the first match renders
 * c. Children - Always be rendered which are matching.
 */

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Route component={CompanyRankDisplay} />
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
