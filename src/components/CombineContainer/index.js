import React, {Component} from 'react'
import AddRecipient from '../AddRecipientComponent'
import Header from '../HeaderComponent'
import Panel from '../PanelComponent'
import DataTable from "../DataTableComponent/index";

export default class CombineContainer extends Component {
  render() {
    return (
      <div>
        <Header />
        <AddRecipient />
        <Panel />
        <DataTable />
      </div>
    )
  }
}