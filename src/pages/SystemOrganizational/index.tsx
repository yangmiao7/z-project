import React, { ReactElement } from 'react'
import { Card, Input, Tree, Icon, Divider, Menu } from 'antd'
import IconFont from '../../components/IconFont'
import TreeTitle from './TreeTitle'
import './index.less'

const { TreeNode } = Tree

const SystemOrganization = (): ReactElement => {
  const companyMenuList = (
    <Menu>
      <Menu.Item>同级公司</Menu.Item>
      <Menu.Item>下级公司</Menu.Item>
      <Menu.Item>下级部门</Menu.Item>
    </Menu>
  )

  const departmentMenuList = (
    <Menu>
      <Menu.Item>同级部门</Menu.Item>
      <Menu.Item>下级部门</Menu.Item>
    </Menu>
  )

  return (
    <div>
      <Card style={{ width: 300 }}>
        <Input placeholder='搜索公司/部门' />

        <Divider />

        <Tree
          // showIcon
          blockNode
          defaultSelectedKeys={['0-0-0']}
          switcherIcon={<Icon type='down' />}
        >
          <TreeNode
            title={
              <TreeTitle
                icon={<IconFont type='iconfont-company' />}
                title='未来科技公司'
                menuList={companyMenuList}
              />
            }
            key='0-0'
          >
            <TreeNode
              title={
                <TreeTitle
                  icon={<IconFont type='iconfont-department' />}
                  title='财务部'
                  menuList={departmentMenuList}
                />
              }
              key='0-0-0'
            />
          </TreeNode>
        </Tree>
      </Card>
    </div>
  )
}

export default SystemOrganization
