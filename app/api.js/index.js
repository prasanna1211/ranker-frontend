const baseDomain = 'http://localhost:3000';

const bindBaseUrl = (baseUrl, api) => (`${baseUrl}${api}`);

export const getDomains = bindBaseUrl('/api/domains/');
