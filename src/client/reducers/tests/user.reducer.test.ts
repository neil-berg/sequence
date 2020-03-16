import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';

import { userInitialState, userReducer } from '../user';
import { removeUser, setUser } from '../../actions';

const rootReducer = combineReducers({ user: userReducer });

const testUser = {
  _id: 1,
  name: 'testName',
  username: 'testUsername',
  email: 'testEmail@test.com',
  created: new Date(),
  updated: new Date()
};

describe('userReducer', () => {
  let store;
  console.log('NODE_ENV', process.env.NODE_ENV);

  describe('user/add', () => {
    beforeAll(() => {
      store = createStore(rootReducer, applyMiddleware(thunk));
      store.dispatch(setUser(testUser));
    });

    it('adds a user', () => {
      expect(store.getState().user).toEqual(testUser);
    });

    afterAll(() => {
      store = null;
    });
  });
  describe('user/remove', () => {
    beforeAll(() => {
      store = createStore(rootReducer, applyMiddleware(thunk));
      store.dispatch(removeUser());
    });

    it('removes a user', () => {
      expect(store.getState().user).toEqual(userInitialState);
    });

    afterAll(() => {
      store = null;
    });
  });
});
