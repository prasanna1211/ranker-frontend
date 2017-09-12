import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import CompanyRankDisplay from './components/index.jsx';

import {
  initialFetchRequest,
  fetchRanksForCompanies,
} from './actionCreator/index';

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
  initialFetch: bindActionCreators(initialFetchRequest, dispatch),
  fetchRanks: bindActionCreators(fetchRanksForCompanies, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(CompanyRankDisplay);
