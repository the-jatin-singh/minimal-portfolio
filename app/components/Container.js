import React from 'react'

const Container = ({children, className, id=""}) => {
  return (
    <section id={id} className={`lg:mx-auto max-w-[700px] p-6 lg:p-0 relative ${className}`} >
        {children}
    </section>
  )
}

export default Container