import React from 'react'

const HTMLLinkTagDecorator = ({text, addClassName}) => {
  const CLASS_NAME=`${addClassName}__tab`
  return (
    <a className={CLASS_NAME}>
      {text}
    </a>
  )
}

export default HTMLLinkTagDecorator