// npm install --save-dev jest @babel/preset-env @babel/preset-react eslint-plugin-jest
// Create file .babelrc and fill with particular content
// Expand package.json with new "scripts": {/... "test": "jest"}
// Add to .eslintrc.cjs - env: {/... "jest/globals": true}
// npm install --save-dev deep-freeze


import deepFreeze from 'deep-freeze'
import counterReducer from './reducer'

describe('Unicafe Reducer', () => {
  const initialState = {
    good: 0,
    ok: 0,
    bad: 0
  }

  test('should return a proper initial state when called with undefined state', () => {
    const state = {}
    const action = {
      type: 'DO_NOTHING'
    }

    const newState = counterReducer(undefined, action)
    expect(newState).toEqual(initialState)
  })

  test('good is incremented', () => {
    const action = {
      type: 'GOOD'
    }
    const state = initialState

    deepFreeze(state)
    const newState = counterReducer(state, action)
    expect(newState).toEqual({
      good: 1,
      ok: 0,
      bad: 0
    })
  })
})