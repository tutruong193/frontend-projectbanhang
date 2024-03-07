import { Table } from 'antd';
import React, { useState } from 'react'
import Loading from '../../components/LoadingComponent/Loading'
const TableComponent = (props) => {
  const { selectionType = 'checkbox', data = [], isLoading = false, columns = [] , handleDeleteMany} = props
  const [rowSelectedKeys, setRowSelectedKeys] = useState([])
  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      setRowSelectedKeys(selectedRowKeys)
    },
    // getCheckboxProps: (record) => ({
    //   disabled: record.name === 'Disabled User',
    //   // Column configuration not to be checked
    //   name: record.name,
    // }),
  };
  const handleDeleteAll = () => {
    handleDeleteMany(rowSelectedKeys)
  }
  return (
    <div>
      <Loading isLoading={isLoading}>
        {rowSelectedKeys.length > 0 && (
          <div style={{
            background: '#1d1ddd',
            color: '#fff',
            fontWeight: 'bold',
            padding: '10px',
            cursor: 'pointer'
          }}
            onClick={handleDeleteAll}>
            Xóa tất cả
          </div>
        )}
        <Table
          rowSelection={{
            type: selectionType,
            ...rowSelection,
          }}
          columns={columns}
          dataSource={data}
          {...props}
        />
      </Loading>
    </div>
  )
}

export default TableComponent