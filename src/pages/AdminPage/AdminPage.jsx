import { Menu } from 'antd'
import React, { useState } from 'react'
import { getItem } from '../../utils';
import { UserOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons'
import HeaderComponent from '../../components/HeaderCompoent/HeaderComponent';
import AdminUser from '../../components/AdminUser/AdminUser';
import AdminProduct from '../../components/AdminProduct/AdminProduct';

const AdminPage = () => {
  const items = [
    getItem('Người dùng', 'user', <UserOutlined />),
    getItem('Sản phẩm', 'product', <AppstoreOutlined />)
  ];
  const renderPage = (key) => {
    switch (key) {
      case 'user':
        return (
          <AdminUser/>
        )
        case 'product':
        return (
          <AdminProduct/>
        )
      default:
        return <></>
    }
  }
  const [keySelected, setKeySelected] = useState('')

  const handleOnCLick = ({ key }) => {
    setKeySelected(key)
  }
  return (
    <>
      <HeaderComponent isHiddenSearch='false' isHiddenCart='false'/>
      <div style={{ display: 'flex' }}>
        <Menu
          mode="inline"
          style={{
            width: 256,
            boxShadow: '1px 1px 2px #ccc',
          }}
          items={items}
          onClick={handleOnCLick}
        />
         <div style={{ flex: 1, padding: '15px'}}>
          {renderPage(keySelected)}
        </div>
      </div>
    </>
  )
}

export default AdminPage