import React from 'react'

export const PageLayoutWrapper = ({children}:{children:React.ReactNode}) => {
  return (
    <div style={{padding:'20px',background:'black',height:'100vh',}}>{children}</div>
  )
}
