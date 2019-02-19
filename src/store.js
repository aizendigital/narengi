import { applyMiddleware, createStore } from "redux";
import { combineReducers } from "redux-immutable";
import { composeWithDevTools } from "redux-devtools-extension";
import { routerReducer } from "react-router-redux";
import createSagaMiddleware from "redux-saga";
import { createLogger } from "redux-logger";
import { fromJS } from "immutable";
import { FLUSH } from "utils/middlewares/redux";

const rootSage = function*() {

};
const sagaMiddleware = createSagaMiddleware();
const logger = createLogger(); // eslint-disable-line

const rootReducer = (state, action) => {
    if (action.type === FLUSH) {
        state = undefined;
    }

    return combineReducers({
        router: routerReducer,
    })(state, action);
};

const store = createStore(
    rootReducer,
    fromJS({}),
    composeWithDevTools(
        applyMiddleware(
            sagaMiddleware,
            logger // eslint-disable-line
        )
    )
);
sagaMiddleware.run(rootSage);
export { store };
