import React from 'react';

import map from 'lodash/map';
import capitalize from 'lodash/capitalize';

import styles from './styles.scss';

const Table = ({ data }) => {
  const renderRow = (row) => {
    return (
      <td className="cell-value" key={Math.random()}>
        {row[2] != -1 ? row[2] : 'N/A'}
      </td>
    )
  }

  return (
    <table className={styles['table']}>
      <tbody>
        {
          map(data, (value) => {
            return (
              <tr className="row">
                <td className="row-title">{capitalize(value[0][0])}</td>
                <td className="row-value">{map(value, eachDateData => renderRow(eachDateData))}</td>
              </tr>
            )
          })
        }
      </tbody>
    </table>
  )
}

export default Table;
