import React from 'react';

import returnIfPossible from '../../../helpers/returnIfPossible';
import Table from '../../common/presentational/Table';

class CompanyRankDisplay extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.initialFetch();
    this.props.fetchRanks('Codebrahma', 'React', '2017-09-10', 15, 1, 'https://www.google.co.in');
  }

  render() {
    const {
      rankData
    } = this.props;
    return (
      <div>
        <Table
          data={returnIfPossible(rankData) ? rankData.toJS() : {}}
        />
      </div>
    );
  }
}

export default CompanyRankDisplay;
