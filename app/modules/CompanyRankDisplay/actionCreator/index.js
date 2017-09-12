export const initialFetchRequest = () => ({
  type: 'COMPANY_INITIAL_FETCH',
});

export const fetchRanksForCompanies = (company, domain, startDate, numberOfRecords, gapBetweenRecords, searchEngine) => ({
  type: 'COMPANY_FETCH_RANKS',
  payload: {
    company,
    domain,
    startDate,
    numberOfRecords,
    gapBetweenRecords,
    searchEngine,
  },
});
