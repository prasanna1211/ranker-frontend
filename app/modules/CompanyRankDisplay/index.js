import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import CompanyRankDisplay from './components/index.jsx';

import {
  initialFetchRequest,
  fetchRanksForCompanies,
} from './actionCreator/index';

import {
  getRankData,
} from './selectors/index';

const mapStateToProps = state => {
	return {
	  rankData: getRankData(state),
	  domainData: state.getIn(['apiData', 'commonData', 'domainData']),
	  isFetched: state.getIn(['apiData', 'commonData', 'isFetched'])
	}
};

const mapDispatchToProps = dispatch => ({
  initialFetch: bindActionCreators(initialFetchRequest, dispatch),
  fetchRanks: bindActionCreators(fetchRanksForCompanies, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(CompanyRankDisplay);
