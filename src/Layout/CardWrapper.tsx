import React from 'react';
import styles from './Modal.module.css';

const CardWrapper = (props: any) => {
  return <div className={styles.card}>{props.children}</div>;
};

export default CardWrapper;
