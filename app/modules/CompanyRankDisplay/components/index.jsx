import React from 'react';

import returnIfPossible from '../../../helpers/returnIfPossible';
import Table from '../../common/presentational/Table';

class CompanyRankDisplay extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.initialFetch();
    this.props.fetchRanks('Codebrahma', 'React', '2017-09-13', 15, 1, 'https://www.google.co.in');
  }

  render() {
    const {
      rankData
    } = this.props;
    return (
      <div>
        <Table
          data={returnIfPossible(rankData) ? rankData.toJS() : {}}
          width={50}
          padding={20}
        />
      </div>
    );
  }
}

export default CompanyRankDisplay;
