import React from 'react';
import styles from './Box.module.css';

export default function Box({ children, label, type, style, contentStyle, lined }) {
	return <div className={`${styles.root} ${styles[type || 'std'] || ''} ${lined ? styles.lined : ''}`} style={style}>
		<div className={`${styles.border} ${styles.bg}`}/>
		<div className={styles.contents} style={contentStyle}>
			{children}
		</div>
		{label && <div className={styles.label}>{label}</div>}
		<div className={`${styles.border} ${styles.fg}`}/>
	</div>
}