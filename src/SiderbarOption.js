import React from 'react'
import './SidebarOption.css'

function SiderbarOption({Icon, text}) {
  return (
    <div>
      <span>{Icon}</span> <h3>{text}</h3>
    </div>
  )
}

export default SiderbarOption
