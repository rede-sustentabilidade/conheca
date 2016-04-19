import * as types from '../constants/ActionTypes';
import 'whatwg-fetch';

export function playFeaturedVideo() {
	return { type: types.PLAY_FEATURED_VIDEO };
}

function saveThemes(data) {
	return { type: types.SAVE_THEMES, data };
}

export function handleCloseModal() {
	return { type: types.CLOSE_THEME_DETAILS };
}

export function loadThemes(id=null) {
		return (dispatch) => {
			return fetch('https://redesustentabilidade.org.br/wp-json/wp/v2/conheca?per_page=100')
			.then(response => response.json())
      .then(response => {
				dispatch(saveThemes(response));
				if (id !== null) {
						dispatch(openThemeDetails(id));
				}
			});
		};
}

export function openThemeDetails(id) {
	return { type: types.OPEN_THEME_DETAILS, id };
}
