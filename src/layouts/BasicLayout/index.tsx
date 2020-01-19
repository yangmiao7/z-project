import {Row, Col, Menu, Icon, Button} from 'antd'
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import React from "react";
import './index.less'
import {
    Route,
    Switch,
    // Redirect,
    // withRouter,
} from 'react-router-dom';
import Home from '../../pages/Home'

export default function Layout() {
    function handleCollapse(collapsed: boolean) {
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
