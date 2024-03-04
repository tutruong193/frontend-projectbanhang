import React from 'react'
import { WrapperHeader } from './style'
import { Button } from 'antd'
import { PlusOutlined } from '@ant-design/icons'
import TableComponent from '../TableComponent/TableComponent'

const AdminUser = () => {
    return (
        <div>
            <WrapperHeader>Quản Lý Người Dùng</WrapperHeader>
            <div style={{ marginTop: '10px' }}>
                <Button style={{ height: '150px', width: '150px', borderRadius: '6px', borderStyle: 'dashed' }}><PlusOutlined style={{ fontSize: '60px' }} /></Button>
            </div>
            <div style={{marginTop: '20px'}}>
                <TableComponent />
            </div>
        </div>
    )
}

export default AdminUser