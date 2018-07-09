import React from 'react'
import {connect} from 'react-redux'
import {selectUser} from "../../../AC/index"
import Column from '../ColumnComponent'
import HTMLLinkTagDecorator from "../../../decorators/HTMLLinkTagDecorator/index";

const Row = ({user, ...rest}) => {
  return (
    <tr>
      <td>
        <HTMLLinkTagDecorator
          text="Select"
          className="select-user"
          onClick={rest.selectUser.bind(null, user.id)}
        />
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

export default connect(null, {selectUser})(Row)