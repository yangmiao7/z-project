import React, { ReactElement, MouseEventHandler } from 'react'
import { Icon, Dropdown } from 'antd'
import './index.less'

interface TreeTitleProps {
  title: string;
  onDelete?: () => void;
  onEdit?: () => void;
  menuList?: ReactElement;
  icon?: ReactElement;
}

const TreeTitle = (props: TreeTitleProps): React.ReactElement => {
  const handleDelete: MouseEventHandler = e => {
    e.preventDefault()
    props.onDelete && props.onDelete()
  }

  const handleEdit: MouseEventHandler = e => {
    e.preventDefault()
    props.onEdit && props.onEdit()
  }

  return (
    <div className='tree-title'>

      <div className='tree-title-text'>
        {props.icon}
        {props.title}
      </div>

      <div className='tree-title-action' onClick={(e): void => e.stopPropagation()}>
        <Dropdown overlay={props.menuList} trigger={['click']}>
          <a href='javascript: void(0)'>
            <Icon type='plus' />
          </a>
        </Dropdown>

        <a href='javascript: void(0)' onClick={handleEdit}>
          <Icon type='edit' />
        </a>

        <a href='javascript: void(0)' onClick={handleDelete}>
          <Icon type='delete' />
        </a>
      </div>
    </div>
  )
}

export default TreeTitle
