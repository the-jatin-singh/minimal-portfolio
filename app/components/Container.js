import React from 'react'

const Container = ({children, className, id=""}) => {
  return (
    <section id={id} className={`lg:ml-[400px] max-w-[700px] md:ml-[100px] p-6 lg:p-0 relative ${className}`} >
        {children}
    </section>
  )
}

export default Container