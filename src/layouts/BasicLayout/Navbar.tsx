import React, {ReactElement, useState} from "react";
import {Icon} from "antd";
import './Navbar.less'

export interface NavbarProps {
    onCollapse?: (collapsed: boolean) => void;
}

export default function Navbar(props: NavbarProps): ReactElement {
  const [collapsed, setCollapsed] = useState(true)

  function handleChangeTriggerState(): void {
    setCollapsed(!collapsed)

    if(props.onCollapse) props.onCollapse(collapsed)
  }

  return (
    <header className="layout-header fixed">
      <button className="header-trigger">
        <Icon type={collapsed ? 'align-left' : 'align-right'} onClick={handleChangeTriggerState}/>
      </button>
    </header>
  )
}
