import React from 'react';
import _ from 'lodash';
import { Card, Transition, Divider, Message } from 'semantic-ui-react';

class CompanyRankDisplay extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      expandedCardID: null
    }
  }

  componentDidMount() {
    this.props.initialFetch();
    this.props.fetchRanks('Codebrahma', 'React', '2017-09-10', 15, 1, 'https://www.google.co.in');
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
    return this.props.domainData.toJS().map((domain, index) => {
      return (
        <div>
          <Card
            fluid color='teal'
            key={index}
            header={domain.domain}
            onClick={() => this.toggleExpansion(index)}
          />
          <Transition visible={this.state.expandedCardID === index} animation='fade down' duration={300}>
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
    let { isFetched } = this.props;

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
