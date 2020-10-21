import React from 'react';
import styles from './Loading.css';

function Loading() {
  return (
    <img 
      id={styles.loading} 
      src="https://media.giphy.com/media/XDSMr8dDUs04dvz3LV/giphy.gif" 
      alt="loading"
    />
  );
}

export default Loading;

