import React from 'react';
import moment from 'moment';

import map from 'lodash/map';
import capitalize from 'lodash/capitalize';

import styles from './styles.scss';

const Table = ({ data, width, padding }) => {
  const renderRow = (row) => {
    return (
      <td className="cell-value" key={Math.random()}>
        {row[2] != -1 ? row[2] : 'N/A'}
      </td>
    )
  }

  return (
    <table
      className={styles['table']}
      style={{ width: `${width}%`, fontSize: `${width/100}rem` }}
    >
      <thead>
        <td></td>
        {
          map(data[0], value => (
            <td key={Math.random()}>
              {moment(value[1]).format('DD/MM ddd')}
            </td>
          ))
        }
      </thead>
      <tbody>
        {
          map(data, (value) => {
            return (
              <tr key={Math.random()} className="row">
                <td className="row-title">{capitalize(value[0][0])}</td>
                {map(value, eachDateData => renderRow(eachDateData))}
              </tr>
            )
          })
        }
      </tbody>
    </table>
  )
}

export default Table;
