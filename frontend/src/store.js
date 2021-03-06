/**
 * React Static Boilerplate
 * https://github.com/kriasoft/react-static-boilerplate
 *
 * Copyright © 2015-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import { createStore } from 'redux';
import update from 'react-addons-update';

// Centralized application state
// For more information visit http://redux.js.org/
const initialState = {
  main: {
    currentRoundTimeLeft: 0,
    playerWin: ''
  },
  admin: {
  },
};

const store = createStore((state = initialState, action) => {

  switch (action.type) {
    case 'CHANGE_ROUND':
		action.data.updateScore = true;
      return update(state, {
        main: { currentRoundInfo: { $set: action.data } },
      });

    //  Timer
    case 'UPDATE_TIMER':
      return update(state, {
        main: { currentRoundTimeLeft: { $set: action.data } },
      });

    default:
      return state;
  }
}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
