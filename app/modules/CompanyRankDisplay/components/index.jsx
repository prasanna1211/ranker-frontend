import React from 'react';

import { Card, Transition, Divider, Loader, Message } from 'semantic-ui-react';

import returnIfPossible from '../../../helpers/returnIfPossible';
import Table from '../../common/presentational/Table';
import CountDownTimer from '../../../helpers/countDownTimer';
import { getTomorrowDate } from '../../../helpers/getTomorrowDate';

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
    console.log('id', id, domain);
    this.toggleExpansion(id);
    this.props.fetchRanks('Codebrahma', domain, '2017-09-18', 15, 1, 'https://www.google.co.in');
  }

  onCountDownFinished = () => {
    window.location.reload();
  }

  renderDomains(){
    let { rankData } = this.props;
    let { expandedCardID } = this.state;
    console.log('expanded  card id', expandedCardID);

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
              {
                returnIfPossible(rankData) ?
                <Table
                  data={rankData.toJS()}
                  width={50}
                  padding={20}
                /> :
                <Loader active inline='centered' />
              }
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
          isFetched ?
          <div>
            <Message info>
              <Message.Header>
                Next update will be in&nbsp;
                <CountDownTimer
                  targetDate={getTomorrowDate()}
                  timeSeparator={':'}
                  leadingZero
                  onFinished={this.onCountDownFinished}
                />
              </Message.Header>
            </Message>

            { this.renderDomains() }
          </div> :
          <Loader active={true} size='large'>Loading</Loader>
        }
      </div>
    );
  }
}

export default CompanyRankDisplay;
