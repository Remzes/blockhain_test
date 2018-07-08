import React from 'react'
import HTMLLinkTagDecorator from '../../decorators/HTMLLinkTagDecorator'

const Panel = () => {
  const CLASS_NAME = 'panel-container'
  return (
    <section className={CLASS_NAME}>
      <section className={`${CLASS_NAME}__inner`}>
        <HTMLLinkTagDecorator
          text="Show all"
          className={`${CLASS_NAME}__tab`}
        />
        <HTMLLinkTagDecorator
          text="Show sent"
          className={`${CLASS_NAME}__tab`}
        />
        <HTMLLinkTagDecorator
          text="Show unsent"
          className={`${CLASS_NAME}__tab`}
        />
        <HTMLLinkTagDecorator
          text="Delete selected recipients"
          className={`${CLASS_NAME}__tab`}
        />
      </section>
    </section>
  )
}

export default Panel