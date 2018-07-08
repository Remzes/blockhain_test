import React, {Component} from 'react'
import {connect} from 'react-redux'
import {loadAllUsers} from "../../AC/index"
import TableHead from './TableHeadComponent'
import TableBody from './TableBodyComponent'
import Loader from '../Loader'

const CLASS_NAME = 'data-table-container'
class DataTable extends Component {
  componentDidMount() {
    const {users} = this.props

    if (!users.pending && !users.fulfilled) {
      this.props.loadAllUsers()
    }
  }

  render() {
    const {pending, values, error} = this.props.users
    if (pending) return <Loader />
    return (
      <section className={CLASS_NAME}>
        <table className={`${CLASS_NAME}__table`}>
          <TableHead />
          <TableBody users={values}/>
        </table>
      </section>
    )
  }
}

export default connect(({users}) => ({users}), {loadAllUsers})(DataTable)