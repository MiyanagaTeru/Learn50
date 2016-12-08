import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import actions from '../actions';
import styles from '../styles.css';

import Flip from '../components/Flip';

const Main = ({
	kanas,
	currentKana,
	elementStatus,
	flipCard,
	removeKana,
	getOneKana
}) =>
	kanas.length > 0 ?
		<div>
			<Flip card='romaji' currentKana={currentKana} flipCard={flipCard} elementStatus={elementStatus}/>
			<Flip card='hiragana' currentKana={currentKana} flipCard={flipCard} elementStatus={elementStatus}/>
			<Flip card='katakana' currentKana={currentKana} flipCard={flipCard} elementStatus={elementStatus}/>
			<div className={styles.choice} hidden={!(elementStatus.romajiFlipped && elementStatus.hiraganaFlipped && elementStatus.katakanaFlipped)}>
				<button
					onClick={e => {
						removeKana(currentKana.id);
						flipCard('romaji');
						flipCard('hiragana');
						flipCard('katakana');
						setTimeout(() => getOneKana(), 500);
					}}
					className={styles.yes}>
					Got it
				</button>
				<button
					onClick={e => {
						flipCard('romaji');
						flipCard('hiragana');
						flipCard('katakana');
						setTimeout(() => getOneKana(), 500);
					}}
					className={styles.no}>
					No
				</button>
			</div>
		</div>
	:
		<div hidden={kanas.length > 0}>
			Congrats, you have learned all kanas!
		</div>


const mapStateToProps = state => ({
	kanas: state.kanas,
	currentKana: state.kanas.find(kana => kana.current),
	elementStatus: state.elementStatus
});

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Main);