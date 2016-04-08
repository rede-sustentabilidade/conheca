import {PLAY_FEATURED_VIDEO} from '../constants/ActionTypes';

import objectAssign from 'object-assign';

const initialState = {
  isPlaying: false
};

//IMPORTANT: Note that with Redux, state should NEVER be changed.
//State is considered immutable. Instead,
//create a copy of the state passed and set new values on the copy.
//Note that I'm using Object.assign to create a copy of current state
//and update values on the copy.
export default function fuelSavingsAppState(state = initialState, action) {
	switch (action.type) {
		case PLAY_FEATURED_VIDEO:
      // For this example, just simulating a save by changing date modified.
      // In a real app using Redux, you might use redux-thunk and handle the async call in fuelSavingsActions.js
			return objectAssign({}, state, { isPlaying: true });

		default:
			return state;
	}
}
