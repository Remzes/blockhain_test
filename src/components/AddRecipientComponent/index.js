import React, {Component} from 'react'
import Fields from './Fields'
import Button from './Button'

export default class AddRecipient extends Component {

  render() {
    const CLASS_NAME="add-recipient-container"

    return (
      <section className={CLASS_NAME}>
        <Fields addClassName={CLASS_NAME} />
        <Button addClassName={CLASS_NAME} />
      </section>
    )
  }
}