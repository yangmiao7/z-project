import React, { ReactElement, useContext } from 'react'
import { Icon, Avatar, Dropdown, Menu } from 'antd'
import './Navbar.less'
import LayoutContext from './LayoutContext'

export interface NavbarProps {
  onCollapse?: (collapsed: boolean) => void;
}

export default function Navbar (props: NavbarProps): ReactElement {
  const { dispatchCollapsed, collapsed } = useContext(LayoutContext)

  const profileMenu = (
    <Menu>
      <Menu.Item>
        修改密码
      </Menu.Item>
      <Menu.Item>
        个人中心
      </Menu.Item>

      <Menu.Divider />

      <Menu.Item>
        退出登录
      </Menu.Item>
    </Menu>
  )

  return (
    <header className='layout-header fixed'>
      <button className='header-trigger' onClick={dispatchCollapsed}>
        <Icon type={collapsed ? 'align-left' : 'align-right'} />
      </button>

      <div className='header-right'>
        {/* 用户信息 */}
        <Dropdown overlay={profileMenu}>
          <div className='user-action user-info'>
            <Avatar icon='user' size='small' />

            <span>用户名</span>
          </div>
        </Dropdown>
      </div>
    </header>
  )
}
