<<<<<<< HEAD
import {createStore, combineReducers, applyMiddleware } from 'redux';
import { createForms } from 'react-redux-form';
=======
import {createStore, combineReducers} from 'redux';
>>>>>>> parent of 31792158... Redux THUNK
import { Campsites } from './campsites';
import { Comments } from './comments';
import { Partners } from './partners';
import { Promotions } from './promotions';
<<<<<<< HEAD
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { InitialFeedback } from './forms';
=======
>>>>>>> parent of 31792158... Redux THUNK

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            campsites: Campsites,
            comments: Comments,
            partners: Partners,
<<<<<<< HEAD
            promotions: Promotions,
            ...createForms({
                feedbackForm: InitialFeedback
            })
        }),
        applyMiddleware(thunk, logger)
=======
            promotions: Promotions
        })
>>>>>>> parent of 31792158... Redux THUNK
    );

    return store;
}