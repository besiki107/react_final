import React from 'react'

export default function EmptyState({ title, children }){
  return (
    <div className="empty">
      <h3>{title}</h3>
      <div>{children}</div>
    </div>
  )
}
