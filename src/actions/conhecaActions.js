import * as types from '../constants/ActionTypes';

export function playFeaturedVideo() {
	return { type: types.PLAY_FEATURED_VIDEO };
}

export function calculateFuelSavings(settings, fieldName, value) {
	return { type: types.CALCULATE_FUEL_SAVINGS, settings, fieldName, value };
}
