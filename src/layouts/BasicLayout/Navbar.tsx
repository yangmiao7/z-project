import React, {ReactElement, useContext} from "react";
import {Icon} from "antd";
import './Navbar.less'
import LayoutContext from "./LayoutContext";

export interface NavbarProps {
    onCollapse?: (collapsed: boolean) => void;
}

export default function Navbar(props: NavbarProps): ReactElement {
  const {dispatchCollapsed, collapsed} = useContext(LayoutContext)

  return (
    <header className="layout-header fixed">
      <button className="header-trigger" onClick={dispatchCollapsed}>
        <Icon type={collapsed ? 'align-left' : 'align-right'}/>
      </button>
    </header>
  )
}
