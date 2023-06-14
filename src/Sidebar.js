import React from 'react'
import SiderbarOption from './SiderbarOption'
import './Sidebar.css'

function Sidebar() {
  return (
    <div className='sidebar'>
      <h6 className='feedHeader'>Feeds</h6>
      <SiderbarOption className="sidebarOption"text={"Home"}/>
      <SiderbarOption className="sidebarOption"text={"Popular"}/>
      <h6 className='topicsHeader'>Topics</h6>
      <SiderbarOption className="sidebarOption2"text={"Gaming"}/>
      <SiderbarOption className="sidebarOption2"text={"Sports"}/>
      <SiderbarOption className="sidebarOption2"text={'Business, Economics'}/>
      <SiderbarOption className="sidebarOption2"text={'Television'}/>
      <SiderbarOption className="sidebarOption2"text={'..More Topics'}/>
      <p className='pSidebar'>Create an account to follow your favorite communities and start taking part in conversations.</p>
      <button className='sidebarButton'>Join Reddit</button>
    </div>
  )
}

export default Sidebar
