import React from 'react'

const ButtonDecorator = ({text, addClassName}) => {
  const CLASS_NAME=`${addClassName}__button`
  return (
    <button className={CLASS_NAME}>
      {text}
    </button>
  )
}

export default ButtonDecorator