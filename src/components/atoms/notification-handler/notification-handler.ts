import { notification } from 'antd';

export interface NotificationProps {
  title: string;
  description: string;
  type: 'success' | 'info' | 'error' | 'warning' | 'none';
}

const NotificationHandler = (props: NotificationProps) => {
  const params = {
    message: props.title,
    description: props.description,
    duration: 0
  };
  switch (props.type) {
    case 'success':
      notification.success(params);
      break;
    case 'info':
      notification.info(params);
      break;
    case 'error':
      notification.error(params);
      break;
    case 'warning':
      notification.warning(params);
      break;

    default:
      notification.open(params);
  }
};

export default NotificationHandler;
