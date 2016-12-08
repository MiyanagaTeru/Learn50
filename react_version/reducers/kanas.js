const kana = (id, romaji, hiragana, katakana) => ({
	id,
	romaji,
	hiragana,
	katakana
});

const initialState = [
	kana(0, 'a', 'あ', 'ア'),
	kana(1, 'i', 'い', 'イ'),
	kana(2, 'u', 'う', 'ウ'),
	kana(3, 'e', 'え', 'エ'),
	kana(4, 'o', 'お', 'オ'),
	kana(5, 'ka', 'か', 'カ'),
	kana(6, 'ki', 'き', 'キ'),
	kana(7, 'ku', 'く', 'ク'),
	kana(8, 'ke', 'け', 'ケ'),
	kana(9, 'ko', 'こ', 'コ'),
];

const kanas = (state = initialState, action) => {
	switch (action.type) {
		case 'GET_ONE_KANA':
			if (state.length > 0) {
				const tarIndex = Math.floor(Math.random() * state.length);
				return state.map(
					(kana, index) => ({
						...kana,
						current: index === tarIndex
					})
				)
			} else {
				return state;
			}
		case 'REMOVE_KANA':
			return state.filter(kana => kana.id !== action.id);
		default:
			return state;
	}
};

export default kanas;