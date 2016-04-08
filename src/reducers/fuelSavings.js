import {PLAY_FEATURED_VIDEO} from '../constants/ActionTypes';

import objectAssign from 'object-assign';

const initialState = {
  isPlaying: false,
  themes: [
  {
    "id": 7721,
    "date": "2016-04-08T12:33:52",
    "date_gmt": "2016-04-08T14:33:52",
    "guid": {
      "rendered": "http://rede.site/?post_type=conheca&#038;p=7721"
    },
    "modified": "2016-04-08T12:46:21",
    "modified_gmt": "2016-04-08T14:46:21",
    "slug": "mudancas-climaticas",
    "type": "conheca",
    "link": "http://rede.site/conheca/mudancas-climaticas/",
    "title": {
      "rendered": "MUDANÇAS CLIMÁTICAS"
    },
    "content": {
      "rendered": "<p><iframe width=\"630\" height=\"354\" src=\"https://www.youtube.com/embed/kVjO1ydg_cg?feature=oembed\" frameborder=\"0\" allowfullscreen></iframe></p>\n"
    },
    "featured_media": 7724,
    "list_categories": [
      {
        "term_id": 1248,
        "name": "jovens",
        "slug": "jovens",
        "term_group": 0,
        "term_taxonomy_id": 1248,
        "taxonomy": "conheca_categorias",
        "description": "",
        "parent": 0,
        "count": 1,
        "filter": "raw"
      }
    ],
    "url_featured_media": "http://rede-sustentabilidade-org.s3-sa-east-1.amazonaws.com/2016/04/site-rede-conheca-ilustracoes-01_0.svg",
    "_links": {
      "self": [
        {
          "href": "http://rede.site/wp-json/wp/v2/conheca/7721"
        }
      ],
      "collection": [
        {
          "href": "http://rede.site/wp-json/wp/v2/conheca"
        }
      ],
      "about": [
        {
          "href": "http://rede.site/wp-json/wp/v2/types/conheca"
        }
      ],
      "https://api.w.org/featuredmedia": [
        {
          "embeddable": true,
          "href": "http://rede.site/wp-json/wp/v2/media/7724"
        }
      ],
      "https://api.w.org/attachment": [
        {
          "href": "http://rede.site/wp-json/wp/v2/media?parent=7721"
        }
      ]
    }
  }
]
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
