import Swal from 'sweetalert2';
import React from 'react';

interface NotificationServiceProps {
  title?: string;
  message?: string;
}

const Notification = {
  success: ({ title, message }: NotificationServiceProps) => {
    Swal.fire({
      title,
      text: message,
      icon: 'success',
    });
  },
  error: ({ title, message }: NotificationServiceProps) => {
    Swal.fire({
      title,
      text: message,
      icon: 'error',
    });
  },
  warning: ({ title, message }: NotificationServiceProps) => {
    Swal.fire({
      title,
      text: message,
      icon: 'warning',
    });
  },
  info: ({ title, message }: NotificationServiceProps) => {
    Swal.fire({
      title,
      text: message,
      icon: 'info',
    });
  },
};

export default Notification;
