const baseDomain = 'http://localhost:1212';

const bindBaseUrl = (baseUrl, api) => (`${baseUrl}${api}`);

export const getDomains = () => bindBaseUrl(baseDomain, '/api/domains/');
