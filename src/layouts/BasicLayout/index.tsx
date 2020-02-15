import React, { FunctionComponent, useState } from 'react'
import './index.less'
import {
  Route,
  Switch,
  Redirect
  // withRouter,
} from 'react-router-dom'
import Sidebar from './Sidebar'
import Navbar from './Navbar'
import Home from '../../pages/Home'
import { LayoutContextProvider } from './LayoutContext'
import SystemEmployee from '../../pages/SystemEmployee'
import SystemOrganizational from '../../pages/SystemOrganizational'

const Layout: FunctionComponent = () => {
  const [collapsed, setCollapsed] = useState(true)

  const changeCollapsed = (): void => {
    setCollapsed(!collapsed)
  }

  return (
    <LayoutContextProvider value={{ collapsed, dispatchCollapsed: changeCollapsed }}>
      <section className='basic-layout'>
        <Sidebar collapsed={false} />

        <section className='layout'>
          <Navbar onCollapse={setCollapsed} />

          <div className='layout-content'>
            <Switch>
              <Route path='/' exact render={() => <Redirect to='/home' />} />

              <Route path='/home' component={Home} />

              {/* 系统管理页面 */}
              <Route path='/system/organizational' component={SystemOrganizational} />
              <Route path='/system/employee' component={SystemEmployee} />
            </Switch>
          </div>
        </section>
      </section>
    </LayoutContextProvider>
  )
}

export default Layout
