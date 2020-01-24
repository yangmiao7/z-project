import React, {FunctionComponent} from "react";
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

// import SystemEmployee from '../../pages/SystemEmployee'
// import SystemOrganization from '../../pages/SystemOrganization'
import Home from '../../pages/Home'

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
  function handleCollapse(collapsed: boolean): void {
    console.log(collapsed)
  }

  return (
    <section className='layout'>
      <Sidebar collapsed={false}/>

      <div className='layout-content'>
        <Navbar onCollapse={handleCollapse}/>

        <Switch>
          <Route path="/home" component={Home}/>
        </Switch>
      </div>
    </section>
  )
}

export default Layout
