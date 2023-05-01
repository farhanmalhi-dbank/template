import { message } from 'antd';

interface MessageProps {
  title: string;
  type: 'success' | 'info' | 'error' | 'warning' | 'none';
}

const MessageHandler = ({ title, type }: MessageProps) => {
  switch (type) {
    case 'success':
      message.success(title);
      break;
    case 'info':
      message.info(title);
      break;
    case 'error':
      message.error(title);
      break;
    case 'warning':
      message.warning(title);
      break;

    default:
      message.loading(title);
  }
};

export default MessageHandler;
