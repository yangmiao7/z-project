import React from 'react'
import { Menu, Icon } from 'antd'
import './Sidebar.less'
import { ClickParam } from 'antd/es/menu'
const { SubMenu } = Menu

export interface SidebarProps {
    collapsed: boolean;
}

export default function Sidebar (props: SidebarProps): React.ReactElement {
  const handleClickMenuItem = (payload: ClickParam): void => {
    console.log(payload)
  }

  return (
    <aside className='layout-sidebar fixed'>
      <div className='layout-sidebar-logo'>
        logo
      </div>

      <Menu
        defaultSelectedKeys={['1']}
        mode='inline'
        theme='dark'
        inlineCollapsed={props.collapsed}
        onClick={handleClickMenuItem}
      >
        <Menu.Item key='1'>
          <Icon type='home' />
          <span>首页</span>
        </Menu.Item>

        <SubMenu
          key='sub1'
          title={
            <span>
              <Icon type='setting' />
              <span>系统管理</span>
            </span>
          }
        >
          <Menu.Item key='5'>组织架构</Menu.Item>
          <Menu.Item key='6'>员工管理</Menu.Item>
          <Menu.Item key='7'>功能权限</Menu.Item>
        </SubMenu>
      </Menu>
    </aside>
  )
}
