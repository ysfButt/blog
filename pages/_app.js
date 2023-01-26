import React from 'react';
import { Modal } from 'antd';
import { ExclamationCircleOutlined, WarningOutlined, CheckCircleOutlined, CloseCircleOutlined } from '@ant-design/icons';

// Compnents
import MainLayout from '../components/MainLayout';

// Styles
import '../styles/main.css';
import '../styles/index.css';

const { confirm } = Modal;

const MyApp = ({ Component, pageProps }) => {

  const notify = (title, description, type = 'info', okBtn = { text: 'Confirm', onClick: () => { }, params: {} }, cancelBtn) => {
    if (!title || !description) return;
    let params = okBtn.params || {};
    params = Object.keys(params).map((k)=> params[k]);

    if (description && description.includes("Network error") && process.env.NODE_ENV !== "development") {
      title = "Error";
      description = "Your request cannot be processed at this time, Contact Support!";
      type = 'error';
    }

    let icon = <ExclamationCircleOutlined className="icon" />;
    if (type === 'success') icon = <CheckCircleOutlined className="icon success" />;
    if (type === 'warning') icon = <WarningOutlined className="icon warning" />;
    if (type === 'error') icon = <CloseCircleOutlined className="icon danger" />;

    confirm({
      icon,
      centered: true,
      content: <div className="notify-modal-content">
        <h3 className={`text-${type === 'error' ? 'danger' : type}`}>{title}</h3>
        <p className="mr-b-0">{description}</p>
      </div>,
      okText: okBtn.text,
      ...(cancelBtn?.text && { cancelText: cancelBtn.text }),
      okType: type,
      okButtonProps: { size: 'large', type: type === 'error' ? 'danger' : type },
      cancelButtonProps: { className: cancelBtn && cancelBtn.text ? '' : 'd-none' },
      ...(cancelBtn?.onClick && { onCancel: (close) => { cancelBtn.onClick(close); close(); } }),
      onOk: (close) => { okBtn.onClick(...params); close(); }
    });
  };

  return (
    <MainLayout notify={notify}>
      <Component {...pageProps} notify={notify} /> 
    </MainLayout>
  )
};

export default MyApp;
