import React from 'react';

class CompanyRankDisplay extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.initialFetch();
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
