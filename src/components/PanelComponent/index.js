import React from 'react'
import {connect} from 'react-redux'
import {toggleTabs, deleteSelected} from "../../AC/index"
import {panelTabNames} from "./constants"
import HTMLLinkTagDecorator from '../../decorators/HTMLLinkTagDecorator'

const Panel = (props) => {
  const CLASS_NAME = 'panel-container'
  console.log(props.selectedUsers)
  return (
    <section className={CLASS_NAME}>
      <section className={`${CLASS_NAME}__inner`}>
        {
          panelTabNames.map(item => {
            return (
              <HTMLLinkTagDecorator
                key={item.id}
                text={item.name}
                className={`${CLASS_NAME}__tab`}
                onClick={
                  item.abbr !== 'D'
                    ? props.toggleTabs.bind(null, item.type)
                    : props.deleteSelected.bind(null, props.selectedUsers)
                }
              />
            )
          })
        }
      </section>
    </section>
  )
}

export default connect(({selectedUsers}) => ({selectedUsers: selectedUsers.selectedUsers}), {toggleTabs, deleteSelected})(Panel)