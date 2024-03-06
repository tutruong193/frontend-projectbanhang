import { Modal } from 'antd'
import React from 'react'

const ModalComponent = ({title = "Modal", children, isOpen, ...rests}) => {
  return (
    <Modal title={title} open={isOpen} {...rests}>
        {children}
      </Modal>
  )
}

export default ModalComponent