import React, {Component} from 'react'
import {connect} from 'react-redux'
import {loadAllUsers} from "../../AC/index"
import TableHead from './TableHeadComponent'
import TableBody from './TableBodyComponent'
import Loader from '../Loader'
import {convertMapToArray} from "../../helpers/convertMapToArray"
import {selectedUsersSelector, usersPending, usersFulfilled, usersError} from "../../selectors/index"

const CLASS_NAME = 'data-table-container'
class DataTable extends Component {
  componentDidMount() {
    const {pending, fulfilled} = this.props

    if (!pending && !fulfilled) {
      this.props.loadAllUsers()
    }
  }

  render() {
    const {pending, values, error} = this.props
    if (pending) return <Loader />
    if (error) return <div>We have an error my friend</div>
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

export default connect((state) => ({
  values: selectedUsersSelector(state),
  pending: usersPending(state),
  error: usersError(state),
  fulfilled: usersFulfilled(state)
}), {loadAllUsers})(DataTable)