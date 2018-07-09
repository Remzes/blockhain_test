import React from 'react'

const HTMLLinkTagDecorator = ({text, addClassName, onClick}) => {
  const CLASS_NAME=`${addClassName}__tab`
  return (
    <a className={CLASS_NAME} onClick={onClick}>
      {text}
    </a>
  )
}

export default HTMLLinkTagDecorator