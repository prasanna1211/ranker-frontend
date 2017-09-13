import { Map, List, fromJS, Iterable } from 'immutable';
import { createSelector } from 'reselect';

import times from 'lodash/times';

import moment from 'moment';

const getGap = state => state.getIn(['apiData', 'companyData', 'gapBetweenRecords']);
const getNumberOfRecords = state => state.getIn(['apiData', 'companyData', 'numberOfRecords']);
const getStartDate = state => state.getIn(['apiData', 'companyData', 'startDate']);
const getCompanyRanksData = state => state.getIn(['apiData', 'companyData', 'companyRanksData']);

const getEmptyRankTable = (keys, startDate, daysCount, gap) => {
  console.log(keys, startDate, daysCount, gap);
  const startDateMoment = moment(startDate, 'YYYY-MM-DD');
  let count = 0;
  let result = Map();
  const keywordGroup = keys
    .toSeq()
    .reduce((accumulator, data) => {
      return accumulator
        .set(data, '-')
    }, Map());
  times(daysCount, () => {
    const currentDate = startDateMoment.clone().subtract({ days: gap * count }).format('YYYY-MM-DD');
    result = result.set(currentDate, keywordGroup)
    count += 1;
  });
  return result;
}

export const getRankData = createSelector([getGap, getNumberOfRecords, getStartDate, getCompanyRanksData], (gap, daysCount, startDate, rankData) => {
  if (Iterable.isIterable(rankData)) {
    const groupedData = rankData.groupBy(data => data.get('keyword'));
    const keys = groupedData
      .toSeq()
      .reduce((accumulator, data, key) => {
        return accumulator.push(key);
      }, List())

    const emptyData = getEmptyRankTable(keys, startDate, daysCount, gap);

    const result = rankData
      .toSeq()
      .reduce((accumulator, data) => {
        const currentDate = moment(data.get('logDate')).format('YYYY-MM-DD');
        return accumulator.setIn([currentDate, data.get('keyword')], data.get('rank'));
      }, emptyData)
      .map((value, key) => {
        return fromJS({
          date: key,
          keywords: value
          .toSeq()
          .map((rank, keyword) => ({
            keyword,
            rank,
          }))
          .toList(),
        });
      });
    console.log('result', result.toList());
    return result;
  }
});