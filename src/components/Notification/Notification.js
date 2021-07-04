import React from 'react';
import styles from './Notification.module.css';

function Notification({ message }) {
  return (
    <div>
      <h2 className={styles.message}>{message}</h2>
    </div>
  );
}

export default Notification;
