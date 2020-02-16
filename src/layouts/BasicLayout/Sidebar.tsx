import React, { useEffect, useState } from 'react'
import { Menu, Icon } from 'antd'
import './Sidebar.less'
import { ClickParam } from 'antd/es/menu'
import { useHistory, useLocation } from 'react-router-dom'

const { SubMenu } = Menu

export interface SidebarProps {
  collapsed: boolean;
}

export default function Sidebar (props: SidebarProps): React.ReactElement {
  const history = useHistory()
  const location = useLocation()
  const [openKeys, setOpenKeys] = useState<string[]>([])

  useEffect(() => {
    const pathnameList = location.pathname.split('/')
    openKeys.length <= 0 && setOpenKeys([`/${pathnameList[1]}`])
  }, [location, openKeys.length])

  const handleClickMenuItem = (payload: ClickParam): void => {
    history.push(payload.key)
  }

  const handleSubMenuOpen = (openKeys: string[]): void => {
    setOpenKeys(openKeys)
  }

  return (
    <aside className='layout-sidebar fixed'>
      <div className='layout-sidebar-logo'>
        logo
      </div>

      <Menu
        defaultSelectedKeys={[location.pathname]}
        openKeys={openKeys}
        mode='inline'
        theme='dark'
        inlineCollapsed={props.collapsed}
        onClick={handleClickMenuItem}
        onOpenChange={handleSubMenuOpen}
      >
        <Menu.Item key='/home'>
          <Icon type='home' />
          <span>首页</span>
        </Menu.Item>

        <SubMenu
          key='/system'
          title={
            <span>
              <Icon type='setting' />
              <span>系统管理</span>
            </span>
          }
        >
          <Menu.Item key='/system/organizational'>组织架构</Menu.Item>
          <Menu.Item key='/system/employee'>员工管理</Menu.Item>
          <Menu.Item key='/system/functionality'>功能权限</Menu.Item>
        </SubMenu>
      </Menu>
    </aside>
  )
}
