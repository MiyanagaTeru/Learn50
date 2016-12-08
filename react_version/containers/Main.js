import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import actions from '../actions';
import styles from '../styles.css';

import Flip from '../components/Flip';

const Main = ({
	currentKana
}) =>
	<div>
		<Flip frontText='Romaji' backText={currentKana.romaji}/>
		<Flip frontText='Hiragana' backText={currentKana.hiragana}/>
		<Flip frontText='Katakana' backText={currentKana.katakana}/>
		<div id="choice" hidden>
			<button id="yes">Got it</button>
			<button id="no">No</button>
		</div>
	</div>


const mapStateToProps = state => ({
	kanas: state.kanas,
	currentKana: state.currentKana
});

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Main);