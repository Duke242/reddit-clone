import React from 'react'
import './SidebarOption.css'

function SiderbarOption({Icon, text}) {
  return (
    <div className='sidebarOptionDiv'>
      <span>{Icon}</span> <h3 className='sidebarOptionHeader'>{text}</h3>
    </div>
  )
}

export default SiderbarOption
