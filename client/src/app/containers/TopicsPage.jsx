import React from 'react';

import { getState } from '../state/state';

function TopicsPage() {
  const [state, dispatch] = getState();

  return (
    <div>
      {console.log('hooks-based state:', state)}
      <button
        type="button"
        onClick={() =>
          dispatch({
            type: 'SET_TOPICS',
            payload: [1, 2, 3],
          })
        }
      >
        {' '}
        Set Topics
      </button>
    </div>
  );
}

export default TopicsPage;
