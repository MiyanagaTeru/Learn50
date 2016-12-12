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
	kana(10, 'sa', 'さ', 'サ'),
	kana(11, 'shi', 'し', 'シ'),
	kana(12, 'su', 'す', 'ス'),
	kana(13, 'se', 'せ', 'セ'),
	kana(14, 'so', 'そ', 'ソ'),
	kana(15, 'ta', 'た', 'タ'),
	kana(16, 'chi', 'ち', 'チ'),
	kana(17, 'tsu', 'つ', 'ツ'),
	kana(18, 'te', 'て', 'テ'),
	kana(19, 'to', 'と', 'ト'),
	kana(20, 'na', 'な', 'ナ'),
	kana(21, 'ni', 'に', 'ニ'),
	kana(22, 'nu', 'ぬ', 'ヌ'),
	kana(23, 'ne', 'ね', 'ネ'),
	kana(24, 'no', 'の', 'ノ'),
	kana(25, 'ha', 'は', 'ハ'),
	kana(26, 'hi', 'ひ', 'ヒ'),
	kana(27, 'fu', 'ふ', 'フ'),
	kana(28, 'he', 'へ', 'ヘ'),
	kana(29, 'ho', 'ほ', 'ホ'),
	kana(30, 'ma', 'ま', 'マ'),
	kana(31, 'mi', 'み', 'ミ'),
	kana(32, 'mu', 'む', 'ム'),
	kana(33, 'me', 'め', 'メ'),
	kana(34, 'mo', 'も', 'モ'),
	kana(35, 'ya', 'や', 'ヤ'),
	kana(36, 'yu', 'ゆ', 'ユ'),
	kana(37, 'yo', 'よ', 'ヨ'),
	kana(38, 'ra', 'ら', 'ラ'),
	kana(39, 'ri', 'り', 'リ'),
	kana(40, 'ru', 'る', 'ル'),
	kana(41, 're', 'れ', 'レ'),
	kana(42, 'ro', 'ろ', 'ロ'),
	kana(43, 'wa', 'わ', 'ワ'),
	kana(44, 'wo', 'を', 'ヲ'),
	kana(45, 'n', 'ん', 'ン')
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