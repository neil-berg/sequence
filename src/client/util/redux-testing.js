import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

export const trackActions = ctx => {
    ctx.actions = [];
    return store => next => action => {
        ctx.actions.push(action);
        return next(action);
    };
};

export const createTrackedStore = (rootReducer, middleware = [thunk]) => {
    const ctx = {};
    const store = createStore(
        rootReducer,
        applyMiddleware(...middleware, trackActions(ctx))
    );
    return Object.assign(store, {
        getActions: () => ctx.actions,
        getFirstAction: () => ctx.actions[0],
        getNthAction: n =>
            n > ctx.actions.length
                ? new Error('out of bounds')
                : ctx.actions[n - 1],
        getLastAction: () => ctx.actions[ctx.actions.length - 1],
        clearActions: () => (ctx.actions = [])
    });
};
