import moment from 'moment';

const baseDomain = 'http://ec2-18-220-113-251.us-east-2.compute.amazonaws.com:8080';

const bindBaseUrl = (baseUrl, api) => (`${baseUrl}${api}`);

export const getDomains = () => bindBaseUrl(baseDomain, '/api/domains/');

export const getRanks = ({ domain, company, startDate, numberOfRecords, gapBetweenRecords, searchEngine }) => {

  const domainQuery = `domain=${domain}`;
  const searchEngineQuery = `searchEngine=${searchEngine}`;
  const companyQuery = `company=${company}`;

  const rangeEndDate = moment(startDate, 'YYYY-MM-DD');
  const rangeStartDate = rangeEndDate.clone().subtract({ days: (numberOfRecords - 1) * gapBetweenRecords });

  const startDateQuery =`startDate=${rangeStartDate.format('YYYY-MM-DD')}`;
  const endDateQuery =`endDate=${rangeEndDate.format('YYYY-MM-DD')}`;

  const api = `/api/rank?${domainQuery}&${startDateQuery}&${endDateQuery}&${searchEngineQuery}&${companyQuery}`;
  return bindBaseUrl(baseDomain, api);
};
