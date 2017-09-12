import { Map, List, fromJS, Iterable } from 'immutable';
import { createSelector } from 'reselect';

const getGap = state => state.getIn(['apiData', 'companyData', 'gapBetweenRecords']);
const getNumberOfRecords = state => state.getIn(['apiData', 'companyData', 'numberOfRecords']);
const getStartDate = state => state.getIn(['apiData', 'companyData', 'startDate']);
const getCompanyRanksData = state => state.getIn(['apiData', 'companyData', 'companyRanksData']);

const getEmptyRankTable = (keys, startDate, daysCount, gap) => {
  
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

    return {};
  }
});
