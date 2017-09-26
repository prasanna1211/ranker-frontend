import React from 'react';
import moment from 'moment';

import map from 'lodash/map';
import isEmpty from 'lodash/isEmpty';

import { Card, Transition, Divider, Loader, Message } from 'semantic-ui-react';

import returnIfPossible from '../../../helpers/returnIfPossible';
import Table from '../../common/presentational/Table';
import CountDownTimer from '../../../helpers/countDownTimer';
import { getUpdateOccurTime } from '../../../helpers/getUpdateOccurTime';

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
    const currentDate = moment().startOf('day').format('YYYY-MM-DD');
    this.toggleExpansion(id);
    this.props.fetchRanks('Codebrahma', domain, currentDate, 15, 1, 'https://www.google.co.in');
  }

  onCountDownFinished = () => {
    window.location.reload();
  }

  renderDomains(){
    let {
      rankData,
      domainData,
      fetchStatus: {
        isRanksFetching,
        isWholePageFetching,
      },
    } = this.props;
    let { expandedCardID } = this.state;
    console.log('rank data', isWholePageFetching, isRanksFetching, rankData)
    return map(this.props.domainData.toJS(), ({id, domain}, index) => {
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
                (isRanksFetching) ? (
                  <Loader active inline='centered' />
                ) : (
                  <Table
                    data={rankData ? rankData.toJS() : []}
                    width={50}
                    padding={20}
                  />
                )
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
      fetchStatus: {
        isRanksFetching,
        isWholePageFetching,
      },
    } = this.props;

    return (
      <div>
        {
          (isWholePageFetching) ? (
            <Loader active={true} size='large'>Loading</Loader>
          ) : (
            <div>
              <Message info>
                <Message.Header>
                  Updates for today will be completed in &nbsp;
                  { <CountDownTimer
                      targetDate={getUpdateOccurTime()}
                      timeSeparator={':'}
                      leadingZero
                      onFinished={this.onCountDownFinished}
                  /> }
                </Message.Header>
              </Message>
              { this.renderDomains() }
            </div>
          )
        }
      </div>
    );
  }
}

export default CompanyRankDisplay;
