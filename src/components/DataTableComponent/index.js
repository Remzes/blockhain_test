import React, {Component} from 'react'
import TableHead from './TableHeadComponent'
import TableBody from './TableBodyComponent'

const USERS = [
  {
    id: 1,
    email: 'doe@gmail.com',
    name: 'John Doe',
    status: 'unsent'
  },
  {
    id: 2,
    email: 'john@gmail.com',
    name: 'Anton Chekhov',
    status: 'unsent'
  }
];

const CLASS_NAME = 'data-table-container'
export default class DataTable extends Component {
  render() {
    return (
      <section className={CLASS_NAME}>
        <table className={`${CLASS_NAME}__table`}>
          <TableHead />
          <TableBody users={USERS}/>
        </table>
      </section>
    )
  }
}