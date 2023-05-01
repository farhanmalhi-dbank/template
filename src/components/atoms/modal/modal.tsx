import React from 'react';
import { Modal as AntdModal, ModalProps as AntdModalProps } from 'antd';

export interface ModalProps extends AntdModalProps {}

const Modal: React.FC<ModalProps> = (props: ModalProps) => <AntdModal {...props} />;

export default Modal;
