import React from 'react'

const FieldDecorator = ({type, placeholder, label, addClassName}) => {
  const id = `${label}_input`;
  const CLASS_NAME = `${addClassName}__input-container`
  return (
    <section className={CLASS_NAME}>
      <label htmlFor={id}>{label}</label>
      <input type={type} id={id} placeholder={placeholder}/>
    </section>
  )
}

export default FieldDecorator