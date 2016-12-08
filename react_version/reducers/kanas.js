const kana = (id, romaji, hiragana, katakana) => ({
	id,
	romaji,
	hiragana,
	katakana
});

const initialState = [
	kana(0, 'a', 'あ', 'ア'),
	kana(1, 'i', 'い', 'イ')
];

const kanas = (state = initialState, action) => {
	switch (action.type) {
		default:
			return state;
	}
};

export default kanas;