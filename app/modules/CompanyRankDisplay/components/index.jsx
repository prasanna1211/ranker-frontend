import React from 'react';

class CompanyRankDisplay extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.initialFetch();
    this.props.fetchRanks('Codebrahma', 'React', '2017-09-10', 15, 1, 'www.google.co.in');
  }

  render() {
    return (
      <div>
        Company Rank Display
      </div>
    );
  }
}

export default CompanyRankDisplay;
