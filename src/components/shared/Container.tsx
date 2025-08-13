import React from 'react'

interface ContainerProps {
    className?: string
    children: React.ReactNode;
}

export const Container = ({className = "", children}: ContainerProps) => {
  return (
    <div className={`mx-auto max-w-7xl w-full px-5 sm:px-8 md:px-14 lg:px-5 ${className}`}>
        {children}
    </div>
  )
}
