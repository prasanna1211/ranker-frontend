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
    this.props.fetchRanks('Codebrahma', 'React', '2017-09-13', 15, 1, 'https://www.google.co.in');
  }

  //Logic to expand one card at a time.
  toggleExpansion(id){
    let { expandedCardID } = this.state;
    let newCardID = (expandedCardID === id) ? null : id; 
    this.setState({
      expandedCardID: newCardID
    })
  }

  renderDomains(){  
    return this.props.domainData.toJS().map(({domain}, index) => {
      return (
        <div key={index}>
          <Card
            fluid color='teal'
            header={domain}
            onClick={() => this.toggleExpansion(index)}
          />
          <Transition
            visible={this.state.expandedCardID === index}
            animation='fade down' duration={300}
          >
            <Message
              info
              header={"Table need to render here"}
              content={"It is just markup It is just markupIt is just markupIt is just markupIt is just markupIt is just markupIt is just markupIt is just markupIt is just markupIt is just markupIt is just markupIt is just markupIt is just markupIt is just markupIt is just markup"}
            />
          </Transition>
          <Divider hidden />
        </div>
      );
    })
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
