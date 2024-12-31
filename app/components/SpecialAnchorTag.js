import Link from 'next/link'
import React from 'react'

const SpecialAnchorTag = ({children, href="/", newTab=false, highlight=false}) => {
  return (
    <Link href={href} target={newTab ? "_blank" : "_self"} className={`${highlight && "bg-highlighter"} underline-animation text-darkTxt hover:text-highlightedTxt`}>
      {children}
    </Link>
  )
}

export default SpecialAnchorTag