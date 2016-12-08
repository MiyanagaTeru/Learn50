import React from 'react';

import styles from '../styles.css';

const Flip = ({
	frontText,
	backText
}) =>
	<div className={styles.flip}>
		<div className={styles.card}>
			<div className={`${styles.face} ${styles.front}`}>
				{frontText}
			</div>
			<div className={`${styles.face} ${styles.back}`}>
				{backText}
			</div>
		</div>
	</div>;

export default Flip;
