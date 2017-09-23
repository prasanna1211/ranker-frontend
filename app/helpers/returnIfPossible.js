import isUndefined from 'lodash/isUndefined';
import isNull from 'lodash/isNull';

export default (value) => (!isUndefined(value) && !isNull(value) ? true : false);
