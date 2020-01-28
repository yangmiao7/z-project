import React, {FunctionComponent, Dispatch, createContext, useState} from "react";
import './index.less'
import {
  Route,
  Switch,
  // Redirect,
  // withRouter,
} from 'react-router-dom';
// import {Row, Col, Menu, Icon, Button} from 'antd'
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import Home from '../../pages/Home'
import {LayoutContextProvider} from "./LayoutContext";
// import SystemEmployee from '../../pages/SystemEmployee'
// import SystemOrganization from '../../pages/SystemOrganization'

// const routes = [
//   {
//     path: '/home',
//     component: Home,
//     title: '首页'
//   },
//   {
//     path: '/manager',
//     routes: [
//       {
//         path: '/employee',
//         title: '员工管理',
//         component: SystemEmployee
//       },
//       {
//         path: '/organization',
//         title: '组织架构',
//         component: SystemOrganization
//       }
//     ]
//   }
// ]

const Layout: FunctionComponent = () => {
  const [collapsed, setCollapsed] = useState(true)

  const changeCollapsed = (): void => {
    debugger
    setCollapsed(!collapsed)
  }

  return (
    <LayoutContextProvider value={{collapsed, dispatchCollapsed: changeCollapsed }}>
      <section className='layout'>
        <Sidebar collapsed={false}/>

        <div className='layout-content'>
          <Navbar onCollapse={setCollapsed}/>

          <Switch>
            <Route path="/home" component={Home}/>
          </Switch>
        </div>
      </section>
    </LayoutContextProvider>
  )
}

export default Layout
