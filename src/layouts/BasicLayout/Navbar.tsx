import React, {useState} from "react";
import {Col, Row, Icon} from "antd";
import './Navbar.less'

export interface NavbarProps {
    onCollapse?: (collapsed: boolean) => void
}

export default function Navbar(props: NavbarProps) {
    const [collapsed, setCollapsed] = useState(true)

    function handleChangeTriggerState() {
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
