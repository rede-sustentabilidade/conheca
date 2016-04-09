import * as types from '../constants/ActionTypes';

export function playFeaturedVideo() {
	return { type: types.PLAY_FEATURED_VIDEO };
}

function saveThemes(data) {
	return { type: types.SAVE_THEMES, data };
}

export function loadThemes() {
		return (dispatch) => {
			return fetch('http://rede.site/wp-json/wp/v2/conheca')
			.then(response => response.json())
      .then(response => {
				dispatch(saveThemes(response));
			})
		};
}

export function openThemeDetails(id) {
	return { type: types.OPEN_THEME_DETAILS, id };
}
