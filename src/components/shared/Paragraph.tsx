import React from 'react'

interface ParagraphProps {
    className?: string
    children: React.ReactNode;
}

export const Paragraph = ({className = "", children}: ParagraphProps) => {
  return (
    <p className={`text-heading-3 md:text-lg ${className}`}>{children}</p>
  )
}
