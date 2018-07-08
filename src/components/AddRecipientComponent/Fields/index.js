import React from 'react'
import FieldDecorator from '../../../decorators/FieldDecorator'

const Fields = ({addClassName}) => {
  const CLASS_NAME = `${addClassName}__fields-container`
  return (
    <section className={CLASS_NAME}>
      <FieldDecorator
        type="email"
        placeholder="johndoe@gmail.com"
        label="Email"
        addClassName={CLASS_NAME}
      />
      <FieldDecorator
        type="text"
        placeholder="John Doe"
        label="Name"
        addClassName={CLASS_NAME}
      />
    </section>
  )
}

export default Fields