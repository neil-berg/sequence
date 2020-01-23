import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import {
    userReducer,
    userInitialState,
    setUser,
    removeUser
} from '../user.redux';
import { createTrackedStore } from '@client/util/redux-testing';

const rootReducer = combineReducers({ user: userReducer });

const testUser = {
    _id: 1,
    name: 'testName',
    username: 'testUsername',
    email: 'testEmail@test.com'
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

describe('user actions', () => {
    describe('setUser - normal', () => {
        let store;
        beforeAll(() => {
            store = createTrackedStore(rootReducer);
            store.dispatch(setUser(testUser));
        });
        it('dispatches user/add', () => {
            expect(store.getFirstAction()).toEqual({
                type: 'user/add',
                user: testUser
            });
        });
        afterAll(() => {
            store.clearActions();
        });
    });
    describe('removeUser - normal', () => {
        let store;
        beforeAll(() => {
            store = createTrackedStore(rootReducer);
            store.dispatch(removeUser());
        });
        it('dispatches user/remove', () => {
            expect(store.getFirstAction()).toEqual({
                type: 'user/remove'
            });
        });
        afterAll(() => {
            store.clearActions();
        });
    });
});
