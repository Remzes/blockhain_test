import React from 'react'
import ButtonDecorator from '../../../decorators/ButtonDecorator'

const Button = ({addClassName}) => {
  const CLASS_NAME = `${addClassName}__button-container`
  return (
    <section className={CLASS_NAME}>
      <ButtonDecorator
        text="Add email"
        className={`${CLASS_NAME}__button`}
      />
    </section>
  )
}

export default Button