import React from 'react';
import styles from './Page.module.css';

const letter = { w: '51em', h: '66em' };

export default function Page({ children }) {
	return <div className={styles.root} style={{ width: letter.w, height: letter.h }}>
		<div className={styles.content}>
			{children}
		</div>
	</div>;
}
