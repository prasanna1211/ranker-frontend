import React from 'react';
import { Card, Transition, Divider, Message } from 'semantic-ui-react';

import returnIfPossible from '../../../helpers/returnIfPossible';
import Table from '../../common/presentational/Table';

class CompanyRankDisplay extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      expandedCardID: null
    }
  }

  componentDidMount() {
    this.props.initialFetch();
  }

  //Logic to expand one card at a time.
  toggleExpansion(id){
    let { expandedCardID } = this.state;
    let newCardID = (expandedCardID === id) ? null : id; 
    this.setState({
      expandedCardID: newCardID
    })
  }

  handleCardClick(id, domain){
    this.toggleExpansion(id);
    this.props.fetchRanks('Codebrahma', domain, '2017-09-13', 15, 1, 'https://www.google.co.in');
  }

  renderDomains(){
    let { rankData } = this.props;
    let { expandedCardID } = this.state;

    return this.props.domainData.toJS().map(({id, domain}, index) => {
      return (
        <div key={index}>
          <Card
            fluid color='teal'
            header={domain}
            onClick={() => this.handleCardClick(id, domain)}
          />
          <Transition
            visible={expandedCardID === id}
            animation='fade down'
            duration={300}
          >
            <div>
              <Table
                data={returnIfPossible(rankData) ? rankData.toJS() : {}}
                width={50}
                padding={20}
              />
            </div>
          </Transition>
          <Divider hidden />
        </div>
      );
    })
  }

  render() {
    const {
      isFetched
    } = this.props;

    return (
      <div>
        {
          isFetched ? this.renderDomains() : ""
        }
      </div>
    );
  }
}

export default CompanyRankDisplay;
