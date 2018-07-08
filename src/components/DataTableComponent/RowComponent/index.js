import React from 'react'
import Column from '../ColumnComponent'

const Row = ({user}) => {
  return (
    <tr>
      <td>
        Select
      </td>
      <Column text={user.email}/>
      <Column text={user.name}/>
      <Column text={user.status}/>
      <td>
        Click Func
      </td>
    </tr>
  )
}

export default Row