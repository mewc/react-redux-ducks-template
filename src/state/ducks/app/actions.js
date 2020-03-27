import {
    createAction
} from 'redux-actions';
import types from './types';

export const loadingStart = createAction(types.LOADING_START, () => true);
export const loadingEnd = createAction(types.LOADING_END, () => false);
