import React from 'react';

import styles from '../styles.css';

const Flip = ({
	card,
	currentKana,
	elementStatus,
	flipCard
}) =>
	<div
		onClick={e => flipCard(card)}
		className={styles.flip}>
		<div className={`${styles.card} ${elementStatus[`${card}Flipped`] ? styles.flipped : ''}`}>
			<div className={`${styles.face} ${styles.front}`}>
				{card.toUpperCase()}
			</div>
			<div className={`${styles.face} ${styles.back}`}>
				{currentKana && currentKana[card]}
			</div>
		</div>
	</div>;

export default Flip;
