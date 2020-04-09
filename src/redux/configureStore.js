<<<<<<< HEAD
import {createStore, combineReducers, applyMiddleware } from 'redux';
<<<<<<< HEAD
import { createForms } from 'react-redux-form';
=======
import {createStore, combineReducers} from 'redux';
>>>>>>> parent of 31792158... Redux THUNK
=======
>>>>>>> parent of 82823151... React Redux Forms Revisitited
import { Campsites } from './campsites';
import { Comments } from './comments';
import { Partners } from './partners';
import { Promotions } from './promotions';
<<<<<<< HEAD
import thunk from 'redux-thunk';
import logger from 'redux-logger';
<<<<<<< HEAD
import { InitialFeedback } from './forms';
=======
>>>>>>> parent of 31792158... Redux THUNK
=======
>>>>>>> parent of 82823151... React Redux Forms Revisitited

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            campsites: Campsites,
            comments: Comments,
            partners: Partners,
<<<<<<< HEAD
<<<<<<< HEAD
            promotions: Promotions,
            ...createForms({
                feedbackForm: InitialFeedback
            })
=======
            promotions: Promotions
>>>>>>> parent of 82823151... React Redux Forms Revisitited
        }),
        applyMiddleware(thunk, logger)
=======
            promotions: Promotions
        })
>>>>>>> parent of 31792158... Redux THUNK
    );

    return store;
}