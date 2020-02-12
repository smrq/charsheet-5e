import React from 'react';
import styles from './ProficiencyList.module.css';

export default function ProficiencyList({ children }) {
	return <ul className={styles.root}>
		{React.Children.map(children, child => <li>
			<span className={styles.bubble} />
			<span className={styles.value} />
			<span className={styles.label}>{child}</span>
		</li>)}
	</ul>;
}