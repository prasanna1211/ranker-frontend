import React from 'react';

import map from 'lodash/map';

const Table = ({ data }) => {
  const renderRow = (row) => {
    return (
      <td key={Math.random()}>
        {row[2]}
      </td>
    )
  }

  return (
    <table>
      <tbody>
        {
          map(data, (value, key) => {
            return (
              <tr>
                <td>{key}</td>
                <td>{map(value, eachDateData => renderRow(eachDateData))}</td>
              </tr>
            )
          })
        }
      </tbody>
    </table>
  )
}

export default Table;
