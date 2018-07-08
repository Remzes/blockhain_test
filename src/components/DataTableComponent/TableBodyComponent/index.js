import React from 'react'
import Row from '../RowComponent'

const TableBody = ({users}) => {
  return (
    <tbody>
    {
      users.map(user => {
        return (
          <Row key={user.id} user={user} />
        )
      })
    }
    </tbody>
  )
}

export default TableBody